(function () {
  'use strict';

  var D = window.MAZI_DATA;
  var KEY = 'mazi-greek-v1';
  var NEW_PER_DAY = 8;
  var DAY_MS = 86400000;
  var STAGES = [
    { from: 1, to: 14, name: 'Letters & sounds', items: [
      { id: 'letters', label: 'Learn and quiz the letters', min: 10, tab: 'alphabet' },
      { id: 'cards', label: 'Review your cards', min: 10, tab: 'cards' },
      { id: 'talk', label: 'Talk together in Greek', min: 10, tab: 'today' }
    ] },
    { from: 15, to: 180, name: 'Everyday Greek', items: [
      { id: 'cards', label: 'Review your cards', min: 10, tab: 'cards' },
      { id: 'phrases', label: 'Read and say new phrases', min: 10, tab: 'phrases' },
      { id: 'talk', label: 'Talk together in Greek', min: 10, tab: 'today' }
    ] },
    { from: 181, to: Infinity, name: 'Greek + Bible', items: [
      { id: 'cards', label: 'Review your cards', min: 10, tab: 'cards' },
      { id: 'verse', label: 'Read today\'s verse word by word', min: 10, tab: 'bible' },
      { id: 'talk', label: 'Talk together in Greek', min: 10, tab: 'today' }
    ] }
  ];

  /* ---------- dates ---------- */
  function pad(n) { return String(n).padStart(2, '0'); }
  function dayStr(d) { d = d || new Date(); return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function parseDay(s) { var p = s.split('-').map(Number); return new Date(p[0], p[1] - 1, p[2]); }
  function addDays(s, n) { var d = parseDay(s); d.setDate(d.getDate() + n); return dayStr(d); }
  function diffDays(a, b) { return Math.round((parseDay(b) - parseDay(a)) / DAY_MS); }
  function today() { return dayStr(); }
  // Same number for both of you on the same date, so you share the prompt and verse.
  function dateIndex() { return Math.floor(parseDay(today()).getTime() / DAY_MS); }

  /* ---------- state ---------- */
  function freshProfile(name) { return { name: name, start: today(), cards: {}, checks: {}, active: [], newLog: {} }; }
  function freshState() { return { v: 1, who: 'a', front: 'el', profiles: { a: freshProfile('Husband'), b: freshProfile('Wife') } }; }
  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) { var s = JSON.parse(raw); if (s && s.v === 1 && s.profiles && s.profiles.a && s.profiles.b) return s; }
    } catch (e) { /* storage unavailable */ }
    return freshState();
  }
  var S = load();
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* ignore */ } }
  function P() { return S.profiles[S.who]; }

  function markActive() {
    var p = P(), t = today();
    if (p.active.indexOf(t) === -1) { p.active.push(t); if (p.active.length > 800) p.active = p.active.slice(-800); }
    save();
  }
  function streak(p) {
    var set = {}; p.active.forEach(function (d) { set[d] = 1; });
    var d = today();
    if (!set[d]) d = addDays(d, -1);
    var n = 0;
    while (set[d]) { n++; d = addDays(d, -1); }
    return n;
  }
  function dayNumber(p) { return Math.max(1, diffDays(p.start, today()) + 1); }
  function stageFor(n) { for (var i = 0; i < STAGES.length; i++) if (n >= STAGES[i].from && n <= STAGES[i].to) return i; return 0; }

  /* ---------- helpers ---------- */
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  var $view = document.getElementById('view');
  var toastTimer;
  function toast(msg) {
    var t = document.getElementById('toast');
    t.textContent = msg; t.hidden = false;
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { t.hidden = true; }, 2600);
  }
  var SPEAK_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor" stroke="none"/><path d="M16.5 8.5a5 5 0 0 1 0 7"/><path d="M19 6a8.5 8.5 0 0 1 0 12"/></svg>';
  function speakBtn(text, label) {
    return '<button type="button" class="speak" data-say="' + esc(text) + '" aria-label="Listen: ' + esc(label || text) + '">' + SPEAK_ICON + '</button>';
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
  function say(text) {
    if (!('speechSynthesis' in window)) { toast('This browser cannot read aloud. Use the pronunciation guide.'); return; }
    // Read "a / b" alternatives as two separate words.
    var clean = text.replace(/\s*\/\s*/g, ', ');
    var u = new SpeechSynthesisUtterance(clean);
    u.lang = 'el-GR'; u.rate = 0.82;
    if (greekVoice) u.voice = greekVoice;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
    if (!greekVoice) toast('No Greek voice found. Add Greek text-to-speech in your phone settings.');
  }

  /* ---------- header ---------- */
  function renderWho() {
    var el = document.getElementById('who');
    el.innerHTML = ['a', 'b'].map(function (k) {
      return '<button type="button" data-who="' + k + '" aria-pressed="' + (S.who === k) + '">' + esc(S.profiles[k].name) + '</button>';
    }).join('') + '<button type="button" class="gear" data-go="settings" aria-label="Names and settings" title="Names and settings">⚙</button>';
  }

  /* ---------- today ---------- */
  function phraseById(id) { return D.phrases.find(function (x) { return x.id === id; }); }
  function phraseHTML(ph) {
    return '<article class="panel phrase">' +
      '<div class="gr" lang="el">' + esc(ph.el) + '</div>' + speakBtn(ph.el, ph.en) +
      '<div class="pron"><span class="tel">' + esc(ph.te) + '</span><span class="tr">' + esc(ph.tr) + '</span></div>' +
      '<div class="mean"><span class="en">' + esc(ph.en) + '</span><span class="te">' + esc(ph.tm) + '</span></div>' +
      (ph.note ? '<div class="note">' + esc(ph.note) + '</div>' : '') +
      '</article>';
  }

  function renderToday() {
    var p = P(), n = dayNumber(p), si = stageFor(n), st = STAGES[si];
    var checks = p.checks[today()] || {};
    var idx = dateIndex();
    var prompt = D.prompts[idx % D.prompts.length];
    var phrase = D.phrases[(idx * 7) % D.phrases.length];
    var due = dueCards().length;
    var learned = Object.keys(p.cards).length;
    var doneAll = st.items.every(function (it) { return checks[it.id]; });

    var stageBar = STAGES.map(function (s, i) { return '<span class="' + (i < si ? 'on' : i === si ? 'now' : '') + '"></span>'; }).join('');
    var items = st.items.map(function (it) {
      var on = !!checks[it.id];
      return '<li class="' + (on ? 'done' : '') + '">' +
        '<input type="checkbox" id="chk-' + it.id + '" data-check="' + it.id + '"' + (on ? ' checked' : '') + '>' +
        '<label for="chk-' + it.id + '"><b>' + esc(it.label) + '</b><span class="min">' + it.min + ' min</span></label>' +
        (it.tab !== 'today' ? '<button type="button" class="go" data-tab="' + it.tab + '">Open</button>' : '') +
        '</li>';
    }).join('');

    $view.innerHTML =
      '<section class="hello">' +
        '<div><div class="eyebrow">Day ' + n + ' · ' + esc(st.name) + '</div><h1>Γεια σου, ' + esc(p.name) + '</h1></div>' +
        '<div class="stats"><div class="stat"><b>' + streak(p) + '</b><span>day streak</span></div>' +
        '<div class="stat"><b>' + learned + '</b><span>phrases started</span></div></div>' +
      '</section>' +
      '<div class="stage" title="Stages: letters, everyday Greek, Greek + Bible">' + stageBar + '</div>' +

      '<section class="panel stack">' +
        '<div class="section-title"><h2>Today\'s 30 minutes</h2><span class="muted small">' + (doneAll ? 'Done. Μπράβο!' : 'Tick each part when done') + '</span></div>' +
        '<ul class="plan">' + items + '</ul>' +
        (due ? '<p class="small muted" style="margin:0">' + due + ' card' + (due === 1 ? '' : 's') + ' waiting for review.</p>' : '') +
      '</section>' +

      '<section class="panel talk stack">' +
        '<div class="eyebrow">Talk together today</div>' +
        '<p style="margin:0">' + esc(prompt.text) + '</p>' +
        '<div class="row" style="flex-wrap:nowrap;align-items:flex-start"><div class="say" lang="el" style="flex:1;min-width:0">' + esc(prompt.el) + '</div>' + speakBtn(prompt.el, prompt.en) + '</div>' +
        '<p class="small muted" style="margin:0">' + esc(prompt.en) + '</p>' +
      '</section>' +

      '<section class="stack"><div class="eyebrow">Phrase of the day</div>' + phraseHTML(phrase) + '</section>' +
      (si < 2 ? '<p class="small muted">From day 181 your daily plan adds a Bible verse. You can open the Bible tab any time before that.</p>' : '');
  }

  /* ---------- phrases ---------- */
  var phraseCat = 'greet';
  function renderPhrases() {
    var chips = D.categories.map(function (c) {
      return '<button type="button" class="chip" data-cat="' + c.id + '" aria-pressed="' + (c.id === phraseCat) + '">' + esc(c.label) + '</button>';
    }).join('');
    var list = D.phrases.filter(function (x) { return x.cat === phraseCat; }).map(phraseHTML).join('');
    $view.innerHTML =
      '<div class="section-title"><h2>Phrases for us</h2><span class="muted small">' + D.phrases.length + ' phrases</span></div>' +
      '<p class="small muted" style="margin:-8px 0 0">Blue Telugu letters show how to say it. A long vowel (ా ీ ూ ే ో) is the stressed syllable.</p>' +
      '<div class="chips" role="group" aria-label="Topics">' + chips + '</div>' +
      '<div class="list">' + list + '</div>';
  }

  /* ---------- flashcards (spaced repetition) ---------- */
  function dueCards() {
    var p = P(), t = today();
    return D.phrases.filter(function (x) { var c = p.cards[x.id]; return c && c.due <= t; });
  }
  function newToday() { return P().newLog[today()] || 0; }
  function newCards() {
    var p = P(), left = Math.max(0, NEW_PER_DAY - newToday());
    return D.phrases.filter(function (x) { return !p.cards[x.id]; }).slice(0, left);
  }
  var session = null; // { queue: [ids], shown: bool }
  function startSession() {
    var ids = dueCards().map(function (x) { return x.id; }).concat(newCards().map(function (x) { return x.id; }));
    session = { queue: ids, shown: false, total: ids.length, done: 0 };
  }
  function grade(id, g) {
    var p = P(), t = today();
    var c = p.cards[id];
    if (!c) { c = { reps: 0, ease: 2.5, ivl: 0, due: t }; p.cards[id] = c; p.newLog[t] = (p.newLog[t] || 0) + 1; }
    if (g === 0) {
      c.reps = 0; c.ivl = 0; c.ease = Math.max(1.3, c.ease - 0.2); c.due = t;
      session.queue.push(id);
    } else {
      if (c.reps === 0) c.ivl = g === 3 ? 3 : 1;
      else if (c.reps === 1) c.ivl = g === 1 ? 2 : g === 2 ? 3 : 6;
      else c.ivl = Math.max(c.ivl + 1, Math.round(c.ivl * (g === 1 ? 1.2 : g === 2 ? c.ease : c.ease * 1.3)));
      c.ease = Math.max(1.3, c.ease + (g === 1 ? -0.15 : g === 3 ? 0.15 : 0));
      c.reps++; c.due = addDays(t, c.ivl);
      session.done++;
    }
    // Keep the newLog small.
    Object.keys(p.newLog).forEach(function (k) { if (diffDays(k, t) > 3) delete p.newLog[k]; });
    session.queue.shift();
    session.shown = false;
    markActive();
    if (!session.queue.length) {
      var ch = p.checks[t] || (p.checks[t] = {});
      ch.cards = true; save();
    }
  }
  function nextLabel(id, g) {
    var c = P().cards[id];
    if (g === 0) return 'again';
    var ivl;
    if (!c || c.reps === 0) ivl = g === 3 ? 3 : 1;
    else if (c.reps === 1) ivl = g === 1 ? 2 : g === 2 ? 3 : 6;
    else ivl = Math.max(c.ivl + 1, Math.round(c.ivl * (g === 1 ? 1.2 : g === 2 ? c.ease : c.ease * 1.3)));
    return ivl + 'd';
  }
  function renderCards() {
    if (!session) startSession();
    var due = dueCards().length, fresh = newCards().length, total = Object.keys(P().cards).length;
    var head =
      '<div class="section-title"><h2>Cards</h2>' +
        '<div class="switch">Show first <div class="seg" role="group" aria-label="Card front">' +
          '<button type="button" data-front="el" aria-pressed="' + (S.front === 'el') + '">Greek</button>' +
          '<button type="button" data-front="en" aria-pressed="' + (S.front === 'en') + '">English</button></div></div></div>' +
      '<div class="deckbar">' +
        '<div class="count"><b>' + due + '</b><span>Due</span></div>' +
        '<div class="count"><b>' + fresh + '</b><span>New today</span></div>' +
        '<div class="count"><b>' + total + ' / ' + D.phrases.length + '</b><span>Started</span></div>' +
      '</div>';

    if (!session.queue.length) {
      $view.innerHTML = head +
        '<section class="panel flash"><div class="big" lang="el">Μπράβο!</div>' +
        '<p style="margin:0">' + (total ? 'All cards are done for today. Come back tomorrow for the next ones.' : 'No cards yet.') + '</p>' +
        '<p class="small muted" style="margin:0">You get up to ' + NEW_PER_DAY + ' new phrases a day. Cards come back just before you would forget them.</p>' +
        '<button type="button" class="btn" data-tab="phrases">Browse all phrases</button></section>';
      return;
    }

    var id = session.queue[0], ph = phraseById(id);
    var isNew = !P().cards[id];
    var front = S.front === 'el'
      ? '<div class="big" lang="el">' + esc(ph.el) + '</div>' + speakBtn(ph.el, ph.en)
      : '<div class="big en">' + esc(ph.en) + '</div><div class="te muted">' + esc(ph.tm) + '</div>';
    var back = S.front === 'el'
      ? '<div class="tel">' + esc(ph.te) + '</div><div class="muted small">' + esc(ph.tr) + '</div><div style="font-weight:600;font-size:19px">' + esc(ph.en) + '</div><div class="te muted">' + esc(ph.tm) + '</div>'
      : '<div class="big" lang="el">' + esc(ph.el) + '</div>' + speakBtn(ph.el, ph.en) + '<div class="tel">' + esc(ph.te) + '</div><div class="muted small">' + esc(ph.tr) + '</div>';

    $view.innerHTML = head +
      '<section class="panel flash" aria-live="polite">' +
        '<div class="eyebrow">' + (isNew ? 'New phrase' : 'Review') + ' · ' + (session.done + 1) + ' of ' + Math.max(session.total, session.done + session.queue.length) + '</div>' +
        front +
        (session.shown ? '<div class="answer">' + back + (ph.note ? '<div class="note" style="text-align:left">' + esc(ph.note) + '</div>' : '') + '</div>' : '') +
      '</section>' +
      (session.shown
        ? '<div class="grades">' +
            '<button type="button" class="btn again" data-grade="0">Again<small>' + nextLabel(id, 0) + '</small></button>' +
            '<button type="button" class="btn" data-grade="1">Hard<small>' + nextLabel(id, 1) + '</small></button>' +
            '<button type="button" class="btn good" data-grade="2">Good<small>' + nextLabel(id, 2) + '</small></button>' +
            '<button type="button" class="btn" data-grade="3">Easy<small>' + nextLabel(id, 3) + '</small></button>' +
          '</div>'
        : '<button type="button" class="btn primary" data-reveal="1" style="width:100%">Show answer</button>') +
      '<p class="small muted" style="margin:0">Say the answer out loud before you tap. If you are learning together, quiz each other.</p>';
  }

  /* ---------- alphabet ---------- */
  var letterIdx = 0, quiz = null;
  function newQuiz() {
    var i = Math.floor(Math.random() * D.alphabet.length), L = D.alphabet[i];
    var pool = [];
    D.alphabet.forEach(function (x) { if (x.sound !== L.sound && pool.indexOf(x.sound) === -1) pool.push(x.sound); });
    pool.sort(function () { return Math.random() - 0.5; });
    var opts = pool.slice(0, 3).concat([L.sound]).sort(function () { return Math.random() - 0.5; });
    var upper = Math.random() < 0.35;
    quiz = { i: i, glyph: upper ? L.up : L.lo.split(' ')[0], opts: opts, picked: null, score: quiz ? quiz.score : 0, tries: quiz ? quiz.tries : 0 };
  }
  function renderAlphabet() {
    if (!quiz) newQuiz();
    var L = D.alphabet[letterIdx];
    var grid = D.alphabet.map(function (x, i) {
      return '<button type="button" class="letter" data-letter="' + i + '" aria-pressed="' + (i === letterIdx) + '" aria-label="' + esc(x.name) + '"><span class="l" lang="el">' + esc(x.up + x.lo.split(' ')[0]) + '</span><span class="s">' + esc(x.sound) + '</span></button>';
    }).join('');
    var combos = D.combos.map(function (c) {
      return '<tr><td><span class="gr" lang="el">' + esc(c.g) + '</span></td><td>' + esc(c.sound) + ' <span class="te muted">' + esc(c.te) + '</span></td><td><span lang="el">' + esc(c.ex) + '</span><div class="wnote">' + esc(c.exTr) + ' · ' + esc(c.en) + '</div></td></tr>';
    }).join('');
    var Q = D.alphabet[quiz.i];
    var opts = quiz.opts.map(function (o) {
      var cls = '';
      if (quiz.picked) { if (o === Q.sound) cls = ' right'; else if (o === quiz.picked) cls = ' wrong'; }
      return '<button type="button" class="btn' + cls + '" data-opt="' + esc(o) + '"' + (quiz.picked ? ' disabled' : '') + '>' + esc(o) + '</button>';
    }).join('');

    $view.innerHTML =
      '<div class="section-title"><h2>The Greek letters</h2><span class="muted small">24 letters</span></div>' +
      '<div class="letters">' + grid + '</div>' +
      '<section class="panel detail">' +
        '<div class="glyph" lang="el">' + esc(L.up + ' ' + L.lo) + '</div>' +
        '<h3>' + esc(L.name) + '</h3>' +
        '<div class="soundline"><b>' + esc(L.sound) + '</b><span class="te">' + esc(L.te) + '</span></div>' +
        '<div></div>' +
        '<p class="tip small" style="margin:0">' + esc(L.tip) + '</p>' +
        '<div class="example"><span class="gr" lang="el">' + esc(L.ex.el) + '</span><span class="tel te" style="color:var(--lapis)">' + esc(L.ex.te) + '</span><span class="muted small" style="flex:1">' + esc(L.ex.en) + '</span>' + speakBtn(L.ex.el, L.ex.en) + '</div>' +
      '</section>' +

      '<section class="panel stack quiz">' +
        '<div class="section-title"><h2>Quick quiz</h2><span class="muted small">' + quiz.score + ' / ' + quiz.tries + ' right</span></div>' +
        '<p class="small muted" style="margin:0">What sound does this letter make?</p>' +
        '<div class="q" lang="el">' + esc(quiz.glyph) + '</div>' +
        '<div class="options">' + opts + '</div>' +
        (quiz.picked ? '<button type="button" class="btn primary" data-nextq="1">Next letter</button>' : '') +
      '</section>' +

      '<section class="panel stack">' +
        '<div class="section-title"><h2>Letter pairs</h2></div>' +
        '<p class="small muted" style="margin:0">Two letters that make one sound. Learn these after the single letters.</p>' +
        '<div class="tablewrap"><table><thead><tr><th>Pair</th><th>Sound</th><th>Example</th></tr></thead><tbody>' + combos + '</tbody></table></div>' +
      '</section>' +
      '<p class="small muted">Stress: every Greek word of two or more syllables has an accent mark (ά έ ή ί ό ύ ώ). Say that syllable a little louder.</p>';
  }

  /* ---------- bible ---------- */
  var verseIdx = null;
  function renderBible() {
    if (verseIdx === null) verseIdx = dateIndex() % D.verses.length;
    var V = D.verses[verseIdx];
    var options = D.verses.map(function (v, i) { return '<option value="' + i + '"' + (i === verseIdx ? ' selected' : '') + '>' + esc(v.ref) + (i === dateIndex() % D.verses.length ? ' (today)' : '') + '</option>'; }).join('');
    var rows = V.words.map(function (w) {
      return '<tr><td>' + esc(w.g) + '</td><td>' + esc(w.en) + '<div class="te muted small">' + esc(w.te) + '</div>' + (w.note ? '<div class="wnote">' + esc(w.note) + '</div>' : '') + '</td>' +
        '<td>' + (w.kind === 'same' ? '<span class="tag same">Same today</span>' : '<span class="tag old">Old form</span>') + '<div class="now" lang="el">' + esc(w.now) + '</div></td></tr>';
    }).join('');

    $view.innerHTML =
      '<div class="section-title"><h2>Bible Greek</h2><span class="muted small">Koine, read with modern sounds</span></div>' +
      '<div class="versenav">' +
        '<button type="button" class="btn" data-verse="-1" aria-label="Previous verse">‹</button>' +
        '<select id="verse-pick" data-verse-pick="1" aria-label="Choose a verse">' + options + '</select>' +
        '<button type="button" class="btn" data-verse="1" aria-label="Next verse">›</button>' +
      '</div>' +
      '<section class="panel verse stack">' +
        '<div class="row" style="justify-content:space-between;flex-wrap:nowrap"><span class="ref">' + esc(V.ref) + '</span>' + speakBtn(V.koine, V.ref) + '</div>' +
        '<div class="koine" lang="grc">' + esc(V.koine) + '</div>' +
        '<div class="tr">' + esc(V.tr) + '</div>' +
      '</section>' +
      '<section class="panel"><dl class="trans" style="margin:0">' +
        '<div><dt>Modern</dt><dd class="mg" lang="el">' + esc(V.mg) + '</dd></div>' +
        '<div><dt>English</dt><dd>' + esc(V.en) + '</dd></div>' +
        '<div><dt>Telugu</dt><dd class="te">' + esc(V.te) + '</dd></div>' +
      '</dl></section>' +
      '<section class="panel stack">' +
        '<div class="section-title"><h2>Word by word</h2></div>' +
        '<div class="legend"><span class="tag same">Same today</span> still used in Modern Greek <span class="tag old">Old form</span> today\'s word shown below it</div>' +
        '<div class="tablewrap"><table class="words"><thead><tr><th>Koine</th><th>Meaning</th><th>Today</th></tr></thead><tbody>' + rows + '</tbody></table></div>' +
      '</section>' +
      '<p class="small muted">The Modern Greek and Telugu lines are simple renderings to help you understand, not quotes from a printed Bible.</p>';
  }

  /* ---------- settings ---------- */
  var resetArmed = null;
  function renderSettings() {
    var a = S.profiles.a, b = S.profiles.b;
    function block(k, p) {
      var armed = resetArmed === k;
      return '<section class="panel stack">' +
        '<div class="field"><label for="name-' + k + '">Name</label><input id="name-' + k + '" data-name="' + k + '" maxlength="24" value="' + esc(p.name) + '"></div>' +
        '<div class="field"><label for="start-' + k + '">Start date (day 1)</label><input id="start-' + k + '" type="date" data-start="' + k + '" value="' + esc(p.start) + '" max="' + today() + '"></div>' +
        '<p class="small muted" style="margin:0">Day ' + dayNumber(p) + ' · ' + Object.keys(p.cards).length + ' phrases started · streak ' + streak(p) + '</p>' +
        '<button type="button" class="btn danger' + (armed ? ' armed' : '') + '" data-reset="' + k + '">' + (armed ? 'Tap again to erase ' + esc(p.name) + '\'s progress' : 'Reset progress') + '</button>' +
      '</section>';
    }
    $view.innerHTML =
      '<div class="section-title"><h2>Names and settings</h2><button type="button" class="btn quiet" data-tab="today">Done</button></div>' +
      '<p class="small muted" style="margin:-8px 0 0">Progress is saved on this device. Each of you can use your own phone, or share one and switch names at the top.</p>' +
      '<div class="grid2">' + block('a', a) + block('b', b) + '</div>';
  }

  /* ---------- routing ---------- */
  var TABS = { today: renderToday, phrases: renderPhrases, cards: renderCards, alphabet: renderAlphabet, bible: renderBible, settings: renderSettings };
  var current = 'today';
  function go(tab, keepScroll) {
    if (!TABS[tab]) tab = 'today';
    current = tab;
    if (tab !== 'settings') resetArmed = null;
    document.querySelectorAll('#tabs button').forEach(function (b) {
      if (b.dataset.tab === tab) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current');
    });
    renderWho();
    TABS[tab]();
    if (!keepScroll) window.scrollTo(0, 0);
    try { if (location.hash.slice(1) !== tab) history.replaceState(null, '', '#' + tab); } catch (e) { /* ignore */ }
  }
  function refresh() { go(current, true); }

  document.addEventListener('click', function (e) {
    var t = e.target.closest('button');
    if (!t) return;
    var d = t.dataset;
    if (d.say) { say(d.say); return; }
    if (d.tab) { go(d.tab); return; }
    if (d.go) { go(d.go); return; }
    if (d.who) { S.who = d.who; session = null; save(); refresh(); return; }
    if (d.cat) { phraseCat = d.cat; refresh(); return; }
    if (d.front) { S.front = d.front; save(); if (session) session.shown = false; refresh(); return; }
    if (d.reveal) { session.shown = true; refresh(); return; }
    if (d.grade) { grade(session.queue[0], Number(d.grade)); refresh(); return; }
    if (d.letter) { letterIdx = Number(d.letter); markActive(); refresh(); return; }
    if (d.opt) {
      quiz.picked = d.opt; quiz.tries++;
      if (d.opt === D.alphabet[quiz.i].sound) quiz.score++;
      markActive(); refresh(); return;
    }
    if (d.nextq) { newQuiz(); refresh(); return; }
    if (d.verse) { verseIdx = (verseIdx + Number(d.verse) + D.verses.length) % D.verses.length; markActive(); refresh(); return; }
    if (d.reset) {
      if (resetArmed === d.reset) {
        var name = S.profiles[d.reset].name;
        S.profiles[d.reset] = freshProfile(name);
        resetArmed = null; session = null; save(); toast(name + '\'s progress was reset.');
      } else { resetArmed = d.reset; }
      refresh(); return;
    }
  });

  document.addEventListener('change', function (e) {
    var t = e.target, d = t.dataset;
    if (d.check) {
      var p = P(), day = today();
      var ch = p.checks[day] || (p.checks[day] = {});
      ch[d.check] = t.checked;
      // Keep only the last 60 days of ticks.
      Object.keys(p.checks).forEach(function (k) { if (diffDays(k, day) > 60) delete p.checks[k]; });
      if (t.checked) markActive(); else save();
      refresh();
    } else if (d.versePick) {
      verseIdx = Number(t.value); refresh();
    } else if (d.start) {
      if (t.value && t.value <= today()) { S.profiles[d.start].start = t.value; save(); refresh(); }
    }
  });

  document.addEventListener('input', function (e) {
    var d = e.target.dataset;
    if (d.name) {
      S.profiles[d.name].name = e.target.value.trim() || (d.name === 'a' ? 'Husband' : 'Wife');
      save(); renderWho();
    }
  });

  window.addEventListener('hashchange', function () { var h = location.hash.slice(1); if (h && h !== current) go(h); });

  go((location.hash || '#today').slice(1));
})();
