// Renders one lesson as a textbook chapter: reading, vocabulary, grammar, Bible, exercises, together.
// Exercises are worksheets: fill in a whole set, then check it. Used by app.js.
(function () {
  'use strict';
  var G = window.GreekSay;

  /* ---------- helpers ---------- */
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function shuffle(a, seed) {
    a = a.slice(); var s = seed || 1;
    function rnd() { s = (s * 9301 + 49297) % 233280; return s / 233280; }
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(rnd() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function bare(s) { return String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/ς/g, 'σ').replace(/[;;.,!?·…'’«»"]/g, ' ').replace(/\s+/g, ' ').trim(); }
  function exact(s) { return String(s).normalize('NFC').toLowerCase().replace(/ς/g, 'σ').replace(/[;;.,!?·…'’«»"]/g, ' ').replace(/\s+/g, ' ').trim(); }
  function grade(given, answers) {
    var best = 'no';
    answers.forEach(function (a) {
      if (exact(given) === exact(a)) best = 'ok';
      else if (best !== 'ok' && bare(given) === bare(a)) best = 'accent';
    });
    return best;
  }
  var PLAY = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
  function play(text, label) { return '<button type="button" class="play" data-say="' + esc(text) + '" aria-label="Listen: ' + esc(label || text) + '">' + PLAY + '</button>'; }
  function isLetter(it) { return it.k === 'letter'; }
  function pronHTML(it) {
    if (isLetter(it)) return '<span class="tel">' + esc(it.te) + '</span><span class="tr">' + esc(it.say) + '</span>';
    return '<span class="tel">' + esc(G.telugu(it.el)) + '</span><span class="tr">' + esc(G.latin(it.el)) + '</span>';
  }
  function shown(it) { return isLetter(it) ? it.up + ' ' + it.el : it.el; }
  function nameLine(s) { return s.replace(/___/g, '(your name)'); }
  function lessonWords(L) {
    var set = {};
    L.items.forEach(function (it) { if (!isLetter(it)) it.el.split(/[\s\/]+/).forEach(function (w) { var b = bare(w); if (b.length > 2) set[b] = 1; }); });
    return set;
  }
  function highlight(line, words) {
    return line.split(/(\s+)/).map(function (tok) {
      if (/^\s+$/.test(tok)) return tok;
      return words[bare(tok)] ? '<mark>' + esc(tok) + '</mark>' : esc(tok);
    }).join('');
  }

  /* ---------- exercise model ---------- */
  // Builds the worksheet sets for a lesson. Each question: { id, kind, ... , answers: [..] }.
  function buildSets(L, X, older) {
    var seed = L.n * 7 + 3, sets = [];
    var words = L.items.filter(function (it) { return !isLetter(it); });
    var letters = L.items.filter(isLetter);
    var plain = words.filter(function (it) { return it.el.indexOf('/') === -1 && it.el.indexOf('…') === -1; });

    if (X.drills && X.drills.length) {
      sets.push({ id: 'A', title: 'Choose the right word or ending', how: 'Tap the option that fits the gap.', qs: X.drills.map(function (d, i) {
        return { id: 'A' + i, kind: 'choose', s: d.s, o: d.o, answers: [d.a], en: d.en, why: d.why };
      }) });
    }
    if (letters.length) {
      sets.push({ id: 'B', title: 'Write the sound', how: 'Write each letter\'s sound in English letters, for example "a" or "th".', qs: shuffle(letters, seed).slice(0, 5).map(function (it, i) {
        return { id: 'B' + i, kind: 'sound', it: it, answers: it.say.split('/').map(function (s) { return s.trim(); }) };
      }) });
    } else if (plain.length) {
      sets.push({ id: 'B', title: 'Translate into Greek', how: 'Write the Greek. Accents count, but you\'ll get credit for the right letters.', qs: shuffle(plain, seed).slice(0, 4).map(function (it, i) {
        return { id: 'B' + i, kind: 'write', prompt: it.en, answers: [it.el], it: it };
      }) });
    }
    var pool = words.concat(older.filter(function (it) { return !isLetter(it); }));
    var mItems = [];
    words.concat(shuffle(pool, seed + 1)).forEach(function (it) { if (mItems.length < 5 && !mItems.some(function (m) { return m.en === it.en; })) mItems.push(it); });
    if (mItems.length >= 3) {
      var letterKeys = 'abcdef'.split('');
      var right = shuffle(mItems.map(function (it, i) { return i; }), seed + 2);
      sets.push({ id: 'C', title: 'Match the meanings', how: 'Choose the letter of the right meaning for each Greek word.', kind: 'match', items: mItems, right: right, letters: letterKeys,
        qs: mItems.map(function (it, i) { return { id: 'C' + i, kind: 'match', it: it, answers: [letterKeys[right.indexOf(i)]] }; }) });
    }
    var singles = plain.filter(function (it) { return it.el.split(' ').length <= 2; });
    if (singles.length) {
      sets.push({ id: 'D', title: 'Listen and write', how: 'Play each one, then write what you hear.', qs: shuffle(singles, seed + 3).slice(0, 3).map(function (it, i) {
        return { id: 'D' + i, kind: 'listen', it: it, answers: [it.el] };
      }) });
    }
    if (X.spot) {
      sets.push({ id: 'E', title: 'Correct the sentence', how: 'One word is wrong. Write the correct word.', qs: [{ id: 'E0', kind: 'fix', spot: X.spot, answers: [X.spot.fix] }] });
    }
    var questions = L.dialogue.lines.filter(function (l, i) { return /;\s*$/.test(l[1]) && L.dialogue.lines[i + 1]; });
    if (questions.length) {
      sets.push({ id: 'F', title: 'Answer in your own words', how: 'Write your own answer in Greek. There is no single right answer; compare with the example.', qs: questions.slice(0, 2).map(function (l, i) {
        var idx = L.dialogue.lines.indexOf(l);
        return { id: 'F' + i, kind: 'open', q: l, model: L.dialogue.lines[idx + 1] };
      }) });
    }
    return sets;
  }

  /* ---------- rendering ---------- */
  function render(L, X, ctx) {
    X = X || {};
    var sets = buildSets(L, X, ctx.older || []);
    var hasBible = !!X.bible;
    var nums = { review: 0 }, n = 1, sec = {};
    ['reading', 'vocab', 'grammar'].concat(hasBible || X.know ? ['bible'] : []).concat(['exercises', 'together']).forEach(function (k) { sec[k] = L.n + '.' + (n++); });
    var toc = [
      ctx.review && ctx.review.length ? ['review', 'Review', '5 min'] : null,
      ['reading', 'Reading', ''], ['vocab', 'Vocabulary', ''], ['grammar', 'Grammar', '10 min'],
      hasBible || X.know ? ['bible', hasBible ? 'From the Bible' : 'Did you know?', ''] : null,
      ['exercises', 'Exercises', '10 min'], ['together', 'Together', '5 min']
    ].filter(Boolean);

    var h = '';
    h += '<header><div class="kicker">Lesson ' + L.n + ' · ' + esc(ctx.unit || '') + '</div><h1>' + esc(L.title) + '</h1>' +
      '<p class="lede">' + esc(L.goal) + '</p>' +
      '<nav class="contents" aria-label="In this lesson">' + toc.map(function (t) {
        return '<a href="#s-' + t[0] + '"><span>' + (t[0] === 'review' ? '·' : sec[t[0]]) + '</span>' + esc(t[1]) + (t[2] ? ' <span class="time">' + t[2] + '</span>' : '') + '</a>';
      }).join('') + '</nav></header>';

    // Review
    if (ctx.review && ctx.review.length) {
      h += '<section id="s-review"><h2><span class="no">Review</span>Before you begin</h2>' +
        '<p>Read each English word and say the Greek aloud, together. Then reveal the answers and mark the ones you missed.</p>' +
        '<ol class="ex" style="list-style:decimal;padding-left:24px">' + ctx.review.map(function (it, i) {
          return '<li><span>' + esc(isLetter(it) ? 'the letter ' + it.el : it.en) + '</span> <span class="rev" data-rev="' + i + '" hidden>→ <b class="gr">' + esc(shown(it)) + '</b> ' + play(it.el, it.en) + ' <label class="ui small muted"><input type="checkbox" data-missed="' + esc(it.key || '') + '"> missed</label></span></li>';
        }).join('') + '</ol><button type="button" class="btn" data-reveal-review="1">Show the answers</button></section>';
    }

    // Reading
    var words = lessonWords(L);
    h += '<section id="s-reading"><h2><span class="no">' + sec.reading + '</span>Reading</h2>' +
      (X.setting ? '<p class="setting">' + esc(X.setting) + '</p>' : '') +
      '<ol class="dialogue">' + L.dialogue.lines.map(function (l) {
        var who = l[0] === 'A' ? ctx.me : ctx.spouse;
        return '<li><span class="who">' + esc(who) + '</span><span class="g" lang="el">' + highlight(nameLine(l[1]), words) + '</span> ' + play(l[1], l[2]) +
          '<span class="tel">' + esc(G.telugu(l[1].replace(/___/g, '…'))) + '</span><span class="en">' + esc(l[2]) + '</span></li>';
      }).join('') + '</ol>' +
      '<p class="muted" style="font-size:15px">Read it once silently, once aloud together. Highlighted words are new in this lesson.</p></section>';

    // Vocabulary
    h += '<section id="s-vocab"><h2><span class="no">' + sec.vocab + '</span>Vocabulary</h2>' +
      '<table class="vocab"><thead><tr><th>Greek · say it</th><th>Meaning</th></tr></thead><tbody>' + L.items.map(function (it) {
        return '<tr><td><span class="g" lang="el">' + esc(shown(it)) + '</span> ' + play(it.el, it.en) + pronHTML(it) + '</td>' +
          '<td>' + esc(it.en) + (it.tm ? '<span class="te">' + esc(it.tm) + '</span>' : '') + (it.note ? '<span class="tr" style="display:block;margin-top:4px">' + esc(it.note) + '</span>' : '') + '</td></tr>';
      }).join('') + '</tbody></table></section>';

    // Grammar
    var g = L.grammar;
    h += '<section id="s-grammar"><h2><span class="no">' + sec.grammar + '</span>' + esc(g.title) + '</h2>' +
      g.body.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('');
    if (X.table) {
      h += '<table class="pattern ' + (X.table.tone === 'gender' ? 'gender' : '') + '"><thead><tr>' + X.table.cols.map(function (c) { return '<th>' + esc(c) + '</th>'; }).join('') + '</tr></thead><tbody>' +
        X.table.rows.map(function (r) {
          return '<tr>' + r.map(function (c, i) {
            if (X.table.tone === 'gender') {
              var m = c.match(/^(.*?)(ος|η|ός|ή)$/);
              if (m) return '<td lang="el">' + esc(m[1]) + '<b class="e' + (i + 1) + '">' + esc(m[2]) + '</b></td>';
            }
            return '<td lang="el">' + esc(c) + '</td>';
          }).join('') + '</tr>';
        }).join('') + '</tbody></table>';
    }
    if (g.ex && g.ex.length) {
      h += '<h3>Examples</h3><ul class="ex">' + g.ex.map(function (e) {
        return '<li><span class="gr" lang="el">' + esc(e.el) + '</span> ' + play(e.el, e.en) + '<br><span class="tel">' + esc(G.telugu(e.el)) + '</span> <span class="en">— ' + esc(e.en) + '</span></li>';
      }).join('') + '</ul>';
    }
    if (g.te) h += '<aside class="aside"><span class="label">Telugu comparison</span>' + esc(g.te) + '</aside>';
    h += '</section>';

    // Bible and did you know
    if (hasBible || X.know) {
      h += '<section id="s-bible"><h2><span class="no">' + sec.bible + '</span>' + (hasBible ? 'From the Bible' : 'Did you know?') + '</h2>';
      if (hasBible) {
        var b = X.bible;
        h += '<blockquote><div class="k" lang="grc">' + esc(b.koine) + ' ' + play(b.koine, b.ref) + '</div><cite>' + esc(b.ref) + '</cite></blockquote>' +
          '<p><i>' + esc(b.en) + '</i></p><p>' + esc(b.note) + '</p>';
      }
      if (X.know) h += (hasBible ? '<aside class="aside"><span class="label">Did you know?</span>' + esc(X.know) + '</aside>' : '<p>' + esc(X.know) + '</p>');
      h += '</section>';
    }

    // Exercises
    h += '<section id="s-exercises"><h2><span class="no">' + sec.exercises + '</span>Exercises</h2>' +
      '<p>Do these together, one writing and the other helping, or each on your own phone. Check each set when you finish it.</p>' +
      '<label class="keytoggle"><input type="checkbox" id="use-keys"' + (ctx.keys !== false ? ' checked' : '') + '>Use on-screen Greek letters (turn off if your phone has a Greek keyboard)</label>';
    sets.forEach(function (set) {
      h += '<div class="set" data-set="' + set.id + '"><h3>' + set.id + '. ' + esc(set.title) + '</h3><p class="how">' + esc(set.how) + '</p>';
      if (set.kind === 'match') {
        h += '<div class="matchlist">' + set.right.map(function (orig, k) { return '<span><b class="ui">' + set.letters[k] + '.</b> ' + esc(set.items[orig].en) + '</span>'; }).join('') + '</div>';
      }
      h += '<ol>' + set.qs.map(function (q) { return '<li data-q="' + q.id + '">' + questionHTML(q, set) + '<span class="result" hidden></span></li>'; }).join('') + '</ol>' +
        '<div class="checkbar"><button type="button" class="btn solid" data-check-set="' + set.id + '">Check set ' + set.id + '</button><span class="score" data-score="' + set.id + '"></span></div></div>';
    });
    h += '</section>';

    // Together
    var mm = '2:00';
    h += '<section id="s-together"><h2><span class="no">' + sec.together + '</span>Together</h2>' +
      '<p>First read the dialogue from ' + sec.reading + ' aloud as a role-play: ' + esc(ctx.me) + ' reads A, ' + esc(ctx.spouse) + ' reads B. Then swap. Then put the phone down and talk:</p>' +
      '<ol class="prompts">' + (X.turn || [L.dialogue.tip]).map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ol>' +
      '<p class="ui"><span class="timer" id="timer">' + mm + '</span><button type="button" class="btn" data-timer="1">Start 2 minutes</button></p>' +
      '</section>';

    h += '<div class="finish"><p style="margin:0">When you have both read, practised and talked, mark the lesson as done.</p>' +
      '<button type="button" class="btn solid" data-finish="1">We finished lesson ' + L.n + '</button></div>';
    return { html: h, sets: sets };
  }

  function questionHTML(q, set) {
    if (q.kind === 'choose') {
      var parts = q.s.split('___');
      return '<span class="gr" lang="el">' + esc(parts[0]) + '<span class="blank" data-blank="' + q.id + '">?</span>' + esc(parts[1] || '') + '</span>' +
        '<span class="choices">' + q.o.map(function (o) { return '<button type="button" class="choice" data-choose="' + q.id + '" data-val="' + esc(o) + '" aria-pressed="false">' + (/\S___/.test(q.s) ? '-' : '') + esc(o) + '</button>'; }).join('') + '</span>' +
        '<br><span class="en muted" style="font-size:15px;font-style:italic">' + esc(q.en) + '</span>';
    }
    if (q.kind === 'sound') return '<span class="gr" lang="el" style="font-size:22px">' + esc(q.it.up + ' ' + q.it.el) + '</span> → <input class="write small" data-in="' + q.id + '" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Sound of ' + esc(q.it.el) + '">';
    if (q.kind === 'write') return esc(q.prompt) + '<br><input class="write" lang="el" data-in="' + q.id + '" data-greek="1" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Greek for ' + esc(q.prompt) + '">';
    if (q.kind === 'match') return '<span class="gr" lang="el">' + esc(q.it.el) + '</span> <select class="pick" data-in="' + q.id + '" aria-label="Meaning of ' + esc(q.it.el) + '"><option value="">–</option>' + set.letters.slice(0, set.items.length).map(function (l) { return '<option>' + l + '</option>'; }).join('') + '</select>';
    if (q.kind === 'listen') return play(q.it.el, 'Play') + ' <input class="write" lang="el" data-in="' + q.id + '" data-greek="1" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Write what you hear">';
    if (q.kind === 'fix') return '<span class="gr" lang="el">' + esc(q.spot.w.join(' ')) + '</span><br><span class="en muted" style="font-size:15px;font-style:italic">' + esc(q.spot.en) + '</span><br>Correct word: <input class="write" lang="el" data-in="' + q.id + '" data-greek="1" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Correct word">';
    if (q.kind === 'open') return '<span class="gr" lang="el">' + esc(nameLine(q.q[1])) + '</span> <span class="en muted" style="font-size:15px">(' + esc(q.q[2]) + ')</span><br><input class="write" lang="el" data-in="' + q.id + '" data-greek="1" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Your answer">';
    return '';
  }

  /* ---------- checking ---------- */
  function check(set, root, onMiss) {
    var right = 0, counted = 0;
    set.qs.forEach(function (q) {
      var li = root.querySelector('[data-q="' + q.id + '"]'), res = li.querySelector('.result');
      res.hidden = false; res.className = 'result';
      if (q.kind === 'open') {
        var v = (li.querySelector('[data-in]').value || '').trim();
        res.innerHTML = (v ? 'Nice. ' : '') + 'Example answer: <span class="gr" lang="el">' + esc(nameLine(q.model[1])) + '</span> <span class="muted">(' + esc(q.model[2]) + ')</span>';
        res.classList.add('ok');
        return;
      }
      counted++;
      var given = '';
      if (q.kind === 'choose') { var sel = li.querySelector('.choice[aria-pressed="true"]'); given = sel ? sel.dataset.val : ''; }
      else given = (li.querySelector('[data-in]').value || '').trim();
      var gr = q.kind === 'match' || q.kind === 'sound' ? (q.answers.some(function (a) { return given.toLowerCase() === a.toLowerCase(); }) ? 'ok' : 'no') : grade(given, q.answers);
      var correct = q.kind === 'match' ? q.answers[0] + ' · ' + q.it.en : q.kind === 'sound' ? q.it.say : q.answers[0];
      if (gr === 'ok') { right++; res.classList.add('ok'); res.innerHTML = '✓ Correct' + (q.why ? '. ' + esc(q.why) : ''); }
      else if (gr === 'accent') { right++; res.classList.add('acc'); res.innerHTML = '✓ Right letters. Check the accent: <span class="gr" lang="el">' + esc(correct) + '</span>'; }
      else {
        res.classList.add('bad');
        res.innerHTML = '✗ ' + (given ? 'You wrote ' + esc(given) + '. ' : '') + 'Answer: <span class="gr" lang="el">' + esc(correct) + '</span>' + (q.why ? '. ' + esc(q.why) : '');
        if (onMiss && q.it) onMiss(q.it);
      }
    });
    return { right: right, of: counted };
  }

  window.MaziBook = { render: render, check: check, esc: esc };
})();
