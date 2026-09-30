(function () {
  'use strict';

  var C = window.MAZI_COURSE;
  var G = window.GreekSay;
  var B = window.MaziBook;
  var X = C.extra || {};
  var KEY = 'mazi-greek-v1';
  var DAY_MS = 86400000;
  var REVIEW_MAX = 8;

  var LESSONS = {};
  C.lessons.forEach(function (l) { LESSONS[l.n] = l; });

  /* ---------- dates ---------- */
  function pad(n) { return String(n).padStart(2, '0'); }
  function dayStr(d) { d = d || new Date(); return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function parseDay(s) { var p = s.split('-').map(Number); return new Date(p[0], p[1] - 1, p[2]); }
  function addDays(s, n) { var d = parseDay(s); d.setDate(d.getDate() + n); return dayStr(d); }
  function today() { return dayStr(); }
  function dateIndex() { return Math.floor(parseDay(today()).getTime() / DAY_MS); }

  /* ---------- state ---------- */
  function freshProfile(name) { return { name: name, completed: 0, finishedOn: {}, cards: {}, active: [], opened: {}, scroll: {}, aheadOk: 0 }; }
  function freshState() { return { v: 3, who: 'a', theme: 'system', keys: true, setup: false, couple: null, profiles: { a: freshProfile('Husband'), b: freshProfile('Wife') } }; }
  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) {
        var s = JSON.parse(raw);
        if (s && s.v === 3 && s.profiles) return s;
        if (s && (s.v === 1 || s.v === 2) && s.profiles) {
          // Earlier versions: keep names, theme, sync code and lesson progress where there was any.
          var f = freshState();
          f.who = s.who || 'a'; f.theme = s.theme || 'system'; f.setup = !!s.setup; f.couple = s.couple || null;
          ['a', 'b'].forEach(function (k) {
            var o = s.profiles[k] || {};
            f.profiles[k].name = o.name || f.profiles[k].name;
            if (s.v === 2) {
              f.profiles[k].completed = o.completed || 0; f.profiles[k].finishedOn = o.finishedOn || {};
              f.profiles[k].cards = o.cards || {}; f.profiles[k].active = o.active || [];
            }
          });
          return f;
        }
      }
    } catch (e) { /* storage unavailable */ }
    return freshState();
  }
  var S = load();
  function P() { return S.profiles[S.who]; }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* ignore */ } schedulePush(); }

  function markActive() {
    var p = P(), t = today();
    if (p.active.indexOf(t) === -1) { p.active.push(t); if (p.active.length > 800) p.active = p.active.slice(-800); }
  }
  function streak(p) {
    var set = {}; p.active.forEach(function (d) { set[d] = 1; });
    var d = today();
    if (!set[d]) d = addDays(d, -1);
    var n = 0;
    while (set[d]) { n++; d = addDays(d, -1); }
    return n;
  }

  /* ---------- appearance ---------- */
  function applyTheme() {
    var t = S.theme === 'light' || S.theme === 'dark' ? S.theme : null;
    if (t) document.documentElement.setAttribute('data-theme', t);
    else document.documentElement.removeAttribute('data-theme');
    var dark = t ? t === 'dark' : !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', dark ? '#16101C' : '#FAF7FB');
  }
  applyTheme();
  try { window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme); } catch (e) { /* old browsers */ }

  /* ---------- helpers ---------- */
  var esc = B.esc;
  var $page = document.getElementById('page');
  var toastTimer;
  function toast(msg) {
    var t = document.getElementById('toast');
    t.textContent = msg; t.hidden = false;
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { t.hidden = true; }, 2800);
  }
  function unitOf(n) { return C.units.find(function (u) { return n >= u.from && n <= u.to; }); }
  function itemsOf(n) {
    var l = LESSONS[n];
    return l ? l.items.map(function (it, i) { return Object.assign({ key: n + ':' + i }, it); }) : [];
  }
  function itemByKey(key) {
    var parts = key.split(':'), l = LESSONS[+parts[0]];
    return l && l.items[+parts[1]] ? Object.assign({ key: key }, l.items[+parts[1]]) : null;
  }
  function olderItems(n) { var out = []; for (var k = 1; k < n; k++) out = out.concat(itemsOf(k)); return out; }

  /* ---------- speech ---------- */
  var greekVoice = null;
  function pickVoice() {
    if (!('speechSynthesis' in window)) return;
    var vs = window.speechSynthesis.getVoices() || [];
    greekVoice = vs.find(function (v) { return /^el(-|_|$)/i.test(v.lang); }) || null;
  }
  if ('speechSynthesis' in window) {
    pickVoice();
    try { window.speechSynthesis.addEventListener('voiceschanged', pickVoice); } catch (e) { window.speechSynthesis.onvoiceschanged = pickVoice; }
  }
  var warnedVoice = false;
  function say(text) {
    if (!('speechSynthesis' in window)) { toast('This browser cannot read aloud. Use the pronunciation guide.'); return; }
    var clean = String(text).replace(/\s*\/\s*/g, ', ').replace(/_{2,}/g, '').replace(/[…«»]/g, '');
    var u = new SpeechSynthesisUtterance(clean);
    u.lang = 'el-GR'; u.rate = 0.8;
    if (greekVoice) u.voice = greekVoice;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
    if (!greekVoice && !warnedVoice) { warnedVoice = true; toast('No Greek voice found. Settings explains how to add one.'); }
  }

  /* ---------- spaced review ---------- */
  function dueCards() {
    var p = P(), t = today();
    return Object.keys(p.cards).filter(function (k) { return p.cards[k].due <= t && itemByKey(k); })
      .sort(function (a, b) { return p.cards[a].due < p.cards[b].due ? -1 : 1; });
  }
  function gradeCard(key, good) {
    var p = P(), t = today(), c = p.cards[key];
    if (!c) return;
    if (!good) { c.reps = 0; c.ivl = 1; c.due = addDays(t, 1); return; }
    c.ivl = c.reps === 0 ? 2 : c.reps === 1 ? 4 : Math.round(Math.max(c.ivl, 1) * 2.3);
    c.reps++;
    c.due = addDays(t, c.ivl);
  }
  function reviewFor(n) {
    var due = dueCards().slice(0, REVIEW_MAX).map(itemByKey);
    if (due.length) return due;
    return n > 1 ? itemsOf(n - 1).slice(0, 6) : [];
  }

  /* ---------- sync with your spouse (js/sync.js does the network part) ---------- */
  var remote = { status: 'off', uid: null, members: [], error: '' };
  var pushTimer;
  function schedulePush() {
    clearTimeout(pushTimer);
    pushTimer = setTimeout(function () {
      if (S.couple && window.MaziSync) window.MaziSync.push(summary()).catch(function () { /* retried on next save */ });
    }, 1200);
  }
  // Stored fields: "day" holds the number of lessons finished; "done" is 1 when today's lesson is finished.
  function summary() {
    var p = P();
    return { name: p.name, streak: streak(p), day: p.completed, date: today(), done: p.finishedOn[p.completed] === today() ? 1 : 0, total: 1, started: Object.keys(p.cards).length };
  }
  function partner() {
    if (!S.couple) return null;
    var others = remote.members.filter(function (m) { return m.uid !== remote.uid; })
      .sort(function (a, b) { return (b.updated || 0) - (a.updated || 0); });
    return others[0] || null;
  }
  function spouseName() {
    var m = partner();
    if (m && m.name) return m.name;
    return S.profiles[S.who === 'a' ? 'b' : 'a'].name;
  }
  var CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  function newCode() {
    var a = new Uint32Array(16), out = '';
    window.crypto.getRandomValues(a);
    for (var i = 0; i < 16; i++) { out += CODE_CHARS[a[i] % CODE_CHARS.length]; if (i % 4 === 3 && i < 15) out += '-'; }
    return out;
  }
  function cleanCode(v) {
    var c = String(v || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
    if (c.length !== 16) return null;
    for (var i = 0; i < c.length; i++) if (CODE_CHARS.indexOf(c[i]) === -1) return null;
    return c.match(/.{4}/g).join('-');
  }
  function connectCouple(code) {
    S.couple = code; save();
    remote.status = 'connecting'; remote.error = ''; refresh();
    window.MaziSync.connect(code);
  }
  window.MaziApp = {
    couple: function () { return S.couple || null; },
    summary: summary,
    setRemote: function (patch) {
      var statusChanged = patch.status !== undefined && patch.status !== remote.status;
      Object.keys(patch).forEach(function (k) { remote[k] = patch[k]; });
      if (view === 'home' || (view === 'settings' && statusChanged)) refresh();
    }
  };

  /* ---------- masthead ---------- */
  function mast() {
    if (!S.setup) return '<div class="mast"><span class="brand" lang="el">μαζί</span></div>';
    var cur = view === 'lesson' ? (lessonN > P().completed ? 'home' : 'course') : view;
    function nb(v, label) { return '<button type="button" data-view="' + v + '"' + (cur === v ? ' aria-current="page"' : '') + '>' + label + '</button>'; }
    return '<div class="mast"><span class="brand" lang="el">μαζί</span><nav aria-label="Sections">' + nb('home', 'Today') + nb('course', 'Lessons') +
      '<button type="button" class="gear" data-view="settings" aria-label="Settings"' + (cur === 'settings' ? ' aria-current="page"' : '') + '>⚙</button></nav></div>';
  }

  /* ---------- home ---------- */
  function weekTable() {
    var p = P(), t = today(), d = parseDay(t), dow = (d.getDay() + 6) % 7, monday = addDays(t, -dow);
    var days = [], labels = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    for (var i = 0; i < 7; i++) days.push(addDays(monday, i));
    var mine = {}; p.active.forEach(function (x) { mine[x] = 1; });
    var m = partner(), theirs = {};
    if (m && m.date && m.streak) for (var k = 0; k < m.streak; k++) theirs[addDays(m.date, -k)] = 1;
    function row(name, set, cls) {
      return '<tr><td>' + esc(name) + '</td>' + days.map(function (x) {
        return '<td><span class="d' + (set[x] ? ' on ' + cls : x === t ? ' today' : '') + '"></span></td>';
      }).join('') + '</tr>';
    }
    return '<table class="week" aria-label="This week"><thead><tr><th></th>' + labels.map(function (l, i) { return '<th' + (days[i] === t ? ' class="today"' : '') + '>' + l + '</th>'; }).join('') + '</tr></thead><tbody>' +
      row(p.name, mine, '') + (m ? row(m.name, theirs, 'her') : '') + '</tbody></table>';
  }
  function waitingFor(next) {
    var m = partner();
    return !!m && (m.day || 0) < next - 1 && P().aheadOk !== next;
  }
  function contentsList(L) {
    var x = X[L.n] || {};
    var parts = ['Review', 'Reading' + (x.reading ? ': ' + x.reading.title : ''), 'Vocabulary', L.grammar.title];
    if (x.bible) parts.push('From the Bible: ' + x.bible.ref);
    parts.push('Exercises', 'Together');
    return '<p class="note-line">' + parts.map(esc).join(' · ') + '</p>';
  }
  function renderHome() {
    var p = P(), next = p.completed + 1, L = LESSONS[next], m = partner();
    var hour = new Date().getHours();
    var greet = hour < 12 ? 'Καλημέρα' : 'Καλησπέρα';
    var h = '<p class="greet" lang="el">' + greet + ', ' + esc(p.name) + '</p>' +
      '<p class="note-line">' + streak(p) + '-day streak' + (m ? ' · ' + esc(m.name) + ': ' + ((m.date === today() || m.date === addDays(today(), -1)) ? m.streak : 0) + ' days' : '') + '</p>' +
      weekTable();
    if (m) {
      var mDone = m.date === today() && m.done;
      h += '<p class="note-line">' + esc(m.name) + (mDone ? ' finished lesson ' + m.day + ' today.' : ' has finished ' + (m.day || 0) + ' lesson' + (m.day === 1 ? '' : 's') + ' so far.') + '</p>';
    } else if (!S.couple) {
      h += '<p class="note-line"><button type="button" class="linkbtn" data-view="settings">Connect with your spouse ›</button></p>';
    }

    h += '<div class="todaybox">';
    var finishedToday = p.completed > 0 && p.finishedOn[p.completed] === today();
    if (!L) {
      h += '<div class="kicker">All caught up</div><h1>You\'ve finished every lesson written so far.</h1><p>New lessons are on the way. Meanwhile, reread a finished lesson from the Lessons page, and keep talking together.</p>';
    } else if (finishedToday) {
      var done = LESSONS[p.completed];
      h += '<div class="kicker">Lesson ' + p.completed + ' done</div><h1 lang="el">Μπράβο!</h1>' +
        '<p>You finished <i>' + esc(done.title) + '</i> today. Tomorrow: lesson ' + next + ', <i>' + esc(L.title) + '</i>.</p>' +
        '<div class="btnrow"><button type="button" class="btn" data-lesson="' + p.completed + '">Reread today\'s lesson</button>' +
        '<button type="button" class="linkbtn" data-open="' + next + '">Start lesson ' + next + ' anyway ›</button></div>';
    } else if (waitingFor(next)) {
      h += '<div class="kicker">Lesson ' + next + ' · ' + esc((unitOf(next) || {}).title || '') + '</div><h1>Waiting for ' + esc(m.name) + '</h1>' +
        '<p>You take each lesson together. ' + esc(m.name) + ' still has lesson ' + ((m.day || 0) + 1) + ' to finish; then lesson ' + next + ' opens for you both. Meanwhile, reread the last lesson.</p>' +
        '<div class="btnrow">' + (p.completed ? '<button type="button" class="btn" data-lesson="' + p.completed + '">Reread lesson ' + p.completed + '</button>' : '') +
        '<button type="button" class="linkbtn" data-open="' + next + '" data-ahead="1">Go ahead anyway ›</button></div>';
    } else {
      var x = X[next] || {};
      var started = p.opened[next];
      h += '<div class="kicker">Today · Lesson ' + next + ' · ' + esc((unitOf(next) || {}).title || '') + '</div>' +
        '<h1>' + esc(L.title) + '</h1><p class="lede">' + esc(L.goal) + '</p>' + (x.intro ? '<p>' + esc(x.intro) + '</p>' : '') +
        contentsList(L) +
        '<div class="btnrow"><button type="button" class="btn solid" data-open="' + next + '">' + (started ? 'Continue reading' : 'Open lesson ' + next) + '</button><span class="note-line">About 30 minutes</span></div>';
    }
    h += '</div>';

    var pool = [];
    for (var k = 1; k <= Math.max(1, p.completed); k++) pool = pool.concat(itemsOf(k).filter(function (it) { return it.k !== 'letter'; }));
    if (pool.length) {
      var w = pool[dateIndex() % pool.length];
      h += '<aside class="wod"><span class="label">Word of the day</span>' +
        '<span class="w gr" lang="el">' + esc(w.el) + '</span> <button type="button" class="play" data-say="' + esc(w.el) + '" aria-label="Listen">' +
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor"/><path d="M16.5 8.5a5 5 0 0 1 0 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button>' +
        '<br><span class="tel">' + esc(G.telugu(w.el)) + '</span> <span class="tr">' + esc(G.latin(w.el)) + '</span><br>' + esc(w.en) + (w.tm ? ' · <span class="te muted">' + esc(w.tm) + '</span>' : '') + '</aside>';
    }
    return h;
  }

  /* ---------- lesson ---------- */
  var lessonN = 1, book = null;
  function renderLesson() {
    var p = P(), L = LESSONS[lessonN], finished = lessonN <= p.completed;
    var ctx = { me: p.name, spouse: spouseName(), unit: (unitOf(lessonN) || {}).title, review: finished ? [] : reviewFor(lessonN), older: olderItems(lessonN), keys: S.keys !== false };
    book = B.render(L, X[lessonN], ctx);
    book.review = ctx.review;
    var html = book.html;
    if (finished) {
      html = html.replace(/<div class="finish">[\s\S]*$/, '<div class="finish"><p style="margin:0">You finished this lesson' + (p.finishedOn[lessonN] ? ' on ' + esc(p.finishedOn[lessonN]) : '') + '.</p>' +
        '<div class="btnrow">' + (lessonN > 1 ? '<button type="button" class="btn" data-lesson="' + (lessonN - 1) + '">‹ Lesson ' + (lessonN - 1) + '</button>' : '') +
        (lessonN < p.completed ? '<button type="button" class="btn" data-lesson="' + (lessonN + 1) + '">Lesson ' + (lessonN + 1) + ' ›</button>' : '') + '</div></div>');
    }
    return html;
  }
  function finishLesson() {
    var p = P(), n = lessonN, t = today();
    // Review: unticked items were remembered, ticked ones come back tomorrow.
    (book.review || []).forEach(function (it) {
      if (!it.key || !p.cards[it.key]) return;
      var box = $page.querySelector('[data-missed="' + it.key + '"]');
      gradeCard(it.key, !(box && box.checked));
    });
    p.completed = Math.max(p.completed, n);
    p.finishedOn[n] = t;
    itemsOf(n).forEach(function (it) { if (!p.cards[it.key]) p.cards[it.key] = { reps: 0, ivl: 0, due: addDays(t, 1) }; });
    delete p.scroll[n]; p.aheadOk = 0;
    markActive(); save();
    go('home');
    toast('Lesson ' + n + ' finished. Μπράβο!');
  }

  /* ---------- lessons list ---------- */
  function renderCourse() {
    var p = P(), next = p.completed + 1;
    var h = '<div class="kicker">The course</div><h1>Lessons</h1><p class="lede">' + p.completed + ' finished. Open any finished lesson to reread it or redo its exercises.</p>';
    C.phases.forEach(function (ph) {
      h += '<section class="phase"><div class="kicker">Phase ' + ph.n + ' · ' + esc(ph.span) + '</div><h2>' + esc(ph.title) + '</h2><p class="muted" style="font-size:16px">' + esc(ph.goal) + '</p>';
      C.units.filter(function (u) { return u.phase === ph.n; }).forEach(function (u) {
        if (u.soon) { h += '<div class="unit soon"><h3>' + esc(u.title) + ' · ' + u.from + '–' + u.to + ' · coming soon</h3></div>'; return; }
        h += '<div class="unit"><h3>' + esc(u.title) + ' · ' + u.from + '–' + u.to + '</h3><ol class="lessons">';
        for (var n = u.from; n <= u.to; n++) {
          var L = LESSONS[n]; if (!L) continue;
          var st = n <= p.completed ? 'done' : n === next ? 'next' : 'locked';
          var inner = '<span class="num">' + (st === 'done' ? '✓ ' : '') + n + '</span><span class="lt">' + esc(L.title) + '</span>' + (st === 'next' ? '<span class="tag">Today</span>' : '');
          h += '<li class="' + st + '">' + (st === 'done' ? '<button type="button" data-lesson="' + n + '">' + inner + '</button>' : st === 'next' ? '<button type="button" data-view="home">' + inner + '</button>' : '<div>' + inner + '</div>') + '</li>';
        }
        h += '</ol></div>';
      });
      h += '</section>';
    });
    return h;
  }

  /* ---------- settings ---------- */
  var resetArmed = false, leaveArmed = false;
  function renderSettings() {
    var a = S.profiles.a, b = S.profiles.b, p = P();
    return '<div class="settings"><h1>Settings</h1>' +
      '<section><h2>You</h2>' +
        '<div class="setrow"><span>This phone is for</span><div class="seg" role="group" aria-label="This phone is for">' +
          '<button type="button" data-who="a" aria-pressed="' + (S.who === 'a') + '">' + esc(a.name) + '</button>' +
          '<button type="button" data-who="b" aria-pressed="' + (S.who === 'b') + '">' + esc(b.name) + '</button></div></div>' +
        '<div class="field"><label for="name-a">Name</label><input id="name-a" data-name="a" maxlength="24" value="' + esc(a.name) + '"></div>' +
        '<div class="field"><label for="name-b">Spouse\'s name</label><input id="name-b" data-name="b" maxlength="24" value="' + esc(b.name) + '"></div></section>' +
      '<section><h2>Reading</h2>' +
        '<div class="setrow"><span>Appearance</span><div class="seg" role="group" aria-label="Appearance">' +
          ['system', 'light', 'dark'].map(function (m) { return '<button type="button" data-theme-pick="' + m + '" aria-pressed="' + ((S.theme || 'system') === m) + '">' + (m === 'system' ? 'Phone' : m === 'light' ? 'Light' : 'Dark') + '</button>'; }).join('') + '</div></div>' +
        '<div class="setrow"><span>Greek letters for exercises</span><div class="seg" role="group" aria-label="Greek letters">' +
          '<button type="button" data-keys="1" aria-pressed="' + (S.keys !== false) + '">On-screen</button><button type="button" data-keys="0" aria-pressed="' + (S.keys === false) + '">Phone keyboard</button></div></div></section>' +
      coupleHTML() +
      '<section><h2>Home screen and sound</h2>' +
        '<p><b>iPhone:</b> in Safari, tap Share, then <i>Add to Home Screen</i>. <b>Android:</b> in Chrome, tap ⋮, then <i>Add to Home screen</i> or <i>Install app</i>. Always open Mazí from the icon: on iPhone the icon and Safari keep separate progress.</p>' +
        '<p><b>No sound?</b> iPhone: Settings › Accessibility › Spoken Content › Voices › Greek. Android: Settings › Text-to-speech › Speech Services by Google › Install voice data › Greek.</p>' +
        '<p><b>Typing Greek with your own keyboard:</b> iPhone: Settings › General › Keyboard › Keyboards › Add New Keyboard › Greek. Android (Gboard): Settings › Languages › Add keyboard › Greek.</p></section>' +
      '<section><h2>Progress</h2><p>' + esc(p.name) + ': ' + p.completed + ' lessons finished, ' + streak(p) + '-day streak.</p>' +
        '<button type="button" class="btn danger' + (resetArmed ? ' armed' : '') + '" data-reset="1">' + (resetArmed ? 'Tap again to erase ' + esc(p.name) + '\'s progress' : 'Start the course over') + '</button></section></div>';
  }
  function coupleHTML() {
    var h = '<section><h2>Together</h2>';
    if (!window.MaziSync && remote.status === 'unavailable') return h + '<p>Sync works in the Mazí app from your GitHub link.</p></section>';
    if (S.couple) {
      var setup = /^auth\/|permission-denied|unauthorized/.test(remote.error || '');
      var st = remote.status === 'on' ? 'Connected' : remote.status === 'error' ? (setup ? 'Firebase setup needs attention' : 'Offline, will retry') : 'Connecting…';
      return h + '<p><b>' + st + '.</b> Your couple code:</p><p><span class="code" id="couple-code">' + esc(S.couple) + '</span> <button type="button" class="linkbtn" data-copy="1">Copy</button></p>' +
        '<p class="small muted">Your spouse enters this code on their phone. Keep it between the two of you.</p>' +
        (remote.status === 'error' ? '<p><button type="button" class="btn" data-retry="1">Try again</button></p>' : '') +
        (remote.error ? '<p class="small muted">Details: ' + esc(remote.error) + '</p>' : '') +
        '<button type="button" class="btn danger' + (leaveArmed ? ' armed' : '') + '" data-leave="1">' + (leaveArmed ? 'Tap again to disconnect' : 'Disconnect this phone') + '</button></section>';
    }
    return h + '<p>See each other\'s progress and take each lesson together. One of you creates a code; the other enters it.</p>' +
      '<p><button type="button" class="btn solid" data-create="1">Create a couple code</button></p>' +
      '<form id="join-form"><div class="field"><label for="join-code">Or enter your spouse\'s code</label><input id="join-code" autocomplete="off" autocapitalize="characters" spellcheck="false" placeholder="XXXX-XXXX-XXXX-XXXX"></div>' +
      '<button type="submit" class="btn">Join</button></form></section>';
  }

  /* ---------- first run ---------- */
  function renderWelcome() {
    return '<div class="kicker" lang="el">Καλώς ήρθες · Welcome</div><h1>Who is reading on this phone?</h1>' +
      '<p class="lede">Mazí is a Greek course for the two of you: one chapter a day, read and practised together.</p>' +
      '<form id="welcome-form"><div class="field"><label for="w-me">Your name</label><input id="w-me" maxlength="24" required autocomplete="given-name"></div>' +
      '<div class="field"><label for="w-partner">Your spouse\'s name</label><input id="w-partner" maxlength="24" placeholder="Optional"></div>' +
      '<button type="submit" class="btn solid">Start</button></form>';
  }

  /* ---------- routing ---------- */
  var view = 'home';
  var VIEWS = { home: renderHome, course: renderCourse, lesson: renderLesson, settings: renderSettings, welcome: renderWelcome };
  function go(v, keepScroll) {
    saveScroll();
    if (!VIEWS[v]) v = 'home';
    if (!S.setup) v = 'welcome';
    view = v;
    if (v !== 'settings') { resetArmed = false; leaveArmed = false; }
    $page.innerHTML = mast() + VIEWS[v]();
    hideKeys();
    syncInputMode();
    if (!keepScroll) {
      var y = v === 'lesson' ? (P().scroll[lessonN] || 0) : 0;
      window.scrollTo(0, y);
    }
    var hash = v === 'lesson' ? 'lesson-' + lessonN : v;
    try { if (location.hash.slice(1) !== hash) history.replaceState(null, '', '#' + hash); } catch (e) { /* ignore */ }
  }
  function refresh() { go(view, true); }
  function openLesson(n) {
    if (!LESSONS[n]) return;
    lessonN = n;
    var p = P();
    if (n > p.completed && !p.opened[n]) { p.opened[n] = today(); save(); }
    go('lesson');
  }
  var scrollT;
  function saveScroll() {
    if (view !== 'lesson' || !S.setup) return;
    var p = P();
    if (lessonN > p.completed) { p.scroll[lessonN] = Math.round(window.scrollY); try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* ignore */ } }
  }
  window.addEventListener('scroll', function () { clearTimeout(scrollT); scrollT = setTimeout(saveScroll, 400); }, { passive: true });

  /* ---------- on-screen Greek letters ---------- */
  var keys = document.getElementById('keys'), activeInput = null;
  var ROWS = [['ς', 'ε', 'ρ', 'τ', 'υ', 'θ', 'ι', 'ο', 'π'], ['α', 'σ', 'δ', 'φ', 'γ', 'η', 'ξ', 'κ', 'λ'], ['ζ', 'χ', 'ψ', 'ω', 'β', 'ν', 'μ']];
  keys.innerHTML = ROWS.map(function (r) { return '<div class="kr">' + r.map(function (c) { return '<button type="button" data-key="' + c + '">' + c + '</button>'; }).join('') + '</div>'; }).join('') +
    '<div class="kr"><button type="button" class="w" data-key="ACC">΄ accent</button><button type="button" class="w" data-key=" ">space</button><button type="button" class="w" data-key=";">;</button><button type="button" class="w" data-key="BK" aria-label="Delete">⌫</button><button type="button" class="w" data-key="DONE">Done</button></div>';
  function useKeys() { var t = document.getElementById('use-keys'); return t ? t.checked : S.keys !== false; }
  function syncInputMode() { document.querySelectorAll('[data-greek]').forEach(function (i) { i.setAttribute('inputmode', useKeys() ? 'none' : 'text'); }); }
  function hideKeys() { keys.hidden = true; activeInput = null; }
  document.addEventListener('focusin', function (e) {
    if (e.target.dataset && e.target.dataset.greek && useKeys()) { activeInput = e.target; keys.hidden = false; }
    else if (!keys.contains(e.target)) hideKeys();
  });
  keys.addEventListener('mousedown', function (e) { e.preventDefault(); });
  keys.addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b || !activeInput) return;
    var k = b.dataset.key, el = activeInput, v = el.value;
    var s = el.selectionStart == null ? v.length : el.selectionStart, en = el.selectionEnd == null ? v.length : el.selectionEnd;
    if (k === 'DONE') { el.blur(); hideKeys(); return; }
    if (k === 'BK') { if (s === en && s > 0) s--; el.value = v.slice(0, s) + v.slice(en); el.setSelectionRange(s, s); return; }
    if (k === 'ACC') {
      var prev = v.charAt(s - 1);
      if ('αεηιουω'.indexOf(prev) === -1) { toast('Tap the accent right after its vowel.'); return; }
      el.value = v.slice(0, s - 1) + (prev + '́').normalize('NFC') + v.slice(en); el.setSelectionRange(s, s); return;
    }
    el.value = v.slice(0, s) + k + v.slice(en); el.setSelectionRange(s + 1, s + 1);
  });

  /* ---------- events ---------- */
  var timerT = null, secs = 120;
  document.addEventListener('click', function (e) {
    var t = e.target.closest('button');
    if (!t || t.disabled || keys.contains(t)) return;
    var d = t.dataset;
    if (d.say) { say(d.say); return; }
    if (d.view) { go(d.view); return; }
    if (d.open) { if (d.ahead) { P().aheadOk = Number(d.open); save(); } openLesson(Number(d.open)); return; }
    if (d.lesson) { openLesson(Number(d.lesson)); return; }

    if (d.revealReview) { $page.querySelectorAll('.rev').forEach(function (r) { r.hidden = false; }); t.hidden = true; return; }
    if (d.choose) {
      t.parentNode.querySelectorAll('.choice').forEach(function (c) { c.setAttribute('aria-pressed', String(c === t)); });
      var blank = $page.querySelector('[data-blank="' + d.choose + '"]'); if (blank) blank.textContent = d.val;
      return;
    }
    if (d.checkSet) {
      var set = book.sets.find(function (s) { return s.id === d.checkSet; });
      var r = B.check(set, $page);
      var sc = $page.querySelector('[data-score="' + set.id + '"]'); if (sc) sc.textContent = r.of ? r.right + ' of ' + r.of + ' right' : 'Compare with the examples.';
      return;
    }
    if (d.timer) {
      var tel = document.getElementById('timer');
      if (timerT) { clearInterval(timerT); timerT = null; t.textContent = 'Resume'; return; }
      if (secs <= 0) secs = 120;
      t.textContent = 'Pause';
      timerT = setInterval(function () {
        secs--; if (tel && document.body.contains(tel)) tel.textContent = Math.floor(secs / 60) + ':' + ('0' + secs % 60).slice(-2);
        if (secs <= 0) { clearInterval(timerT); timerT = null; t.textContent = 'Again'; toast('Two minutes. Μπράβο!'); }
      }, 1000);
      return;
    }
    if (d.finish) { finishLesson(); return; }

    if (d.themePick) { S.theme = d.themePick; save(); applyTheme(); refresh(); return; }
    if (d.keys) { S.keys = d.keys === '1'; save(); refresh(); return; }
    if (d.who) { S.who = d.who; save(); refresh(); return; }
    if (d.create) {
      if (!window.MaziSync) { toast('Sync is not available here. Open Mazí from your GitHub link.'); return; }
      connectCouple(newCode()); return;
    }
    if (d.copy) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(S.couple).then(function () { toast('Code copied. Send it to your spouse.'); }, selectCode);
      } else selectCode();
      return;
    }
    if (d.retry) { if (window.MaziSync && S.couple) { window.MaziSync.connect(S.couple); toast('Trying again…'); } return; }
    if (d.leave) {
      if (!leaveArmed) { leaveArmed = true; refresh(); return; }
      leaveArmed = false;
      var old = S.couple; S.couple = null; save();
      if (window.MaziSync) window.MaziSync.disconnect(old);
      remote.status = 'off'; remote.members = []; remote.error = '';
      toast('This phone is disconnected.'); refresh(); return;
    }
    if (d.reset) {
      if (!resetArmed) { resetArmed = true; refresh(); return; }
      resetArmed = false;
      var name = P().name;
      S.profiles[S.who] = freshProfile(name); save();
      toast(name + '\'s course starts again from lesson 1.'); refresh(); return;
    }
  });
  function selectCode() {
    var el = document.getElementById('couple-code');
    if (!el) return;
    var r = document.createRange(); r.selectNodeContents(el);
    var sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r);
    toast('Code selected. Copy it and send it to your spouse.');
  }
  document.addEventListener('change', function (e) {
    if (e.target.id === 'use-keys') { S.keys = e.target.checked; save(); syncInputMode(); if (!S.keys) hideKeys(); }
  });
  document.addEventListener('submit', function (e) {
    e.preventDefault();
    if (e.target.id === 'welcome-form') {
      var me = document.getElementById('w-me').value.trim();
      var sp = document.getElementById('w-partner').value.trim();
      if (!me) return;
      S.profiles.a.name = me;
      if (sp) S.profiles.b.name = sp;
      S.who = 'a'; S.setup = true; save();
      go('home');
    } else if (e.target.id === 'join-form') {
      var code = cleanCode(document.getElementById('join-code').value);
      if (!code) { toast('That code doesn\'t look right. It has 16 letters and numbers.'); return; }
      if (!window.MaziSync) { toast('Sync is not available here. Open Mazí from your GitHub link.'); return; }
      connectCouple(code); toast('Connected. You\'ll see each other on the Today page.');
    }
  });
  document.addEventListener('input', function (e) {
    var d = e.target.dataset;
    if (d && d.name) { S.profiles[d.name].name = e.target.value.trim() || (d.name === 'a' ? 'Husband' : 'Wife'); save(); }
  });
  window.addEventListener('hashchange', function () {
    var h = location.hash.slice(1), m = h.match(/^lesson-(\d+)$/);
    if (m && +m[1] !== lessonN) openLesson(+m[1]);
    else if (VIEWS[h] && h !== view && h !== 'lesson') go(h);
  });

  var h0 = location.hash.slice(1), m0 = h0.match(/^lesson-(\d+)$/);
  if (m0 && LESSONS[+m0[1]] && +m0[1] <= P().completed + 1) openLesson(+m0[1]);
  else go(h0 === 'course' || h0 === 'settings' ? h0 : 'home');
  setTimeout(function () { if (!window.MaziSync) window.MaziApp.setRemote({ status: 'unavailable' }); }, 8000);
})();
