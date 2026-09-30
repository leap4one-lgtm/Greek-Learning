(function () {
  'use strict';

  var C = window.MAZI_COURSE;
  var G = window.GreekSay;
  var KEY = 'mazi-greek-v1';
  var DAY_MS = 86400000;
  var REVIEW_MAX = 20;
  var BLOCKS = [
    { id: 'review', label: 'Review', min: 5 },
    { id: 'new', label: 'New', min: 10 },
    { id: 'practice', label: 'Practice', min: 10 },
    { id: 'together', label: 'Together', min: 5 }
  ];

  var LESSONS = {};
  C.lessons.forEach(function (l) { LESSONS[l.n] = l; });
  var LAST = C.lessons.length ? C.lessons[C.lessons.length - 1].n : 0;

  /* ---------- dates ---------- */
  function pad(n) { return String(n).padStart(2, '0'); }
  function dayStr(d) { d = d || new Date(); return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function parseDay(s) { var p = s.split('-').map(Number); return new Date(p[0], p[1] - 1, p[2]); }
  function addDays(s, n) { var d = parseDay(s); d.setDate(d.getDate() + n); return dayStr(d); }
  function today() { return dayStr(); }

  /* ---------- state ---------- */
  function freshProfile(name) {
    return { name: name, completed: 0, finishedOn: {}, cards: {}, active: [], session: null, blocks: { date: '', n: 0 }, aheadOk: 0 };
  }
  function freshState() {
    return { v: 2, who: 'a', theme: 'system', setup: false, couple: null, profiles: { a: freshProfile('Husband'), b: freshProfile('Wife') } };
  }
  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) {
        var s = JSON.parse(raw);
        if (s && s.v === 2 && s.profiles) return s;
        if (s && s.v === 1 && s.profiles) {
          // Earlier version: keep names, theme, sync code and whose phone it is. Progress starts fresh with the course.
          var f = freshState();
          f.who = s.who || 'a'; f.theme = s.theme || 'system'; f.setup = !!s.setup; f.couple = s.couple || null;
          f.profiles.a.name = s.profiles.a.name; f.profiles.b.name = s.profiles.b.name;
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
  function blocksToday(p) { return p.blocks && p.blocks.date === today() ? p.blocks.n : 0; }
  function setBlocks(n) {
    var p = P();
    if (!p.blocks || p.blocks.date !== today()) p.blocks = { date: today(), n: 0 };
    p.blocks.n = Math.max(p.blocks.n, n);
  }

  /* ---------- appearance ---------- */
  function applyTheme() {
    var t = S.theme === 'light' || S.theme === 'dark' ? S.theme : null;
    if (t) document.documentElement.setAttribute('data-theme', t);
    else document.documentElement.removeAttribute('data-theme');
    var dark = t ? t === 'dark' : !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', dark ? '#170D1F' : '#F6F2F8');
  }
  applyTheme();
  try { window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme); } catch (e) { /* old browsers */ }

  /* ---------- helpers ---------- */
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function initial(name) { return esc((name || '?').trim().charAt(0).toUpperCase() || '?'); }
  var $view = document.getElementById('view');
  var toastTimer;
  function toast(msg) {
    var t = document.getElementById('toast');
    t.textContent = msg; t.hidden = false;
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { t.hidden = true; }, 2600);
  }

  /* ---------- items ---------- */
  function itemsOf(n) {
    var l = LESSONS[n];
    return l ? l.items.map(function (it, i) { return Object.assign({ key: n + ':' + i, lesson: n }, it); }) : [];
  }
  function itemByKey(key) {
    var parts = key.split(':'), l = LESSONS[+parts[0]];
    return l && l.items[+parts[1]] ? Object.assign({ key: key, lesson: +parts[0] }, l.items[+parts[1]]) : null;
  }
  function isLetter(it) { return it.k === 'letter'; }
  function pron(it) {
    if (isLetter(it)) return { tr: it.say, te: it.te };
    return { tr: G.latin(it.el), te: G.telugu(it.el) };
  }
  function shown(it) { return isLetter(it) ? it.up + ' ' + it.el : it.el; }
  function learnedItems() {
    var out = [];
    for (var n = 1; n <= P().completed; n++) out = out.concat(itemsOf(n));
    return out;
  }

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
    var clean = String(text).replace(/\s*\/\s*/g, ', ').replace(/_{2,}/g, '').replace(/…/g, '');
    var u = new SpeechSynthesisUtterance(clean);
    u.lang = 'el-GR'; u.rate = 0.8;
    if (greekVoice) u.voice = greekVoice;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
    if (!greekVoice && !warnedVoice) { warnedVoice = true; toast('No Greek voice found. See settings for how to add one.'); }
  }
  var SPEAK_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
  function speakBtn(text, label, big) {
    return '<button type="button" class="speak' + (big ? ' big' : '') + '" data-say="' + esc(text) + '" aria-label="Listen: ' + esc(label || text) + '">' + SPEAK_ICON + '</button>';
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
  // Stored fields: "day" holds the number of lessons finished; "done"/"total" are today's session blocks.
  function summary() {
    var p = P();
    return { name: p.name, streak: streak(p), day: p.completed, date: today(), done: blocksToday(p), total: BLOCKS.length, started: Object.keys(p.cards).length };
  }
  function partner() {
    if (!S.couple) return null;
    var others = remote.members.filter(function (m) { return m.uid !== remote.uid; })
      .sort(function (a, b) { return (b.updated || 0) - (a.updated || 0); });
    return others[0] || null;
  }
  function partnerName() {
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
      if (current === 'home' || (current === 'settings' && statusChanged)) refresh();
    }
  };

  /* ---------- together rings ---------- */
  function ring(pct, label, cls) {
    var c = 2 * Math.PI * 17, off = c * (1 - Math.max(0, Math.min(1, pct)));
    return '<span class="ring ' + (cls || '') + '"><svg viewBox="0 0 42 42" aria-hidden="true"><circle class="track" cx="21" cy="21" r="17"/>' +
      '<circle class="fill" cx="21" cy="21" r="17" stroke-dasharray="' + c.toFixed(1) + '" stroke-dashoffset="' + off.toFixed(1) + '"/></svg><b>' + label + '</b></span>';
  }
  function renderHeader() {
    var el = document.getElementById('who');
    el.innerHTML = S.setup ? '<button type="button" class="avatar" data-go="settings" aria-label="Settings" title="Settings">' + initial(P().name) + '</button>' : '';
  }
  function togetherHTML() {
    var p = P(), t = today();
    var me = '<div class="person">' + ring(blocksToday(p) / BLOCKS.length, initial(p.name)) +
      '<div><b>' + streak(p) + '</b><span>' + esc(p.name) + '\'s streak</span></div></div>';
    if (!S.couple) {
      return '<section class="together">' + me + '<button type="button" class="linkish" data-go="settings">Connect with your spouse ›</button></section>';
    }
    var m = partner(), other;
    if (m) {
      var fresh = m.date === t || m.date === addDays(t, -1);
      var done = m.date === t ? (m.done || 0) : 0;
      other = '<div class="person">' + ring(done / (m.total || BLOCKS.length), initial(m.name), 'partner') +
        '<div><b>' + (fresh ? m.streak : 0) + '</b><span>' + esc(m.name) + '\'s streak</span></div></div>';
    } else {
      other = '<p class="small muted">' + (remote.status === 'on' ? 'Waiting for your spouse to connect.' : remote.status === 'error' ? 'Can\'t reach shared progress right now.' : 'Connecting…') + '</p>';
    }
    return '<section class="together" aria-label="Today\'s progress and streaks">' + me + other + '</section>';
  }

  /* ---------- home ---------- */
  function lessonLabel(n) {
    var u = C.units.find(function (x) { return n >= x.from && n <= x.to; });
    return 'Lesson ' + n + (u ? ' · ' + u.title : '');
  }
  function waitingFor(next) {
    var m = partner();
    if (!m) return false;
    return (m.day || 0) < next - 1 && P().aheadOk !== next;
  }
  function lessonCard(L, cta) {
    return '<section class="hero">' +
      '<div class="eyebrow">' + esc(lessonLabel(L.n)) + '</div>' +
      '<h1>' + esc(L.title) + '</h1>' +
      '<p class="muted">' + esc(L.goal) + '</p>' +
      '<button type="button" class="start" data-start="1"><span><b>' + esc(cta) + '</b><small>' +
        BLOCKS.map(function (b) { return b.label; }).join(' · ') + '</small></span><i aria-hidden="true">›</i></button>' +
    '</section>';
  }
  function renderHome() {
    var p = P(), next = p.completed + 1, L = LESSONS[next];
    var finishedToday = p.completed > 0 && p.finishedOn[p.completed] === today();
    var due = dueCards().length;
    var body;

    if (p.session && p.session.n === next && L) {
      body = lessonCard(L, 'Continue · ' + BLOCKS[p.session.block].label);
    } else if (!L) {
      body = '<section class="hero"><div class="eyebrow">All caught up</div><h1>You\'ve finished every lesson written so far.</h1>' +
        '<p class="muted">New lessons are on the way. Meanwhile, keep your cards fresh.</p>' +
        (due ? '<button type="button" class="btn primary wide" data-extra="1">Review ' + due + ' cards</button>' : '') + '</section>';
    } else if (finishedToday) {
      body = '<section class="hero done"><div class="eyebrow">Lesson ' + p.completed + ' done</div><h1 lang="el">Μπράβο!</h1>' +
        '<p class="muted">That\'s today\'s 30 minutes. Tomorrow: lesson ' + next + ', ' + esc(L.title) + '.</p>' +
        (due ? '<button type="button" class="btn wide" data-extra="1">Extra review · ' + due + ' cards</button>' : '') +
        '<button type="button" class="linkish" data-start="1">Start lesson ' + next + ' anyway ›</button></section>';
    } else if (waitingFor(next)) {
      var m = partner();
      body = '<section class="hero"><div class="eyebrow">' + esc(lessonLabel(next)) + '</div><h1>Waiting for ' + esc(m.name) + '</h1>' +
        '<p class="muted">You take each lesson together. ' + esc(m.name) + ' still has lesson ' + ((m.day || 0) + 1) + ' to finish. Then lesson ' + next + ' opens for you both.</p>' +
        (due ? '<button type="button" class="btn primary wide" data-extra="1">Review ' + due + ' cards meanwhile</button>' : '') +
        '<button type="button" class="linkish" data-ahead="' + next + '">Go ahead anyway ›</button></section>';
    } else {
      body = lessonCard(L, 'Start today\'s 30 minutes');
    }

    $view.innerHTML = togetherHTML() + body +
      (p.completed ? '<button type="button" class="linkish center" data-tab="course">Look back at finished lessons ›</button>' : '');
  }

  /* ---------- review cards (spaced repetition) ---------- */
  function dueCards() {
    var p = P(), t = today();
    return Object.keys(p.cards).filter(function (k) { return p.cards[k].due <= t && itemByKey(k); })
      .sort(function (a, b) { return p.cards[a].due < p.cards[b].due ? -1 : 1; });
  }
  function gradeCard(key, good) {
    var p = P(), t = today(), c = p.cards[key];
    if (!c) return;
    if (!good) { c.reps = 0; c.ivl = 0; c.due = t; return; }
    c.ivl = c.reps === 0 ? 1 : c.reps === 1 ? 3 : Math.round(Math.max(c.ivl, 1) * 2.3);
    c.reps++;
    c.due = addDays(t, c.ivl);
  }

  /* ---------- practice questions ---------- */
  function optionsFrom(pool, correct, field, count) {
    var seen = {}, out = [correct];
    seen[correct[field]] = 1;
    shuffle(pool).forEach(function (it) {
      if (out.length >= count) return;
      if (!seen[it[field]]) { seen[it[field]] = 1; out.push(it); }
    });
    return shuffle(out);
  }
  function buildPractice(n) {
    var cur = itemsOf(n), old = learnedItems().filter(function (x) { return x.lesson !== n; });
    var pool = cur.concat(old);
    var letters = pool.filter(isLetter), words = pool.filter(function (x) { return !isLetter(x); });
    var qs = [], flip = false;
    shuffle(cur).forEach(function (it) {
      if (isLetter(it)) {
        var o = optionsFrom(letters, it, 'say', 4);
        if (o.length > 1) qs.push({ type: 'sound', item: it, opts: o });
        return;
      }
      var opts = optionsFrom(words, it, flip ? 'el' : 'en', 4);
      if (opts.length > 1) qs.push({ type: flip ? 'greek' : 'mean', item: it, opts: opts });
      flip = !flip;
    });
    // Sentence building from this lesson's longer phrases and its dialogue.
    var L = LESSONS[n];
    function buildable(el) { var w = el.split(/\s+/).length; return el.indexOf('/') === -1 && el.indexOf('___') === -1 && w >= 3 && w <= 7; }
    var sentences = cur.filter(function (x) { return !isLetter(x) && buildable(x.el); }).map(function (x) { return { el: x.el, en: x.en }; })
      .concat(L.dialogue.lines.filter(function (l) { return buildable(l[1]); }).map(function (l) { return { el: l[1], en: l[2] }; }));
    shuffle(sentences).slice(0, 2).forEach(function (s) { qs.push({ type: 'build', sentence: s, words: s.el.split(/\s+/) }); });
    // A few items from earlier lessons.
    shuffle(old.filter(function (x) { return !isLetter(x); })).slice(0, 3).forEach(function (it) {
      var o = optionsFrom(words, it, 'en', 4);
      if (o.length > 1) qs.push({ type: 'mean', item: it, opts: o, old: true });
    });
    return qs.slice(0, 14);
  }

  /* ---------- session ---------- */
  // Runtime state for the open session: queues and positions inside a block. The block itself is saved.
  var run = null;
  function startSession(extra) {
    var p = P();
    if (extra) { run = { extra: true, rq: dueCards().slice(0, REVIEW_MAX), shown: false, reviewed: 0 }; go('session'); return; }
    var next = p.completed + 1;
    if (!LESSONS[next]) return;
    if (!p.session || p.session.n !== next) p.session = { n: next, block: 0 };
    run = { n: next };
    enterBlock(p.session.block);
    save();
    go('session');
  }
  function enterBlock(b) {
    var p = P();
    p.session.block = b;
    run.block = b;
    if (b === 0) {
      run.rq = dueCards().slice(0, REVIEW_MAX); run.shown = false; run.reviewed = 0;
      if (!run.rq.length) { setBlocks(1); enterBlock(1); }
    } else if (b === 1) {
      run.items = itemsOf(run.n); run.step = 0;
    } else if (b === 2) {
      run.qs = buildPractice(run.n); run.qi = 0; run.answer = null; run.built = []; run.right = 0;
    } else if (b === 3) {
      run.swap = false;
    }
  }
  function nextBlock() {
    setBlocks(run.block + 1);
    if (run.block < 3) enterBlock(run.block + 1);
    save(); refresh(); window.scrollTo(0, 0);
  }
  function finishLesson() {
    var p = P(), n = run.n, t = today();
    p.completed = Math.max(p.completed, n);
    p.finishedOn[n] = t;
    itemsOf(n).forEach(function (it) { if (!p.cards[it.key]) p.cards[it.key] = { reps: 0, ivl: 0, due: addDays(t, 1) }; });
    p.session = null; p.aheadOk = 0;
    setBlocks(BLOCKS.length);
    markActive();
    save();
    run = { finished: n };
    refresh(); window.scrollTo(0, 0);
  }

  function stepper() {
    return '<ol class="stepper">' + BLOCKS.map(function (b, i) {
      var st = i < run.block ? 'done' : i === run.block ? 'now' : '';
      return '<li class="' + st + '"><span></span>' + b.label + '</li>';
    }).join('') + '</ol>';
  }
  function sessionTop(title) {
    return '<div class="sessbar"><button type="button" class="close" data-close="1" aria-label="Close. Your place is saved.">✕</button>' +
      '<span class="sesstitle">' + esc(title) + '</span></div>';
  }

  function renderSession() {
    if (!run) { go('home'); return; }
    if (run.finished) { renderFinished(); return; }
    if (run.extra) { renderExtra(); return; }
    var L = LESSONS[run.n];
    var head = sessionTop('Lesson ' + L.n + ' · ' + L.title) + stepper();
    var b = run.block, html;
    if (b === 0) html = reviewHTML('Review', 'Say the answer aloud before you tap.');
    else if (b === 1) html = newHTML(L);
    else if (b === 2) html = practiceHTML();
    else html = togetherBlockHTML(L);
    $view.innerHTML = head + html;
  }

  function answerHTML(it) {
    var pr = pron(it);
    return '<div class="answer"><div class="tel">' + esc(pr.te) + '</div><div class="tr">' + esc(pr.tr) + '</div>' +
      '<div class="en">' + esc(it.en) + '</div>' + (it.tm ? '<div class="te muted">' + esc(it.tm) + '</div>' : '') + '</div>';
  }
  function reviewHTML(title, hint) {
    var it = itemByKey(run.rq[0]);
    return '<section class="stage">' +
      '<div class="count">' + title + ' · ' + (run.reviewed + 1) + ' of ' + (run.reviewed + run.rq.length) + '</div>' +
      '<div class="face"><div class="gr xl" lang="el">' + esc(shown(it)) + '</div>' + speakBtn(it.el, it.en, true) + (run.shown ? answerHTML(it) : '') + '</div>' +
      (run.shown
        ? '<div class="two"><button type="button" class="btn again" data-card="0">Again</button><button type="button" class="btn primary" data-card="1">Got it</button></div>'
        : '<button type="button" class="btn primary wide" data-show="1">Show answer</button>') +
      '<p class="hint">' + esc(hint) + '</p></section>';
  }

  function newHTML(L) {
    var items = run.items;
    if (run.step < items.length) {
      var it = items[run.step];
      return '<section class="stage">' +
        '<div class="count">New · ' + (run.step + 1) + ' of ' + items.length + '</div>' +
        '<div class="face"><div class="gr xl" lang="el">' + esc(shown(it)) + '</div>' + speakBtn(it.el, it.en, true) + answerHTML(it) +
          (it.note ? '<p class="note">' + esc(it.note) + '</p>' : '') + '</div>' +
        '<div class="two">' + (run.step > 0 ? '<button type="button" class="btn" data-newstep="-1">Back</button>' : '<span></span>') +
        '<button type="button" class="btn primary" data-newstep="1">Next</button></div>' +
        '<p class="hint">Listen, then both say it aloud twice.</p></section>';
    }
    return '<section class="stage">' + grammarHTML(L.grammar) +
      '<div class="two"><button type="button" class="btn" data-newstep="-1">Back</button><button type="button" class="btn primary" data-nextblock="1">Start practice</button></div></section>';
  }
  function grammarHTML(g) {
    return '<article class="grammar"><div class="eyebrow">Grammar</div><h2>' + esc(g.title) + '</h2>' +
      g.body.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('') +
      (g.ex && g.ex.length ? '<ul class="examples">' + g.ex.map(function (e) {
        return '<li><div><span class="gr" lang="el">' + esc(e.el) + '</span><span class="tel">' + esc(G.telugu(e.el)) + '</span><span class="muted small">' + esc(e.en) + '</span></div>' + speakBtn(e.el, e.en) + '</li>';
      }).join('') + '</ul>' : '') +
      (g.te ? '<p class="compare"><b>Telugu tip</b>' + esc(g.te) + '</p>' : '') +
      '</article>';
  }

  function practiceHTML() {
    var q = run.qs[run.qi];
    if (!q) {
      return '<section class="stage"><div class="face"><div class="gr xl" lang="el">Μπράβο!</div>' +
        '<p>' + run.right + ' right on the first try.</p></div>' +
        '<button type="button" class="btn primary wide" data-nextblock="1">Go to Together</button></section>';
    }
    var head = '<div class="count">Practice · ' + (run.qi + 1) + ' of ' + run.qs.length + (q.old ? ' · from an earlier lesson' : '') + '</div>';
    var body;
    if (q.type === 'build') {
      if (!q.order) q.order = shuffle(q.words.map(function (w, i) { return i; }));
      var used = run.built;
      body = '<p class="ask">Build this sentence in Greek</p><p class="prompt">' + esc(q.sentence.en) + '</p>' +
        '<div class="built" aria-live="polite">' + (used.length ? used.map(function (i) { return '<span class="tile placed" lang="el">' + esc(q.words[i]) + '</span>'; }).join('') : '<span class="muted small">Tap the words in order</span>') + '</div>' +
        '<div class="tiles">' + q.order.map(function (i) {
          var on = used.indexOf(i) !== -1;
          return '<button type="button" class="tile" lang="el" data-tile="' + i + '"' + (on || run.answer ? ' disabled' : '') + '>' + esc(q.words[i]) + '</button>';
        }).join('') + '</div>' +
        (run.answer ? '' : '<div class="two"><button type="button" class="btn" data-clear="1">Clear</button><button type="button" class="btn primary" data-check="1"' + (used.length === q.words.length ? '' : ' disabled') + '>Check</button></div>');
    } else {
      var it = q.item, field = q.type === 'greek' ? 'el' : q.type === 'sound' ? 'say' : 'en';
      var ask = q.type === 'sound' ? 'What sound does this make?' : q.type === 'greek' ? 'Which is the Greek for' : 'What does this mean?';
      var prompt = q.type === 'greek' ? '<p class="prompt">' + esc(it.en) + '</p>'
        : '<div class="promptgr"><span class="gr xl" lang="el">' + esc(shown(it)) + '</span>' + speakBtn(it.el, it.en) + '</div>';
      body = '<p class="ask">' + ask + '</p>' + prompt + '<div class="options">' + q.opts.map(function (o) {
        var cls = '';
        if (run.answer) { if (o[field] === it[field]) cls = ' right'; else if (o[field] === run.answer) cls = ' wrong'; }
        return '<button type="button" class="opt' + cls + '"' + (field === 'el' ? ' lang="el"' : '') + ' data-opt="' + esc(o[field]) + '"' + (run.answer ? ' disabled' : '') + '>' + esc(o[field]) + '</button>';
      }).join('') + '</div>';
    }
    var fb = '';
    if (run.answer) {
      var ok = run.correct;
      var el = q.type === 'build' ? q.sentence.el : q.item.el;
      var tel = q.type === 'build' ? G.telugu(el) : pron(q.item).te;
      fb = '<div class="feedback ' + (ok ? 'ok' : 'no') + '"><b>' + (ok ? 'Σωστά! Correct.' : 'Not quite.') + '</b>' +
        '<div><span class="gr" lang="el">' + esc(q.type === 'build' ? el : shown(q.item)) + '</span> <span class="tel">' + esc(tel) + '</span></div>' +
        '<div class="muted small">' + esc(q.type === 'build' ? q.sentence.en : q.item.en) + (ok ? '' : ' · You\'ll see this one again.') + '</div>' +
        '<button type="button" class="btn primary wide" data-nextq="1">Continue</button></div>';
    }
    return '<section class="stage">' + head + body + fb + '</section>';
  }
  function answerPractice(value) {
    var q = run.qs[run.qi], correct;
    if (q.type === 'build') correct = run.built.map(function (i) { return q.words[i]; }).join(' ') === q.words.join(' ');
    else correct = value === q.item[q.type === 'greek' ? 'el' : q.type === 'sound' ? 'say' : 'en'];
    run.answer = value || 'built'; run.correct = correct;
    if (correct && !q.again) run.right++;
    if (!correct && !q.again) run.qs.push(Object.assign({}, q, { again: true, order: null }));
    say(q.type === 'build' ? q.sentence.el : q.item.el);
  }

  function dialogueLines(lines, names, me) {
    return lines.map(function (ln) {
      var who = names ? names[ln[0]] : ln[0];
      var cls = names ? (who === me ? 'mine' : 'theirs') : '';
      return '<li class="' + cls + '"><span class="who">' + esc(who) + '</span>' +
        '<div class="line"><span class="gr" lang="el">' + esc(ln[1].replace(/___/g, '(your name)')) + '</span>' +
        '<span class="tel">' + esc(G.telugu(ln[1].replace(/___/g, '…'))) + '</span>' +
        '<span class="muted small">' + esc(ln[2]) + '</span></div>' + speakBtn(ln[1], ln[2]) + '</li>';
    }).join('');
  }
  function togetherBlockHTML(L) {
    var me = P().name, other = partnerName();
    var names = run.swap ? { A: other, B: me } : { A: me, B: other };
    return '<section class="stage">' +
      '<div class="eyebrow">Together · ' + esc(L.dialogue.title) + '</div>' +
      '<p class="muted small">Sit together and read it aloud. Then swap roles and read it again.</p>' +
      '<ol class="dialogue">' + dialogueLines(L.dialogue.lines, names, me) + '</ol>' +
      '<button type="button" class="btn wide" data-swap="1">Swap roles</button>' +
      (L.dialogue.tip ? '<p class="note">' + esc(L.dialogue.tip) + '</p>' : '') +
      '<button type="button" class="btn primary wide" data-finish="1">We said it together ✓</button></section>';
  }

  function renderFinished() {
    var n = run.finished, L = LESSONS[n], p = P(), m = partner();
    var partnerLine = '';
    if (S.couple && m) {
      partnerLine = (m.day || 0) >= n ? '<p>' + esc(m.name) + ' has finished this lesson too.</p>'
        : '<p class="muted">' + esc(m.name) + ' hasn\'t finished lesson ' + n + ' yet.</p>';
    }
    $view.innerHTML = '<section class="stage finish">' +
      '<div class="eyebrow">Lesson ' + n + ' complete</div>' +
      '<div class="gr xl" lang="el">Μπράβο!</div>' +
      '<p><b>' + esc(L.title) + '</b> · ' + L.items.length + ' new cards for your reviews.</p>' +
      '<div class="bigstat"><b>' + streak(p) + '</b><span>day streak</span></div>' + partnerLine +
      '<button type="button" class="btn primary wide" data-home="1">Done for today</button>' +
      '<button type="button" class="linkish center" data-note="' + n + '">Look over this lesson again ›</button></section>';
  }

  function renderExtra() {
    if (!run.rq.length) {
      markActive(); save();
      $view.innerHTML = sessionTop('Extra review') + '<section class="stage finish"><div class="gr xl" lang="el">Μπράβο!</div>' +
        '<p>' + run.reviewed + ' cards reviewed.</p><button type="button" class="btn primary wide" data-home="1">Back home</button></section>';
      return;
    }
    $view.innerHTML = sessionTop('Extra review') + reviewHTML('Review', 'Cards come back just before you would forget them.');
  }

  /* ---------- lessons list and notebooks ---------- */
  function renderCourse() {
    var p = P(), next = p.completed + 1;
    var html = '<div class="pagehead"><h1>Lessons</h1><p class="muted">' + p.completed + ' finished · Tap a finished lesson to look over it again.</p></div>';
    C.phases.forEach(function (ph) {
      var units = C.units.filter(function (u) { return u.phase === ph.n; });
      html += '<section class="phase"><div class="eyebrow">Phase ' + ph.n + ' · ' + esc(ph.span) + '</div><h2>' + esc(ph.title) + '</h2><p class="muted small">' + esc(ph.goal) + '</p>';
      units.forEach(function (u) {
        if (u.soon) { html += '<div class="unit soon"><h3>' + esc(u.title) + ' <span class="muted small">' + u.from + '–' + u.to + ' · coming soon</span></h3></div>'; return; }
        html += '<div class="unit"><h3>' + esc(u.title) + ' <span class="muted small">' + u.from + '–' + u.to + '</span></h3>';
        html += '<ol class="lessons">';
        for (var n = u.from; n <= u.to; n++) {
          var L = LESSONS[n]; if (!L) continue;
          var state = n <= p.completed ? 'done' : n === next ? 'next' : 'locked';
          var inner = '<span class="num">' + (state === 'done' ? '✓' : n) + '</span><span class="lt">' + esc(L.title) + '</span>' +
            (state === 'next' ? '<span class="badge">Next</span>' : state === 'done' ? '<span class="chev">›</span>' : '');
          html += '<li class="' + state + '">' + (state === 'done'
            ? '<button type="button" data-note="' + n + '">' + inner + '</button>'
            : state === 'next' ? '<button type="button" data-tab="home">' + inner + '</button>'
            : '<div>' + inner + '</div>') + '</li>';
        }
        html += '</ol></div>';
      });
      html += '</section>';
    });
    $view.innerHTML = html;
  }

  var noteN = 1;
  function renderNotebook() {
    var L = LESSONS[noteN];
    if (!L || noteN > P().completed) { go('course'); return; }
    var items = itemsOf(noteN).map(function (it) {
      var pr = pron(it);
      return '<li><div class="it"><span class="gr" lang="el">' + esc(shown(it)) + '</span>' +
        '<span class="pron"><span class="tel">' + esc(pr.te) + '</span> <span class="tr">' + esc(pr.tr) + '</span></span>' +
        '<span>' + esc(it.en) + (it.tm ? ' · <span class="te muted">' + esc(it.tm) + '</span>' : '') + '</span>' +
        (it.note ? '<span class="note">' + esc(it.note) + '</span>' : '') + '</div>' + speakBtn(it.el, it.en) + '</li>';
    }).join('');
    $view.innerHTML =
      '<button type="button" class="linkish" data-tab="course">‹ All lessons</button>' +
      '<div class="pagehead"><div class="eyebrow">' + esc(lessonLabel(noteN)) + '</div><h1>' + esc(L.title) + '</h1><p class="muted">' + esc(L.goal) + '</p></div>' +
      '<section class="panel"><h2>Words and phrases</h2><ul class="notelist">' + items + '</ul></section>' +
      '<section class="panel">' + grammarHTML(L.grammar) + '</section>' +
      '<section class="panel"><h2>Dialogue · ' + esc(L.dialogue.title) + '</h2><ol class="dialogue">' + dialogueLines(L.dialogue.lines, null) + '</ol></section>' +
      '<div class="two">' + (noteN > 1 ? '<button type="button" class="btn" data-note="' + (noteN - 1) + '">‹ Lesson ' + (noteN - 1) + '</button>' : '<span></span>') +
      (noteN < P().completed ? '<button type="button" class="btn" data-note="' + (noteN + 1) + '">Lesson ' + (noteN + 1) + ' ›</button>' : '<span></span>') + '</div>';
  }

  /* ---------- settings ---------- */
  var resetArmed = false, leaveArmed = false;
  function renderSettings() {
    var a = S.profiles.a, b = S.profiles.b, p = P();
    $view.innerHTML =
      '<div class="pagehead row-between"><h1>Settings</h1><button type="button" class="btn" data-tab="home">Done</button></div>' +
      '<section class="panel stack">' +
        '<div class="setrow"><span>Appearance</span><div class="seg" role="group" aria-label="Appearance">' +
          ['system', 'light', 'dark'].map(function (m) {
            return '<button type="button" data-theme-pick="' + m + '" aria-pressed="' + ((S.theme || 'system') === m) + '">' + (m === 'system' ? 'Phone' : m === 'light' ? 'Light' : 'Dark') + '</button>';
          }).join('') + '</div></div>' +
        '<div class="setrow"><span>This phone is for</span><div class="seg" role="group" aria-label="This phone is for">' +
          '<button type="button" data-who="a" aria-pressed="' + (S.who === 'a') + '">' + esc(a.name) + '</button>' +
          '<button type="button" data-who="b" aria-pressed="' + (S.who === 'b') + '">' + esc(b.name) + '</button></div></div>' +
        '<div class="grid2">' +
          '<div class="field"><label for="name-a">Name</label><input id="name-a" data-name="a" maxlength="24" value="' + esc(a.name) + '"></div>' +
          '<div class="field"><label for="name-b">Spouse\'s name</label><input id="name-b" data-name="b" maxlength="24" value="' + esc(b.name) + '"></div>' +
        '</div>' +
      '</section>' +
      coupleHTML() + installHelp() +
      '<section class="panel stack"><h2>Progress</h2><p class="small muted" style="margin:0">' + esc(p.name) + ': ' + p.completed + ' lessons finished · ' + Object.keys(p.cards).length + ' cards · ' + streak(p) + '-day streak.</p>' +
        '<button type="button" class="btn danger' + (resetArmed ? ' armed' : '') + '" data-reset="1">' + (resetArmed ? 'Tap again to erase ' + esc(p.name) + '\'s progress' : 'Start the course over') + '</button></section>';
  }
  function coupleHTML() {
    var head = '<h2>Together</h2>';
    if (!window.MaziSync && remote.status === 'unavailable') {
      return '<section class="panel stack">' + head + '<p class="small muted" style="margin:0">Sync works in the Mazí app from your GitHub link.</p></section>';
    }
    if (S.couple) {
      var setup = /^auth\/|permission-denied|unauthorized/.test(remote.error || '');
      var st = remote.status === 'on' ? 'Connected' : remote.status === 'error' ? (setup ? 'Firebase setup needs attention' : 'Offline, will retry') : 'Connecting…';
      return '<section class="panel stack">' + head +
        '<p class="small" style="margin:0"><b>' + st + '.</b> Your couple code:</p>' +
        '<div class="row"><code class="code" id="couple-code">' + esc(S.couple) + '</code><button type="button" class="btn" data-copy="1">Copy</button></div>' +
        '<p class="small muted" style="margin:0">Your spouse enters this code on their phone. Keep it between the two of you.</p>' +
        (remote.status === 'error' ? '<button type="button" class="btn" data-retry="1">Try again</button>' : '') +
        (remote.error ? '<p class="small muted" style="margin:0">Details: ' + esc(remote.error) + '</p>' : '') +
        '<button type="button" class="btn danger' + (leaveArmed ? ' armed' : '') + '" data-leave="1">' + (leaveArmed ? 'Tap again to disconnect' : 'Disconnect this phone') + '</button>' +
      '</section>';
    }
    return '<section class="panel stack">' + head +
      '<p class="small" style="margin:0">See each other\'s progress and take each lesson together. One of you creates a code; the other enters it.</p>' +
      '<button type="button" class="btn primary" data-create="1">Create a couple code</button>' +
      '<form class="stack" id="join-form">' +
        '<div class="field"><label for="join-code">Or enter your spouse\'s code</label><input id="join-code" autocomplete="off" autocapitalize="characters" spellcheck="false" placeholder="XXXX-XXXX-XXXX-XXXX"></div>' +
        '<button type="submit" class="btn">Join</button>' +
      '</form></section>';
  }
  function installHelp() {
    return '<section class="panel stack"><h2>Home screen and sound</h2><div class="stack small">' +
      '<div><b>iPhone</b> · In Safari, tap Share, then <b>Add to Home Screen</b>.</div>' +
      '<div><b>Android</b> · In Chrome, tap ⋮, then <b>Add to Home screen</b> or <b>Install app</b>.</div>' +
      '<div class="muted">Always open Mazí from the icon. On iPhone, the icon and Safari keep separate progress.</div>' +
      '<div class="muted"><b>No sound?</b> iPhone: Settings › Accessibility › Spoken Content › Voices › Greek. Android: Settings › Text-to-speech › Speech Services by Google › Install voice data › Greek.</div>' +
      '</div></section>';
  }

  /* ---------- first run ---------- */
  function renderWelcome() {
    $view.innerHTML =
      '<section class="hero"><div class="eyebrow" lang="el">Καλώς ήρθες · Welcome</div>' +
        '<h1>Who is learning on this phone?</h1>' +
        '<p class="muted">You each use Mazí on your own phone and take one lesson a day, together.</p></section>' +
      '<form class="panel stack" id="welcome-form">' +
        '<div class="field"><label for="w-me">Your name</label><input id="w-me" maxlength="24" required autocomplete="given-name"></div>' +
        '<div class="field"><label for="w-partner">Your spouse\'s name</label><input id="w-partner" maxlength="24" placeholder="Optional"></div>' +
        '<button type="submit" class="btn primary">Start</button>' +
      '</form>';
  }

  /* ---------- routing ---------- */
  var VIEWS = { home: renderHome, course: renderCourse, note: renderNotebook, session: renderSession, settings: renderSettings, welcome: renderWelcome };
  var current = 'home';
  function go(view, keepScroll) {
    if (!VIEWS[view]) view = 'home';
    if (!S.setup) view = 'welcome';
    if (view === 'session' && !run) view = 'home';
    current = view;
    if (view !== 'settings') { resetArmed = false; leaveArmed = false; }
    document.body.classList.toggle('in-session', view === 'session' || view === 'welcome');
    document.querySelectorAll('#tabs button').forEach(function (b) {
      var on = b.dataset.tab === view || (view === 'note' && b.dataset.tab === 'course');
      if (on) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current');
    });
    renderHeader();
    VIEWS[view]();
    if (!keepScroll) window.scrollTo(0, 0);
    var hash = view === 'note' ? 'course' : view === 'session' ? 'home' : view;
    try { if (location.hash.slice(1) !== hash) history.replaceState(null, '', '#' + hash); } catch (e) { /* ignore */ }
  }
  function refresh() { go(current, true); }

  document.addEventListener('click', function (e) {
    var t = e.target.closest('button');
    if (!t || t.disabled) return;
    var d = t.dataset;
    if (d.say) { say(d.say); return; }
    if (d.tab) { run = null; go(d.tab); return; }
    if (d.go) { go(d.go); return; }
    if (d.home || d.close) { run = null; go('home'); return; }
    if (d.start) { startSession(false); return; }
    if (d.extra) { startSession(true); return; }
    if (d.ahead) { P().aheadOk = Number(d.ahead); save(); startSession(false); return; }
    if (d.note) { noteN = Number(d.note); run = null; go('note'); return; }

    if (d.show) { run.shown = true; var it = itemByKey(run.rq[0]); if (it) say(it.el); refresh(); return; }
    if (d.card) {
      var key = run.rq.shift();
      gradeCard(key, d.card === '1');
      if (d.card === '0') run.rq.push(key); else run.reviewed++;
      run.shown = false;
      if (!run.extra && !run.rq.length) { nextBlock(); return; }
      save(); refresh(); return;
    }
    if (d.newstep) {
      run.step = Math.max(0, run.step + Number(d.newstep));
      var ni = run.items[run.step];
      if (ni) say(ni.el);
      refresh(); window.scrollTo(0, 0); return;
    }
    if (d.nextblock) { nextBlock(); return; }
    if (d.opt) { answerPractice(d.opt); refresh(); return; }
    if (d.tile) { run.built.push(Number(d.tile)); refresh(); return; }
    if (d.clear) { run.built = []; refresh(); return; }
    if (d.check) { answerPractice(null); refresh(); return; }
    if (d.nextq) { run.qi++; run.answer = null; run.built = []; refresh(); window.scrollTo(0, 0); return; }
    if (d.swap) { run.swap = !run.swap; refresh(); return; }
    if (d.finish) { finishLesson(); return; }

    if (d.themePick) { S.theme = d.themePick; save(); applyTheme(); refresh(); return; }
    if (d.who) { S.who = d.who; run = null; save(); refresh(); return; }
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
      S.profiles[S.who] = freshProfile(name); run = null; save();
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
      connectCouple(code); toast('Connected. You\'ll see each other on the home screen.');
    }
  });

  document.addEventListener('input', function (e) {
    var d = e.target.dataset;
    if (d.name) {
      S.profiles[d.name].name = e.target.value.trim() || (d.name === 'a' ? 'Husband' : 'Wife');
      save(); renderHeader();
    }
  });

  window.addEventListener('hashchange', function () {
    var h = location.hash.slice(1);
    if (h && h !== current && (h === 'home' || h === 'course' || h === 'settings')) { run = null; go(h); }
  });

  var startHash = (location.hash || '#home').slice(1);
  go(startHash === 'course' || startHash === 'settings' ? startHash : 'home');
  setTimeout(function () { if (!window.MaziSync) window.MaziApp.setRemote({ status: 'unavailable' }); }, 8000);
})();
