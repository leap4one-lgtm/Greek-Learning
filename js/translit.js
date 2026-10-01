// Turns Greek spelling into a pronunciation guide, in English letters and in Telugu script.
// Modern Greek pronunciation. Works for monotonic and polytonic (Koine) text.
// Telugu script: a long vowel (ా ీ ూ ే ో) marks the stressed syllable.
(function () {
  'use strict';

  var VOWELS = { 'α': 'a', 'ε': 'e', 'η': 'i', 'ι': 'i', 'ο': 'o', 'υ': 'i', 'ω': 'o' };
  var CONS = {
    'β': ['v'], 'γ': ['gh'], 'δ': ['dh'], 'ζ': ['z'], 'θ': ['th'], 'κ': ['k'], 'λ': ['l'], 'μ': ['m'], 'ν': ['n'],
    'ξ': ['k', 's'], 'π': ['p'], 'ρ': ['r'], 'σ': ['s'], 'ς': ['s'], 'τ': ['t'], 'φ': ['f'], 'χ': ['kh'], 'ψ': ['p', 's']
  };
  var PAIRS = { 'μπ': ['b'], 'ντ': ['d'], 'γκ': ['g'], 'γγ': ['N', 'g'], 'γχ': ['N', 'kh'], 'τσ': ['t', 's'], 'τζ': ['dd', 'z'] };
  var VOICELESS = 'θκξπστφχψς';
  var STRESS = /[́́̀͂]/;   // acute, tonos, grave, circumflex
  var DIAER = /̈/;

  var TE_CONS = {
    v: 'వ', gh: 'గ', y: 'య', dh: 'ద', z: 'జ', th: 'థ', k: 'క', l: 'ల', m: 'మ', n: 'న', p: 'ప', r: 'ర', s: 'స',
    t: 'త', f: 'ఫ', kh: 'ఖ', b: 'బ', d: 'డ', dd: 'ద', g: 'గ'
  };
  var TE_VOWEL = { a: ['అ', 'ఆ'], e: ['ఎ', 'ఏ'], i: ['ఇ', 'ఈ'], o: ['ఒ', 'ఓ'], u: ['ఉ', 'ఊ'] };
  var TE_SIGN = { a: ['', 'ా'], e: ['ె', 'ే'], i: ['ి', 'ీ'], o: ['ొ', 'ో'], u: ['ు', 'ూ'] };
  var LAT_CONS = { dd: 'd', N: 'n' };
  var LAT_STRESSED = { a: 'á', e: 'é', i: 'í', o: 'ó', u: 'ú' };

  // Split one Greek word into letters with stress and diaeresis flags.
  function letters(word) {
    var out = [], s = word.normalize('NFD').toLowerCase();
    for (var i = 0; i < s.length; i++) {
      var ch = s[i];
      if (/[̀-ͯ]/.test(ch)) {
        if (!out.length) continue;
        if (STRESS.test(ch)) { out[out.length - 1].acc = true; if (ch === '\u0300') out[out.length - 1].grave = true; }
        if (DIAER.test(ch)) out[out.length - 1].dia = true;
        continue;
      }
      out.push({ b: ch, acc: false, dia: false });
    }
    return out;
  }

  // Greek word -> list of sound units: { c: 'k' } consonants or { v: 'a', s: stressed }.
  function units(word) {
    var L = letters(word), u = [];
    for (var i = 0; i < L.length; i++) {
      var a = L[i], n = L[i + 1];
      if (VOWELS[a.b]) {
        var pair = n ? a.b + n.b : '';
        if (n && !a.acc && !n.dia && (pair === 'ου' || pair === 'ει' || pair === 'οι' || pair === 'αι' || pair === 'υι')) {
          u.push({ v: pair === 'ου' ? 'u' : pair === 'αι' ? 'e' : 'i', s: n.acc }); i++; continue;
        }
        if (n && !a.acc && !n.dia && n.b === 'υ' && (a.b === 'α' || a.b === 'ε' || a.b === 'η')) {
          var after = L[i + 2];
          u.push({ v: VOWELS[a.b], s: n.acc });
          u.push({ c: !after || VOICELESS.indexOf(after.b) !== -1 ? 'f' : 'v' });
          i++; continue;
        }
        u.push({ v: VOWELS[a.b], s: a.acc });
        continue;
      }
      if (CONS[a.b]) {
        var two = n ? a.b + n.b : '';
        if (two === 'γγ' && L[i + 2] && L[i + 2].b === 'ν') { u.push({ c: 'gh' }); i++; continue; }   // συγγνώμη
        if (PAIRS[two]) { PAIRS[two].forEach(function (c) { u.push({ c: c }); }); i++; continue; }
        if (n && n.b === a.b) i++;            // double letters sound single: λλ, σσ, ...
        CONS[a.b].forEach(function (c) { u.push({ c: c }); });
      }
    }
    // One-syllable words: Bible texts put a grave accent on little words (τὸ, καὶ); it is not stressed.
    // Also never mark stress on a one-syllable word in the English-letter guide.
    var vowels = u.filter(function (x) { return x.v; });
    if (vowels.length === 1) {
      var graveOnly = L.some(function (l) { return l.grave; }) && !L.some(function (l) { return l.acc && !l.grave; });
      vowels[0].s = graveOnly ? false : vowels[0].s;
      vowels[0].mono = true;
    }
    var stressed = u.some(function (x) { return x.v && x.s; });
    // γ before e / i sounds is a y sound.
    u.forEach(function (x, k) { var nx = u[k + 1]; if (x.c === 'gh' && nx && (nx.v === 'e' || nx.v === 'i')) x.c = 'y'; });
    // Unstressed i between a consonant and a vowel glides into y: καρδιά, γιατί, ποιος.
    for (var k = 1; k < u.length - 1; k++) {
      var p = u[k - 1], x = u[k], nx = u[k + 1];
      if (x.v === 'i' && !x.s && p.c && nx.v && (nx.s || !stressed || p.c === 'y')) {
        if (p.c === 'y') { u.splice(k, 1); k--; } else { u[k] = { c: 'y' }; }
      }
    }
    return u;
  }

  function latWord(word) {
    var u = units(word), out = '';
    u.forEach(function (x) {
      if (x.c) out += LAT_CONS[x.c] || x.c;
      else out += x.s && !x.mono ? LAT_STRESSED[x.v] : x.v;
    });
    if (word.charAt(0) !== word.charAt(0).toLowerCase()) out = out.charAt(0).toUpperCase() + out.slice(1);
    return out;
  }

  // Short words that are never stressed in speech (articles, pronouns, little particles).
  var CLITICS = ' ο η το τα οι τον την τη των του της τις τους μου σου του μας σας τους σε με να θα και κι δεν μη μην για ας τι τω εν στο στη στην στον στα στους στις απ που ή ';

  function teWord(word) {
    var u = units(word), out = '', cluster = [], prevVowel = null;
    var stressed = u.some(function (x) { return x.v && x.s; });
    var vowelCount = u.filter(function (x) { return x.v; }).length;
    if (!stressed && vowelCount === 1 && CLITICS.indexOf(' ' + word.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase() + ' ') === -1) {
      u.forEach(function (x) { if (x.v) x.s = true; });
    }
    function flush(final) {
      if (!cluster.length) return;
      out += cluster.join('్') + (final ? '్' : '');
      cluster = [];
    }
    u.forEach(function (x) {
      if (x.c === 'N') { flush(true); out += 'ం'; prevVowel = null; return; }
      if (x.c) { cluster.push(TE_CONS[x.c]); prevVowel = null; return; }
      var s = x.s ? 1 : 0;
      if (!cluster.length && prevVowel) {
        // Two vowels in a row: Telugu writes a gliding య or వ between them (θεός -> థెయోస్).
        var glide = (x.v === 'i' || x.v === 'e' || prevVowel === 'i' || prevVowel === 'e') ? 'య' : 'వ';
        out += glide + TE_SIGN[x.v][s];
      } else if (!cluster.length) {
        out += TE_VOWEL[x.v][s];
      } else {
        out += cluster.join('్') + TE_SIGN[x.v][s];
        cluster = [];
      }
      prevVowel = x.v;
    });
    flush(true);
    return out;
  }

  // Apply a word function to every Greek word in a text, keeping spaces and punctuation.
  function mapText(text, fn) {
    // Join elided words: σ' αγαπώ -> σαγαπώ, κι εγώ stays two words. The Greek ; is a question mark.
    var t = String(text).replace(/[;\u037e]/g, '?').replace(/([Ͱ-Ͽἀ-῿]+)['’᾽]\s*/g, '$1');
    return t.replace(/[Ͱ-Ͽἀ-῿̀-ͯ]+/g, function (w) { return fn(w); });
  }

  window.GreekSay = {
    latin: function (text) { return mapText(text, latWord); },
    telugu: function (text) { return mapText(text, teWord); }
  };
})();
