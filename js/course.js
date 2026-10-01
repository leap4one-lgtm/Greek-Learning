// The Mazí course: one lesson a day, taken together, in order.
// Phase 0 (lessons 1-12) teaches the alphabet the way Telugu teaches అక్షరమాల: the whole alphabet,
// then vowels, then consonants grouped by where they are made (like వర్గాలు), then syllables (గుణింతం),
// pairs, stress, and reading. Speaking starts at lesson 13.
//
// lessons[]: n, title, goal, items, grammar { title, body[], te, ex[] }, dialogue { title, tip, lines[[role, Greek, English]] }.
//   Items: letters have k: 'letter' with up (capital), el, say (sound), te (Telugu), en; words have el, en, tm (Telugu meaning), note.
// extra[n]: intro, reading { title, drill?, lines[[Greek, English]], gloss[[Greek, English]] }, tables[] or table,
//   drills[] (fill the gap: "___" is the gap, a = answer, o = options), spot, turn[] (talk prompts), bible, know, skip[] (exercise sets to leave out).
// Pronunciation guides are generated from the Greek by translit.js.
window.MAZI_COURSE = {
 "phases": [
  {
   "n": 0,
   "title": "Reading Greek",
   "span": "Lessons 1–12 · about 2 weeks",
   "goal": "Know every letter and read any Greek word aloud."
  },
  {
   "n": 1,
   "title": "Home Greek",
   "span": "Lessons 13–94 · about 3 months",
   "goal": "Everyday talk at home: greetings, meals, feelings, prayer, time."
  },
  {
   "n": 2,
   "title": "Your day",
   "span": "Lessons 95–184 · about 3 months",
   "goal": "Talk about yesterday, today and tomorrow."
  },
  {
   "n": 3,
   "title": "Bible bridge",
   "span": "Lessons 185–274 · about 3 months",
   "goal": "Read simple New Testament verses in Koine Greek."
  },
  {
   "n": 4,
   "title": "Reading together",
   "span": "Lesson 275 onward · year 2",
   "goal": "Read the Gospel of John together."
  }
 ],
 "units": [
  {
   "phase": 0,
   "title": "The alphabet",
   "from": 1,
   "to": 3
  },
  {
   "phase": 0,
   "title": "Sounds, from the vowels to the throat",
   "from": 4,
   "to": 7
  },
  {
   "phase": 0,
   "title": "Reading",
   "from": 8,
   "to": 12
  },
  {
   "phase": 1,
   "title": "You and me",
   "from": 13,
   "to": 24
  },
  {
   "phase": 1,
   "title": "Home and food",
   "from": 25,
   "to": 34
  },
  {
   "phase": 1,
   "title": "Our daily routine",
   "from": 35,
   "to": 44,
   "soon": true
  },
  {
   "phase": 1,
   "title": "Days, time and plans",
   "from": 45,
   "to": 54,
   "soon": true
  },
  {
   "phase": 1,
   "title": "Faith at home",
   "from": 55,
   "to": 64,
   "soon": true
  },
  {
   "phase": 1,
   "title": "Family and people",
   "from": 65,
   "to": 74,
   "soon": true
  },
  {
   "phase": 1,
   "title": "Out and about",
   "from": 75,
   "to": 84,
   "soon": true
  },
  {
   "phase": 1,
   "title": "Checkpoint: three months",
   "from": 85,
   "to": 94,
   "soon": true
  },
  {
   "phase": 2,
   "title": "Past, future and stories",
   "from": 95,
   "to": 184,
   "soon": true
  },
  {
   "phase": 3,
   "title": "Koine forms and first verses",
   "from": 185,
   "to": 274,
   "soon": true
  },
  {
   "phase": 4,
   "title": "The Gospel of John",
   "from": 275,
   "to": 364,
   "soon": true
  }
 ],
 "lessons": [
  {
   "n": 1,
   "title": "The Greek alphabet",
   "goal": "See all 24 letters, their names and their order.",
   "items": [
    {
     "k": "letter",
     "up": "Α",
     "el": "α",
     "say": "a",
     "te": "అ",
     "en": "alpha"
    },
    {
     "k": "letter",
     "up": "Β",
     "el": "β",
     "say": "v",
     "te": "వ",
     "en": "vita (beta)"
    },
    {
     "k": "letter",
     "up": "Γ",
     "el": "γ",
     "say": "gh / y",
     "te": "గ / య",
     "en": "gamma"
    },
    {
     "k": "letter",
     "up": "Δ",
     "el": "δ",
     "say": "dh",
     "te": "ద",
     "en": "delta"
    },
    {
     "k": "letter",
     "up": "Ε",
     "el": "ε",
     "say": "e",
     "te": "ఎ",
     "en": "epsilon"
    },
    {
     "k": "letter",
     "up": "Ζ",
     "el": "ζ",
     "say": "z",
     "te": "జ",
     "en": "zita (zeta)"
    },
    {
     "k": "letter",
     "up": "Η",
     "el": "η",
     "say": "i",
     "te": "ఇ",
     "en": "ita (eta)"
    },
    {
     "k": "letter",
     "up": "Θ",
     "el": "θ",
     "say": "th",
     "te": "థ",
     "en": "thita (theta)"
    },
    {
     "k": "letter",
     "up": "Ι",
     "el": "ι",
     "say": "i",
     "te": "ఇ",
     "en": "yota (iota)"
    },
    {
     "k": "letter",
     "up": "Κ",
     "el": "κ",
     "say": "k",
     "te": "క",
     "en": "kappa"
    },
    {
     "k": "letter",
     "up": "Λ",
     "el": "λ",
     "say": "l",
     "te": "ల",
     "en": "lamda"
    },
    {
     "k": "letter",
     "up": "Μ",
     "el": "μ",
     "say": "m",
     "te": "మ",
     "en": "mi"
    },
    {
     "k": "letter",
     "up": "Ν",
     "el": "ν",
     "say": "n",
     "te": "న",
     "en": "ni"
    },
    {
     "k": "letter",
     "up": "Ξ",
     "el": "ξ",
     "say": "ks",
     "te": "క్స",
     "en": "ksi"
    },
    {
     "k": "letter",
     "up": "Ο",
     "el": "ο",
     "say": "o",
     "te": "ఒ",
     "en": "omikron"
    },
    {
     "k": "letter",
     "up": "Π",
     "el": "π",
     "say": "p",
     "te": "ప",
     "en": "pi"
    },
    {
     "k": "letter",
     "up": "Ρ",
     "el": "ρ",
     "say": "r",
     "te": "ర",
     "en": "ro"
    },
    {
     "k": "letter",
     "up": "Σ",
     "el": "σ / ς",
     "say": "s",
     "te": "స",
     "en": "sigma"
    },
    {
     "k": "letter",
     "up": "Τ",
     "el": "τ",
     "say": "t",
     "te": "త",
     "en": "taf (tau)"
    },
    {
     "k": "letter",
     "up": "Υ",
     "el": "υ",
     "say": "i",
     "te": "ఇ",
     "en": "ipsilon"
    },
    {
     "k": "letter",
     "up": "Φ",
     "el": "φ",
     "say": "f",
     "te": "ఫ",
     "en": "fi"
    },
    {
     "k": "letter",
     "up": "Χ",
     "el": "χ",
     "say": "kh",
     "te": "ఖ",
     "en": "khi"
    },
    {
     "k": "letter",
     "up": "Ψ",
     "el": "ψ",
     "say": "ps",
     "te": "ప్స",
     "en": "psi"
    },
    {
     "k": "letter",
     "up": "Ω",
     "el": "ω",
     "say": "o",
     "te": "ఒ",
     "en": "omega"
    }
   ],
   "grammar": {
    "title": "How Greek writing works",
    "body": [
     "Greek is written from left to right with an alphabet of 24 letters. Each letter has a capital form and a small form, just as in English.",
     "Unlike Telugu, Greek is a true alphabet. Vowels are full letters of their own, not signs attached to a consonant, and there are no conjunct letters (ఒత్తులు): consonants simply stand side by side.",
     "Every letter has a name. The names matter: you will hear them in class and church, and they explain words you already use, like \"alphabet\" (alpha + beta) and \"delta\".",
     "Do not try to memorise all 24 today. Read the table slowly, listen to each name, and notice the shapes you already know from English, mathematics and science. The next lessons take the letters a few at a time."
    ],
    "te": "Telugu has over 50 letters, plus vowel signs and conjuncts. Greek has 24 letters, no vowel signs and no conjuncts. It is a much smaller system.",
    "ex": []
   },
   "dialogue": {
    "title": "The alphabet in turns",
    "tip": "",
    "lines": [
     [
      "A",
      "Α Β Γ Δ Ε Ζ",
      "alpha, vita, gamma, delta, epsilon, zita"
     ],
     [
      "B",
      "Η Θ Ι Κ Λ Μ",
      "ita, thita, yota, kappa, lamda, mi"
     ],
     [
      "A",
      "Ν Ξ Ο Π Ρ Σ",
      "ni, ksi, omikron, pi, ro, sigma"
     ],
     [
      "B",
      "Τ Υ Φ Χ Ψ Ω",
      "taf, ipsilon, fi, khi, psi, omega"
     ]
    ]
   }
  },
  {
   "n": 2,
   "title": "Recognising the letters",
   "goal": "Sort the 24 capitals into three families and tell every letter apart.",
   "items": [
    {
     "k": "letter",
     "up": "Η",
     "el": "η",
     "say": "i",
     "te": "ఇ",
     "en": "ita: looks like H, sounds i"
    },
    {
     "k": "letter",
     "up": "Ρ",
     "el": "ρ",
     "say": "r",
     "te": "ర",
     "en": "ro: looks like P, sounds r"
    },
    {
     "k": "letter",
     "up": "Χ",
     "el": "χ",
     "say": "kh",
     "te": "ఖ",
     "en": "khi: looks like X, sounds kh"
    },
    {
     "k": "letter",
     "up": "Β",
     "el": "β",
     "say": "v",
     "te": "వ",
     "en": "vita: looks like B, sounds v"
    },
    {
     "k": "letter",
     "up": "Υ",
     "el": "υ",
     "say": "i",
     "te": "ఇ",
     "en": "ipsilon: looks like Y, sounds i"
    },
    {
     "k": "letter",
     "up": "Ν",
     "el": "ν",
     "say": "n",
     "te": "న",
     "en": "ni: looks like N, small ν looks like v"
    }
   ],
   "grammar": {
    "title": "Three families of letters",
    "body": [
     "You already read English, so the quickest way to learn Greek capitals is to compare them with English letters. They fall into three families.",
     "Friends look like English letters and sound the same: Α Ε Ζ Ι Κ Μ Ο Τ. You can read these already.",
     "False friends look like English letters but sound different: Β is v, Η is i, Ν is n, Ρ is r, Υ is i, Χ is kh. These six cause most beginners' mistakes, so they are this lesson's vocabulary.",
     "New shapes are letters English doesn't have: Γ Δ Θ Λ Ξ Π Σ Φ Ψ Ω. Several are familiar from mathematics and science (Δ, Π, Σ, Ω), which helps you remember them."
    ],
    "te": "You already read two scripts, Telugu and English, so your eyes are used to switching between letter systems. Greek is a third, and the smallest.",
    "ex": []
   },
   "dialogue": {
    "title": "The three families, in turns",
    "tip": "",
    "lines": [
     [
      "A",
      "Α Ε Ζ Ι Κ Μ Ο Τ",
      "the friends"
     ],
     [
      "B",
      "Β Η Ν Ρ Υ Χ",
      "the false friends"
     ],
     [
      "A",
      "Γ Δ Θ Λ Ξ Π",
      "new shapes"
     ],
     [
      "B",
      "Σ Φ Ψ Ω",
      "new shapes"
     ]
    ]
   }
  },
  {
   "n": 3,
   "title": "Capital and small letters",
   "goal": "Read the small letters, especially those that look like other letters.",
   "items": [
    {
     "k": "letter",
     "up": "Ν",
     "el": "ν",
     "say": "n",
     "te": "న",
     "en": "looks like v"
    },
    {
     "k": "letter",
     "up": "Η",
     "el": "η",
     "say": "i",
     "te": "ఇ",
     "en": "looks like n"
    },
    {
     "k": "letter",
     "up": "Ρ",
     "el": "ρ",
     "say": "r",
     "te": "ర",
     "en": "looks like p"
    },
    {
     "k": "letter",
     "up": "Ω",
     "el": "ω",
     "say": "o",
     "te": "ఒ",
     "en": "looks like w"
    },
    {
     "k": "letter",
     "up": "Υ",
     "el": "υ",
     "say": "i",
     "te": "ఇ",
     "en": "looks like u"
    },
    {
     "k": "letter",
     "up": "Γ",
     "el": "γ",
     "say": "gh / y",
     "te": "గ / య",
     "en": "looks like y"
    },
    {
     "k": "letter",
     "up": "Χ",
     "el": "χ",
     "say": "kh",
     "te": "ఖ",
     "en": "looks like x"
    },
    {
     "k": "letter",
     "up": "Σ",
     "el": "σ / ς",
     "say": "s",
     "te": "స",
     "en": "two small forms"
    }
   ],
   "grammar": {
    "title": "Small letters that look like something else",
    "body": [
     "Most Greek text is printed in small letters, so this is the form you will read most. Many small letters are simply smaller capitals: α Α, ε Ε, κ Κ, ο Ο, τ Τ.",
     "Seven small letters look like different English letters, and you must read them by their Greek sound: ν is n (not v), η is i (not n), ρ is r (not p), ω is o (not w), υ is i (not u), γ is gh or y (not y), χ is kh (not x).",
     "Sigma has two small forms: σ at the start or in the middle of a word, and ς at the very end. Both say s, as in σοφός (\"wise\").",
     "Small letters often have tails above or below the line (β ζ η μ ξ ρ φ χ ψ). Noticing the tail helps you tell ρ from ο, and η from n."
    ],
    "te": "Telugu has one form for each letter; Greek, like English, has two. If you read English capitals and small letters, you already know how this works.",
    "ex": [
     {
      "el": "σοφός",
      "en": "wise: σ at the start, ς at the end"
     }
    ]
   },
   "dialogue": {
    "title": "The tricky small letters, in turns",
    "tip": "",
    "lines": [
     [
      "A",
      "ν η ρ ω",
      "n, i, r, o: not v, n, p, w"
     ],
     [
      "B",
      "υ γ χ ς",
      "i, gh, kh, s"
     ]
    ]
   }
  },
  {
   "n": 4,
   "title": "The vowels",
   "goal": "Read all seven vowel letters, and understand why there are only five sounds.",
   "items": [
    {
     "k": "letter",
     "up": "Α",
     "el": "α",
     "say": "a",
     "te": "అ",
     "en": "alpha: a as in \"father\""
    },
    {
     "k": "letter",
     "up": "Ε",
     "el": "ε",
     "say": "e",
     "te": "ఎ",
     "en": "epsilon: e as in \"pen\""
    },
    {
     "k": "letter",
     "up": "Ι",
     "el": "ι",
     "say": "i",
     "te": "ఇ",
     "en": "yota: i as in \"machine\", short"
    },
    {
     "k": "letter",
     "up": "Η",
     "el": "η",
     "say": "i",
     "te": "ఇ",
     "en": "ita: the same i sound"
    },
    {
     "k": "letter",
     "up": "Υ",
     "el": "υ",
     "say": "i",
     "te": "ఇ",
     "en": "ipsilon: the same i sound"
    },
    {
     "k": "letter",
     "up": "Ο",
     "el": "ο",
     "say": "o",
     "te": "ఒ",
     "en": "omikron: o, short and round"
    },
    {
     "k": "letter",
     "up": "Ω",
     "el": "ω",
     "say": "o",
     "te": "ఒ",
     "en": "omega: the same o sound"
    }
   ],
   "grammar": {
    "title": "Seven letters, five sounds",
    "body": [
     "Vowels carry every syllable, so the sounds start here. Modern Greek has five vowel sounds: a, e, i, o and u. Four of them are written with the letters in this lesson. The u sound is written with two letters, ου, which you will meet in lesson 9.",
     "Why seven letters for four sounds? In ancient Greek, ο was a short o and ω a long o; ε was a short e and η a long e; υ was a sound like the French u. Over the centuries these differences disappeared. Today ο and ω sound the same, and η and υ both became i.",
     "So each vowel letter has only one sound, which makes reading aloud easy. Spelling is harder: you have to learn which i a word uses, just as English speakers learn \"see\" and \"sea\".",
     "Say Greek vowels short and pure, like Telugu vowels. Never add English glides like the \"ay\" in \"day\" or the \"ow\" in \"go\"."
    ],
    "te": "Telugu has short and long vowels (అ / ఆ, ఇ / ఈ). Modern Greek does not: every vowel has the same length. The only thing that makes a vowel stand out is stress, which you meet in lesson 11.",
    "ex": [
     {
      "el": "αγάπη",
      "en": "love"
     },
     {
      "el": "ημέρα",
      "en": "day"
     },
     {
      "el": "ώρα",
      "en": "hour"
     }
    ]
   },
   "dialogue": {
    "title": "Vowels in turns",
    "tip": "",
    "lines": [
     [
      "A",
      "α ε ι ο",
      "a, e, i, o"
     ],
     [
      "B",
      "η υ ω",
      "i, i, o"
     ],
     [
      "A",
      "ι η υ",
      "all three are i"
     ],
     [
      "B",
      "ο ω",
      "both are o"
     ]
    ]
   }
  },
  {
   "n": 5,
   "title": "Consonants of the lips",
   "goal": "Read π μ β φ, the sounds made with the lips.",
   "items": [
    {
     "k": "letter",
     "up": "Π",
     "el": "π",
     "say": "p",
     "te": "ప",
     "en": "pi: p, without a puff of air"
    },
    {
     "k": "letter",
     "up": "Μ",
     "el": "μ",
     "say": "m",
     "te": "మ",
     "en": "mi: m"
    },
    {
     "k": "letter",
     "up": "Β",
     "el": "β",
     "say": "v",
     "te": "వ",
     "en": "vita: v, never b"
    },
    {
     "k": "letter",
     "up": "Φ",
     "el": "φ",
     "say": "f",
     "te": "ఫ",
     "en": "fi: a real f"
    },
    {
     "el": "μαμά",
     "en": "mum",
     "tm": "అమ్మ"
    },
    {
     "el": "πάμε",
     "en": "let's go",
     "tm": "వెళ్దాం"
    },
    {
     "el": "βήμα",
     "en": "step",
     "tm": "అడుగు"
    }
   ],
   "grammar": {
    "title": "Four sounds at the lips",
    "body": [
     "Telugu arranges its consonants by where they are made in the mouth: the క-వర్గం in the throat, the త-వర్గం at the teeth, the ప-వర్గం at the lips. Greek consonants make the most sense learned the same way, so we start with the lips.",
     "Say p, m, v and f and watch your lips. For p and m they close; for v and f your top teeth touch your lower lip. Greek π, μ, β and φ are exactly these four sounds.",
     "π is a plain p, like Telugu ప. English p has a small puff of air; Greek p does not.",
     "β is always v, never b. Greek has no single letter for b; lesson 10 shows how it writes one.",
     "φ is a real f, teeth on lip, with air hissing through. Telugu ఫ is a p with a puff of air, which is how φ sounded 2,000 years ago, but not today."
    ],
    "te": "β and φ are a pair: the same mouth position, with voice (β) and without voice (φ). Telugu has the same idea in గ / క and ద / త.",
    "ex": [
     {
      "el": "μαμά",
      "en": "mum"
     },
     {
      "el": "πάμε",
      "en": "let's go"
     }
    ]
   },
   "dialogue": {
    "title": "Lip sounds in turns",
    "tip": "",
    "lines": [
     [
      "A",
      "πα πε πι πο",
      "pa, pe, pi, po"
     ],
     [
      "B",
      "βα βε βι βο",
      "va, ve, vi, vo"
     ],
     [
      "A",
      "φα φε φι φο",
      "fa, fe, fi, fo"
     ],
     [
      "B",
      "μαμά · πάμε",
      "mum · let's go"
     ]
    ]
   }
  },
  {
   "n": 6,
   "title": "Consonants of the teeth",
   "goal": "Read τ δ θ ν σ ζ, the sounds made at the teeth.",
   "items": [
    {
     "k": "letter",
     "up": "Τ",
     "el": "τ",
     "say": "t",
     "te": "త",
     "en": "taf: soft t, like త (not ట)"
    },
    {
     "k": "letter",
     "up": "Δ",
     "el": "δ",
     "say": "dh",
     "te": "ద",
     "en": "delta: th as in \"this\""
    },
    {
     "k": "letter",
     "up": "Θ",
     "el": "θ",
     "say": "th",
     "te": "థ",
     "en": "thita: th as in \"think\""
    },
    {
     "k": "letter",
     "up": "Ν",
     "el": "ν",
     "say": "n",
     "te": "న",
     "en": "ni: n"
    },
    {
     "k": "letter",
     "up": "Σ",
     "el": "σ / ς",
     "say": "s",
     "te": "స",
     "en": "sigma: s"
    },
    {
     "k": "letter",
     "up": "Ζ",
     "el": "ζ",
     "say": "z",
     "te": "జ",
     "en": "zita: z as in \"zoo\""
    },
    {
     "el": "Θεός",
     "en": "God",
     "tm": "దేవుడు"
    },
    {
     "el": "ζωή",
     "en": "life",
     "tm": "జీవితం"
    },
    {
     "el": "όνομα",
     "en": "name",
     "tm": "పేరు"
    }
   ],
   "grammar": {
    "title": "Six sounds at the teeth",
    "body": [
     "Next, the sounds made with the tongue at the teeth, Telugu's త-వర్గం.",
     "Touch the back of your top teeth with your tongue and say t and n: that is τ and ν. Greek τ is the soft Telugu త, never the hard ట.",
     "For δ and θ, put the tip of your tongue between your teeth. δ is voiced, like the \"th\" in \"this\". θ is voiceless, like the \"th\" in \"think\". They are a voiced/voiceless pair, like β and φ.",
     "σ is s, and ζ is z, the buzzing version of s. Telugu జ is j; Greek ζ is the z of \"zoo\", the Hindi ज़.",
     "ν is n, even though the small letter looks like v. You have been warned twice now; it is still the most common reading mistake."
    ],
    "te": "Telugu has no letters for δ, θ and ζ, so Mazí writes them as ద, థ and జ. Read those three with the Greek sound: tongue between the teeth for δ and θ, and a buzz for ζ.",
    "ex": [
     {
      "el": "Θεός",
      "en": "God"
     },
     {
      "el": "ζωή",
      "en": "life"
     },
     {
      "el": "όνομα",
      "en": "name"
     }
    ]
   },
   "dialogue": {
    "title": "Teeth sounds in turns",
    "tip": "",
    "lines": [
     [
      "A",
      "τα τε τι το",
      "ta, te, ti, to"
     ],
     [
      "B",
      "δα δε δι δο",
      "dha, dhe, dhi, dho"
     ],
     [
      "A",
      "θα θε θι θο",
      "tha, the, thi, tho"
     ],
     [
      "B",
      "Θεός · ζωή · όνομα",
      "God · life · name"
     ]
    ]
   }
  },
  {
   "n": 7,
   "title": "Consonants of the throat, and the last four",
   "goal": "Read κ γ χ, then λ ρ ξ ψ. After today you know every letter.",
   "items": [
    {
     "k": "letter",
     "up": "Κ",
     "el": "κ",
     "say": "k",
     "te": "క",
     "en": "kappa: k, no puff of air"
    },
    {
     "k": "letter",
     "up": "Γ",
     "el": "γ",
     "say": "gh / y",
     "te": "గ / య",
     "en": "gamma: soft gh; y before e and i"
    },
    {
     "k": "letter",
     "up": "Χ",
     "el": "χ",
     "say": "kh",
     "te": "ఖ",
     "en": "khi: kh, like \"loch\""
    },
    {
     "k": "letter",
     "up": "Λ",
     "el": "λ",
     "say": "l",
     "te": "ల",
     "en": "lamda: l"
    },
    {
     "k": "letter",
     "up": "Ρ",
     "el": "ρ",
     "say": "r",
     "te": "ర",
     "en": "ro: tapped r, like ర"
    },
    {
     "k": "letter",
     "up": "Ξ",
     "el": "ξ",
     "say": "ks",
     "te": "క్స",
     "en": "ksi: ks in one letter"
    },
    {
     "k": "letter",
     "up": "Ψ",
     "el": "ψ",
     "say": "ps",
     "te": "ప్స",
     "en": "psi: ps in one letter"
    },
    {
     "el": "γάλα",
     "en": "milk",
     "tm": "పాలు"
    },
    {
     "el": "χαρά",
     "en": "joy",
     "tm": "ఆనందం"
    },
    {
     "el": "ψωμί",
     "en": "bread",
     "tm": "రొట్టె"
    },
    {
     "el": "λόγος",
     "en": "word",
     "tm": "మాట, వాక్యం"
    }
   ],
   "grammar": {
    "title": "The back of the mouth, and four more",
    "body": [
     "The last group is made at the back of the mouth, Telugu's క-వర్గం. κ is k, like క without a puff of air.",
     "γ and χ are made in the same place, but the tongue doesn't close completely, so air rubs through. γ is a soft, voiced gh; χ is a voiceless kh, like the \"ch\" in Scottish \"loch\". Another voiced/voiceless pair.",
     "Before the sounds e and i, both move forward in the mouth. γ becomes y: γέλιο (\"laughter\") is YÉ-li-o. χ becomes a strong h.",
     "Four letters remain. λ is l and ρ is a tapped r, exactly Telugu ల and ర. ξ and ψ are shortcuts for two sounds: ξ is ks and ψ is ps, even at the start of a word (ψωμί is pso-MÍ).",
     "With this lesson you have met every letter of the alphabet."
    ],
    "te": "Telugu has గ and ఘ, క and ఖ. Greek γ and χ are softer than all of them, because the tongue never closes. Start from గ and ఖ and relax the tongue.",
    "ex": [
     {
      "el": "γάλα",
      "en": "milk"
     },
     {
      "el": "χαρά",
      "en": "joy"
     },
     {
      "el": "ψωμί",
      "en": "bread"
     }
    ]
   },
   "dialogue": {
    "title": "Throat sounds in turns",
    "tip": "",
    "lines": [
     [
      "A",
      "κα κε κι κο",
      "ka, ke, ki, ko"
     ],
     [
      "B",
      "γα γε γι γο",
      "gha, ye, yi, gho"
     ],
     [
      "A",
      "χα χε χι χο",
      "kha, khe, khi, kho"
     ],
     [
      "B",
      "λα ρα ξα ψα",
      "la, ra, ksa, psa"
     ]
    ]
   }
  },
  {
   "n": 8,
   "title": "Joining letters into syllables",
   "goal": "Read any consonant with any vowel, and read whole words by syllable.",
   "items": [
    {
     "el": "καλό",
     "en": "good",
     "tm": "మంచిది"
    },
    {
     "el": "νερό",
     "en": "water",
     "tm": "నీళ్ళు"
    },
    {
     "el": "βιβλίο",
     "en": "book",
     "tm": "పుస్తకం"
    },
    {
     "el": "δρόμος",
     "en": "road",
     "tm": "దారి"
    },
    {
     "el": "θάλασσα",
     "en": "sea",
     "tm": "సముద్రం"
    },
    {
     "el": "τηλέφωνο",
     "en": "telephone",
     "tm": "ఫోను"
    }
   ],
   "grammar": {
    "title": "Greek has no గుణింతం",
    "body": [
     "Telugu children learn గుణింతాలు: every consonant with every vowel sign, each combination a new shape. Greek needs no such table of shapes, because letters simply sit side by side: κ + α = κα. Nothing changes shape and nothing is hidden.",
     "Still, reading the combinations aloud row by row, as Telugu children do, is the fastest way to become fluent. The table below is your Greek గుణింతం.",
     "Consonants can also stand together at the start of a syllable, like δρ in δρόμος or βλ in βιβλίο. Say them quickly one after the other, without a vowel in between. Telugu writes these as ఒత్తులు; Greek just writes the letters next to each other.",
     "Double letters sound single: θάλασσα (\"sea\") is THÁ-la-sa, not tha-las-sa.",
     "To read a long word, split it into syllables with one vowel sound each: τη-λέ-φω-νο."
    ],
    "te": "Where Telugu writes ద్ర as one conjunct shape, Greek writes δρ as two separate letters. The sound is the same; the writing is simpler.",
    "ex": [
     {
      "el": "δρόμος",
      "en": "road"
     },
     {
      "el": "θάλασσα",
      "en": "sea"
     }
    ]
   },
   "dialogue": {
    "title": "Syllables, then words",
    "tip": "",
    "lines": [
     [
      "A",
      "κα-λό",
      "ka-LÓ"
     ],
     [
      "B",
      "καλό",
      "good"
     ],
     [
      "A",
      "τη-λέ-φω-νο",
      "ti-LÉ-fo-no"
     ],
     [
      "B",
      "τηλέφωνο",
      "telephone"
     ]
    ]
   }
  },
  {
   "n": 9,
   "title": "Vowel pairs",
   "goal": "Read ου αι ει οι, and αυ ευ.",
   "items": [
    {
     "k": "letter",
     "up": "ΟΥ",
     "el": "ου",
     "say": "u",
     "te": "ఉ",
     "en": "u as in \"put\""
    },
    {
     "k": "letter",
     "up": "ΑΙ",
     "el": "αι",
     "say": "e",
     "te": "ఎ",
     "en": "e"
    },
    {
     "k": "letter",
     "up": "ΕΙ",
     "el": "ει",
     "say": "i",
     "te": "ఇ",
     "en": "i"
    },
    {
     "k": "letter",
     "up": "ΟΙ",
     "el": "οι",
     "say": "i",
     "te": "ఇ",
     "en": "i"
    },
    {
     "k": "letter",
     "up": "ΑΥ",
     "el": "αυ",
     "say": "av / af",
     "te": "అవ్ / అఫ్",
     "en": "av, or af before a hard sound"
    },
    {
     "k": "letter",
     "up": "ΕΥ",
     "el": "ευ",
     "say": "ev / ef",
     "te": "ఎవ్ / ఎఫ్",
     "en": "ev, or ef before a hard sound"
    },
    {
     "el": "ουρανός",
     "en": "sky, heaven",
     "tm": "ఆకాశం, పరలోకం"
    },
    {
     "el": "και",
     "en": "and",
     "tm": "మరియు"
    },
    {
     "el": "αύριο",
     "en": "tomorrow",
     "tm": "రేపు"
    },
    {
     "el": "αυτό",
     "en": "this, it",
     "tm": "ఇది"
    }
   ],
   "grammar": {
    "title": "Two letters, one sound",
    "body": [
     "Some vowel sounds are written with two letters. The most important is ου, the only way Greek writes the u sound: ουρανός (\"heaven\") is u-ra-NÓS.",
     "αι is e, and ει and οι are both i. These are more spellings for sounds you already know, left over from ancient Greek just like η and υ.",
     "αυ and ευ work differently: the υ turns into a consonant. Before a vowel or a voiced consonant (β γ δ ζ λ μ ν ρ) it is v: αύριο is ÁV-ri-o. Before a voiceless consonant (κ π τ θ φ χ σ ξ ψ) it is f: αυτό is af-TÓ.",
     "If the accent sits on the first letter, the two letters are said separately: τσάι (\"tea\") is TSÁ-i. Lesson 11 shows one more mark that does the same."
    ],
    "te": "The v / f rule is the voicing idea you know from Telugu గ / క and ద / త: the υ takes on the voice of the sound that follows it.",
    "ex": [
     {
      "el": "ουρανός",
      "en": "heaven"
     },
     {
      "el": "αύριο",
      "en": "tomorrow"
     },
     {
      "el": "αυτό",
      "en": "this"
     }
    ]
   },
   "dialogue": {
    "title": "Pairs in turns",
    "tip": "",
    "lines": [
     [
      "A",
      "ου · αι · ει · οι",
      "u · e · i · i"
     ],
     [
      "B",
      "ουρανός · και",
      "heaven · and"
     ],
     [
      "A",
      "αύριο",
      "ÁV-ri-o"
     ],
     [
      "B",
      "αυτό",
      "af-TÓ"
     ]
    ]
   }
  },
  {
   "n": 10,
   "title": "Consonant pairs",
   "goal": "Read μπ ντ γκ γγ τσ τζ. After today you can read every Greek spelling.",
   "items": [
    {
     "k": "letter",
     "up": "ΜΠ",
     "el": "μπ",
     "say": "b",
     "te": "బ",
     "en": "b"
    },
    {
     "k": "letter",
     "up": "ΝΤ",
     "el": "ντ",
     "say": "d",
     "te": "డ",
     "en": "d"
    },
    {
     "k": "letter",
     "up": "ΓΚ",
     "el": "γκ",
     "say": "g",
     "te": "గ",
     "en": "g as in \"go\""
    },
    {
     "k": "letter",
     "up": "ΓΓ",
     "el": "γγ",
     "say": "ng",
     "te": "ంగ",
     "en": "ng as in \"finger\""
    },
    {
     "k": "letter",
     "up": "ΤΣ",
     "el": "τσ",
     "say": "ts",
     "te": "త్స",
     "en": "ts"
    },
    {
     "k": "letter",
     "up": "ΤΖ",
     "el": "τζ",
     "say": "dz",
     "te": "ద్జ",
     "en": "dz"
    },
    {
     "el": "μπαμπάς",
     "en": "dad",
     "tm": "నాన్న"
    },
    {
     "el": "τσάι",
     "en": "tea",
     "tm": "టీ"
    },
    {
     "el": "άγγελος",
     "en": "angel",
     "tm": "దేవదూత"
    }
   ],
   "grammar": {
    "title": "Pairs for b, d and g",
    "body": [
     "Ancient Greek had b, d and g sounds, written β, δ and γ. Over the centuries these softened into v, dh and gh, the sounds you learned in lessons 5 to 7. Modern Greek still needed b, d and g, so it began writing them with pairs.",
     "μπ is b, ντ is d, and γκ is g: μπαμπάς (\"dad\") is ba-BÁS.",
     "In the middle of a word you may hear a light n or m before the sound: ντομάτα (\"tomato\") can be do-MÁ-ta or ndo-MÁ-ta. Both are correct.",
     "γγ is ng as in \"finger\": άγγελος (\"angel\") is ÁN-ge-los. This is where the English words \"angel\" and \"evangelist\" come from.",
     "τσ and τζ are simply ts and dz: τσάι (\"tea\")."
    ],
    "te": "Telugu has బ, డ and గ as single letters. Greek uses two letters for them because its own β, δ and γ changed their sounds long ago.",
    "ex": [
     {
      "el": "μπαμπάς",
      "en": "dad"
     },
     {
      "el": "άγγελος",
      "en": "angel"
     }
    ]
   },
   "dialogue": {
    "title": "Pairs in turns",
    "tip": "",
    "lines": [
     [
      "A",
      "μπα · ντα · γκα",
      "ba · da · ga"
     ],
     [
      "B",
      "τσα · τζα",
      "tsa · dza"
     ],
     [
      "A",
      "μπαμπάς · τσάι",
      "dad · tea"
     ],
     [
      "B",
      "άγγελος",
      "angel"
     ]
    ]
   }
  },
  {
   "n": 11,
   "title": "Stress, accent and punctuation",
   "goal": "Stress words correctly, and read Greek punctuation.",
   "items": [
    {
     "el": "πότε",
     "en": "when",
     "tm": "ఎప్పుడు"
    },
    {
     "el": "ποτέ",
     "en": "never",
     "tm": "ఎన్నడూ"
    },
    {
     "el": "γέρος",
     "en": "old man",
     "tm": "ముసలివాడు"
    },
    {
     "el": "γερός",
     "en": "strong",
     "tm": "బలమైన"
    },
    {
     "el": "πού",
     "en": "where?",
     "tm": "ఎక్కడ?"
    },
    {
     "el": "που",
     "en": "that, who (joining word)",
     "tm": "అది, ఎవరైతే"
    }
   ],
   "grammar": {
    "title": "The accent mark",
    "body": [
     "You can now pronounce every letter. The last piece is rhythm. Every Greek word of two or more syllables has one stressed syllable, and the accent mark (΄) sits on its vowel: όνομα is Ó-no-ma. Say that syllable a little louder and longer.",
     "The stress can only fall on one of the last three syllables, never earlier. One-syllable words usually have no accent: και, το, να.",
     "Stress changes meaning. πότε (PÓ-te) is \"when\", but ποτέ (po-TÉ) is \"never\". γέρος is \"old man\", but γερός is \"strong\".",
     "Two dots on ι or υ (ϊ, ϋ) mean \"say this letter separately\". In κοροϊδεύω (\"I tease\") the οϊ is o-i, not the i of οι.",
     "Greek punctuation has two surprises: the question mark looks like an English semicolon (;), and the Greek semicolon is a raised dot (·). Commas and full stops are the same as English.",
     "Bible texts carry extra marks from ancient Greek: breathings (ἐ, ἁ) and other accents (ὰ, ῆ). They are not pronounced today. Read ἀρχῇ exactly like αρχή."
    ],
    "te": "Many Telugu speakers stress the first syllable of every word. In Greek, always look for the accent: it may be on the last syllable (καλά), the second last (ημέρα) or the third last (όνομα).",
    "ex": [
     {
      "el": "Πότε;",
      "en": "When?"
     },
     {
      "el": "Ποτέ!",
      "en": "Never!"
     }
    ]
   },
   "dialogue": {
    "title": "When? Never!",
    "tip": "",
    "lines": [
     [
      "A",
      "Πότε;",
      "When?"
     ],
     [
      "B",
      "Ποτέ!",
      "Never!"
     ],
     [
      "A",
      "Πότε;",
      "When?"
     ],
     [
      "B",
      "Αύριο!",
      "Tomorrow!"
     ]
    ]
   }
  },
  {
   "n": 12,
   "title": "Checkpoint: reading",
   "goal": "Read any Greek word aloud, from street signs to the Bible.",
   "items": [
    {
     "el": "μουσική",
     "en": "music",
     "tm": "సంగీతం"
    },
    {
     "el": "θέατρο",
     "en": "theatre",
     "tm": "నాటకశాల"
    },
    {
     "el": "πρόβλημα",
     "en": "problem",
     "tm": "సమస్య"
    },
    {
     "el": "Ελλάδα",
     "en": "Greece",
     "tm": "గ్రీసు"
    },
    {
     "el": "Αθήνα",
     "en": "Athens",
     "tm": "ఏథెన్సు"
    },
    {
     "el": "Ιησούς",
     "en": "Jesus",
     "tm": "యేసు"
    },
    {
     "el": "Χριστός",
     "en": "Christ",
     "tm": "క్రీస్తు"
    },
    {
     "el": "Βίβλος",
     "en": "Bible",
     "tm": "బైబిల్"
    }
   ],
   "grammar": {
    "title": "What you can do now",
    "body": [
     "You know the 24 letters, their names and both of their forms. You know the five vowel sounds and all the ways to spell them, the consonants grouped by where they are made, the consonant pairs, and the stress rules.",
     "That is everything you need to read Greek aloud. Today's reading proves it: familiar words, names, places, and the first verse of the Gospel of John. You will not understand every word yet, and that is fine. The aim is to read it correctly.",
     "From the next lesson the course turns to speaking: greetings, introducing yourselves, how you feel. You will keep reading every day, so your reading will keep getting faster."
    ],
    "te": "In two weeks you have covered what Telugu children learn over months with అక్షరమాల and గుణింతాలు. Greek is simply a smaller system.",
    "ex": [
     {
      "el": "Ιησούς Χριστός",
      "en": "Jesus Christ"
     }
    ]
   },
   "dialogue": {
    "title": "John 1:1 in turns",
    "tip": "",
    "lines": [
     [
      "A",
      "Ἐν ἀρχῇ ἦν ὁ λόγος,",
      "In the beginning was the Word,"
     ],
     [
      "B",
      "καὶ ὁ λόγος ἦν πρὸς τὸν θεόν,",
      "and the Word was with God,"
     ],
     [
      "A",
      "καὶ θεὸς ἦν ὁ λόγος.",
      "and the Word was God."
     ]
    ]
   }
  },
  {
   "n": 13,
   "title": "Greetings",
   "goal": "Greet each other at any time of day.",
   "items": [
    {
     "el": "Γεια σου",
     "en": "Hi / Bye (to one person you know)",
     "tm": "హాయ్ / వెళ్ళొస్తా"
    },
    {
     "el": "Γεια σας",
     "en": "Hello / Goodbye (polite, or to several people)",
     "tm": "నమస్కారం"
    },
    {
     "el": "Καλημέρα",
     "en": "Good morning",
     "tm": "శుభోదయం"
    },
    {
     "el": "Καλησπέρα",
     "en": "Good evening",
     "tm": "శుభ సాయంత్రం"
    },
    {
     "el": "Καληνύχτα",
     "en": "Good night",
     "tm": "శుభ రాత్రి"
    },
    {
     "el": "Τι κάνεις;",
     "en": "How are you?",
     "tm": "ఎలా ఉన్నావు?"
    },
    {
     "el": "Καλά, εσύ;",
     "en": "Good, and you?",
     "tm": "బాగున్నాను, నువ్వు?"
    }
   ],
   "grammar": {
    "title": "Greeting by time of day",
    "body": [
     "Now that you can read, the course turns to speaking, and every conversation starts with a greeting.",
     "Γεια σου is the everyday hello and goodbye to one person you know well. Γεια σας is the polite form, for elders and strangers, and also the form for a group.",
     "Greeks greet by the time of day. Καλημέρα (\"good day\") is used until about midday, Καλησπέρα (\"good evening\") from the afternoon on, and Καληνύχτα (\"good night\") when parting at night or going to bed. All three start with καλή, \"good\".",
     "Τι κάνεις; literally means \"What are you doing?\", but as a greeting it means \"How are you?\". The usual answer is Καλά (\"well\"), followed by εσύ; (\"and you?\")."
    ],
    "te": "Γεια σου is like speaking with నువ్వు, and Γεια σας like speaking with మీరు. Use Γεια σας with your elders, as you would in Telugu.",
    "ex": [
     {
      "el": "Καλημέρα! Τι κάνεις;",
      "en": "Good morning! How are you?"
     }
    ]
   },
   "dialogue": {
    "title": "Good morning",
    "tip": "Say Καλημέρα to each other tomorrow before anything else.",
    "lines": [
     [
      "A",
      "Καλημέρα!",
      "Good morning!"
     ],
     [
      "B",
      "Καλημέρα! Τι κάνεις;",
      "Good morning! How are you?"
     ],
     [
      "A",
      "Καλά, εσύ;",
      "Good, and you?"
     ],
     [
      "B",
      "Καλά!",
      "Good!"
     ]
    ]
   }
  },
  {
   "n": 14,
   "title": "Please, thank you, yes and no",
   "goal": "Use the small polite words, and say \"I love you\".",
   "items": [
    {
     "el": "Ευχαριστώ",
     "en": "Thank you",
     "tm": "ధన్యవాదాలు"
    },
    {
     "el": "Παρακαλώ",
     "en": "Please / You're welcome",
     "tm": "దయచేసి / పర్వాలేదు"
    },
    {
     "el": "Ναι / Όχι",
     "en": "Yes / No",
     "tm": "అవును / కాదు",
     "note": "Careful: ναι sounds like \"ne\" but means yes."
    },
    {
     "el": "Συγγνώμη",
     "en": "Sorry",
     "tm": "క్షమించు"
    },
    {
     "el": "Δεν πειράζει",
     "en": "No problem, it's fine",
     "tm": "పర్వాలేదు"
    },
    {
     "el": "Σ' αγαπώ",
     "en": "I love you",
     "tm": "నిన్ను ప్రేమిస్తున్నాను"
    },
    {
     "el": "Κι εγώ",
     "en": "Me too",
     "tm": "నేను కూడా"
    }
   ],
   "grammar": {
    "title": "Small words that do a lot",
    "body": [
     "ευχαριστώ (\"thank you\") comes from the same root as Eucharist, the \"thanksgiving\". The answer is παρακαλώ, which also means \"please\", and even \"hello?\" when you answer the phone.",
     "ναι means yes, although it sounds like \"ne\". όχι means no.",
     "Σ' αγαπώ is σε (\"you\") + αγαπώ (\"I love\"). When two vowels meet, Greek often drops one and writes an apostrophe, so σε αγαπώ becomes σ' αγαπώ. αγαπώ is the verb of αγάπη, the love of 1 Corinthians 13."
    ],
    "te": "Greek joins small words when vowels meet, much as Telugu joins words in సంధి.",
    "ex": [
     {
      "el": "Ευχαριστώ! — Παρακαλώ.",
      "en": "Thank you! — You're welcome."
     },
     {
      "el": "Σ' αγαπώ. — Κι εγώ σ' αγαπώ.",
      "en": "I love you. — I love you too."
     }
    ]
   },
   "dialogue": {
    "title": "At the table",
    "tip": "Use ευχαριστώ and παρακαλώ at every meal this week.",
    "lines": [
     [
      "A",
      "Νερό;",
      "Water?"
     ],
     [
      "B",
      "Ναι, ευχαριστώ.",
      "Yes, thank you."
     ],
     [
      "A",
      "Παρακαλώ.",
      "You're welcome."
     ],
     [
      "B",
      "Σ' αγαπώ.",
      "I love you."
     ],
     [
      "A",
      "Κι εγώ σ' αγαπώ.",
      "I love you too."
     ]
    ]
   }
  },
  {
   "n": 15,
   "title": "I am, you are",
   "goal": "Say who you are and ask a name.",
   "items": [
    {
     "el": "εγώ",
     "en": "I",
     "tm": "నేను"
    },
    {
     "el": "εσύ",
     "en": "you",
     "tm": "నువ్వు"
    },
    {
     "el": "είμαι",
     "en": "I am",
     "tm": "(నేను) ఉన్నాను"
    },
    {
     "el": "είσαι",
     "en": "you are",
     "tm": "(నువ్వు) ఉన్నావు"
    },
    {
     "el": "Με λένε…",
     "en": "My name is…",
     "tm": "నా పేరు…"
    },
    {
     "el": "Πώς σε λένε;",
     "en": "What's your name?",
     "tm": "నీ పేరేమిటి?"
    },
    {
     "el": "Χαίρω πολύ",
     "en": "Nice to meet you",
     "tm": "మిమ్మల్ని కలవడం సంతోషం"
    }
   ],
   "grammar": {
    "title": "Dropping \"I\" and \"you\"",
    "body": [
     "είμαι already means \"I am\" and είσαι already means \"you are\". Greek usually leaves out εγώ and εσύ.",
     "Use εγώ or εσύ only for emphasis: Εγώ είμαι καλά. Εσύ; (\"I am fine. And you?\")"
    ],
    "te": "Telugu does the same: ఉన్నాను already means \"I am\", so నేను is optional.",
    "ex": [
     {
      "el": "Είμαι καλά.",
      "en": "I am fine."
     },
     {
      "el": "Είσαι καλά;",
      "en": "Are you fine?"
     }
    ]
   },
   "dialogue": {
    "title": "Strangers again",
    "tip": "Pretend you are meeting for the first time. Use your real names.",
    "lines": [
     [
      "A",
      "Γεια σου! Με λένε ___. Πώς σε λένε;",
      "Hi! My name is ___. What's your name?"
     ],
     [
      "B",
      "Με λένε ___.",
      "My name is ___."
     ],
     [
      "A",
      "Χαίρω πολύ!",
      "Nice to meet you!"
     ],
     [
      "B",
      "Κι εγώ!",
      "Me too!"
     ]
    ]
   }
  },
  {
   "n": 16,
   "title": "He, she and \"the\"",
   "goal": "Introduce your husband or wife.",
   "items": [
    {
     "el": "αυτός",
     "en": "he",
     "tm": "అతను"
    },
    {
     "el": "αυτή",
     "en": "she",
     "tm": "ఆమె"
    },
    {
     "el": "είναι",
     "en": "he / she / it is",
     "tm": "ఉన్నాడు / ఉంది"
    },
    {
     "el": "ο άντρας μου",
     "en": "my husband",
     "tm": "నా భర్త",
     "note": "άντρας means both \"man\" and \"husband\"."
    },
    {
     "el": "η γυναίκα μου",
     "en": "my wife",
     "tm": "నా భార్య",
     "note": "γυναίκα means both \"woman\" and \"wife\"."
    },
    {
     "el": "ο / η",
     "en": "the (for him / for her)",
     "tm": "పురుష / స్త్రీ పదాల ముందు \"the\""
    }
   ],
   "grammar": {
    "title": "ο for him, η for her",
    "body": [
     "\"The\" changes with the word: ο for masculine words (ο άντρας), η for feminine words (η γυναίκα).",
     "μου after a word means \"my\": ο άντρας μου, η γυναίκα μου."
    ],
    "te": "Telugu shows he or she in the verb (వచ్చాడు / వచ్చింది). Greek shows it in \"the\": ο / η.",
    "ex": [
     {
      "el": "Αυτή είναι η γυναίκα μου.",
      "en": "This is my wife."
     },
     {
      "el": "Αυτός είναι ο άντρας μου.",
      "en": "This is my husband."
     }
    ]
   },
   "dialogue": {
    "title": "Meet my spouse",
    "tip": "Introduce each other to an imaginary guest (a chair works).",
    "lines": [
     [
      "A",
      "Αυτή είναι η γυναίκα μου.",
      "This is my wife."
     ],
     [
      "B",
      "Και αυτός είναι ο άντρας μου.",
      "And this is my husband."
     ],
     [
      "A",
      "Χαίρω πολύ!",
      "Nice to meet you!"
     ]
    ]
   }
  },
  {
   "n": 17,
   "title": "How do you feel?",
   "goal": "Say how you feel, as a man or as a woman.",
   "items": [
    {
     "el": "Πώς είσαι;",
     "en": "How are you (feeling)?",
     "tm": "ఎలా ఉన్నావు?"
    },
    {
     "el": "χαρούμενος / χαρούμενη",
     "en": "happy (him / her)",
     "tm": "సంతోషంగా"
    },
    {
     "el": "κουρασμένος / κουρασμένη",
     "en": "tired (him / her)",
     "tm": "అలసిపోయి"
    },
    {
     "el": "λυπημένος / λυπημένη",
     "en": "sad (him / her)",
     "tm": "బాధగా"
    },
    {
     "el": "ήρεμος / ήρεμη",
     "en": "calm (him / her)",
     "tm": "ప్రశాంతంగా"
    },
    {
     "el": "άρρωστος / άρρωστη",
     "en": "sick (him / her)",
     "tm": "జబ్బుగా"
    }
   ],
   "grammar": {
    "title": "-ος for him, -η for her",
    "body": [
     "Describing words change with who they describe. A man says Είμαι κουρασμένος. A woman says Είμαι κουρασμένη.",
     "In the lists, the first form is for him and the second for her."
    ],
    "te": "Just like Telugu అలసిపోయాడు / అలసిపోయింది, the ending shows man or woman.",
    "ex": [
     {
      "el": "Είμαι χαρούμενος.",
      "en": "I am happy (man)."
     },
     {
      "el": "Είμαι χαρούμενη.",
      "en": "I am happy (woman)."
     }
    ]
   },
   "dialogue": {
    "title": "Checking in",
    "tip": "Use your own form: -ος for him, -η for her.",
    "lines": [
     [
      "A",
      "Πώς είσαι;",
      "How are you?"
     ],
     [
      "B",
      "Είμαι κουρασμένος / κουρασμένη. Εσύ;",
      "I'm tired. You?"
     ],
     [
      "A",
      "Είμαι χαρούμενος / χαρούμενη!",
      "I'm happy!"
     ]
    ]
   }
  },
  {
   "n": 18,
   "title": "Question words",
   "goal": "Ask what, where, how, who and why.",
   "items": [
    {
     "el": "πού",
     "en": "where",
     "tm": "ఎక్కడ"
    },
    {
     "el": "πώς",
     "en": "how",
     "tm": "ఎలా"
    },
    {
     "el": "ποιος / ποια",
     "en": "who (him / her)",
     "tm": "ఎవరు"
    },
    {
     "el": "γιατί",
     "en": "why; because",
     "tm": "ఎందుకు; ఎందుకంటే"
    },
    {
     "el": "εδώ / εκεί",
     "en": "here / there",
     "tm": "ఇక్కడ / అక్కడ"
    },
    {
     "el": "Τι είναι αυτό;",
     "en": "What is this?",
     "tm": "ఇది ఏమిటి?"
    }
   ],
   "grammar": {
    "title": "Asking questions",
    "body": [
     "Question words go first: Πού είσαι; (Where are you?) Τι είναι αυτό; (What is this?)",
     "For yes/no questions, keep the normal sentence and raise your voice at the end: Είσαι καλά; (Are you OK?)",
     "Watch the accent: πού means \"where\", but που without an accent means \"that / who\" in the middle of a sentence."
    ],
    "te": "Telugu adds -ఆ to make a question (బాగున్నావా?). Greek just raises the voice.",
    "ex": [
     {
      "el": "Πού είσαι;",
      "en": "Where are you?"
     },
     {
      "el": "Γιατί;",
      "en": "Why?"
     }
    ]
   },
   "dialogue": {
    "title": "What is this?",
    "tip": "Point at things around you and ask Τι είναι αυτό; Answer with words you know.",
    "lines": [
     [
      "A",
      "Τι είναι αυτό;",
      "What is this?"
     ],
     [
      "B",
      "Είναι νερό.",
      "It's water."
     ],
     [
      "A",
      "Πού είναι το ψωμί;",
      "Where is the bread?"
     ],
     [
      "B",
      "Εκεί!",
      "There!"
     ]
    ]
   }
  },
  {
   "n": 19,
   "title": "Not, maybe, of course",
   "goal": "Say no politely and make negative sentences.",
   "items": [
    {
     "el": "δεν",
     "en": "not",
     "tm": "కాదు / లేదు"
    },
    {
     "el": "ξέρω",
     "en": "I know",
     "tm": "నాకు తెలుసు"
    },
    {
     "el": "Δεν ξέρω",
     "en": "I don't know",
     "tm": "నాకు తెలియదు"
    },
    {
     "el": "ίσως",
     "en": "maybe",
     "tm": "బహుశా"
    },
    {
     "el": "βέβαια",
     "en": "of course",
     "tm": "తప్పకుండా"
    },
    {
     "el": "Εντάξει",
     "en": "OK",
     "tm": "సరే"
    }
   ],
   "grammar": {
    "title": "δεν goes before the verb",
    "body": [
     "To say \"not\", put δεν right before the verb: Είμαι κουρασμένος → Δεν είμαι κουρασμένος.",
     "Όχι answers a question (\"No\"). δεν makes a sentence negative."
    ],
    "te": "Telugu puts \"not\" at the end (తెలియదు). Greek puts δεν at the front of the verb.",
    "ex": [
     {
      "el": "Δεν ξέρω.",
      "en": "I don't know."
     },
     {
      "el": "Δεν είμαι κουρασμένη.",
      "en": "I'm not tired (woman)."
     }
    ]
   },
   "dialogue": {
    "title": "Not tired",
    "tip": "Ask each other three yes/no questions. Answer with δεν.",
    "lines": [
     [
      "A",
      "Είσαι κουρασμένη;",
      "Are you tired?"
     ],
     [
      "B",
      "Όχι, δεν είμαι κουρασμένη. Εσύ;",
      "No, I'm not tired. You?"
     ],
     [
      "A",
      "Δεν ξέρω… ίσως!",
      "I don't know… maybe!"
     ],
     [
      "B",
      "Εντάξει.",
      "OK."
     ]
    ]
   }
  },
  {
   "n": 20,
   "title": "We are together",
   "goal": "Use we, you (plural) and they.",
   "items": [
    {
     "el": "εμείς",
     "en": "we",
     "tm": "మేము / మనం"
    },
    {
     "el": "εσείς",
     "en": "you (plural, or polite)",
     "tm": "మీరు"
    },
    {
     "el": "αυτοί",
     "en": "they",
     "tm": "వారు"
    },
    {
     "el": "είμαστε",
     "en": "we are",
     "tm": "(మనం) ఉన్నాం"
    },
    {
     "el": "είστε",
     "en": "you are (plural)",
     "tm": "(మీరు) ఉన్నారు"
    },
    {
     "el": "μαζί",
     "en": "together",
     "tm": "కలిసి",
     "note": "This is the name of the app."
    }
   ],
   "grammar": {
    "title": "The whole verb \"to be\"",
    "body": [
     "εγώ είμαι · εσύ είσαι · αυτός / αυτή είναι",
     "εμείς είμαστε · εσείς είστε · αυτοί είναι",
     "είναι means both \"he/she is\" and \"they are\"."
    ],
    "te": "εσείς is also the polite \"you\" for elders, like Telugu మీరు.",
    "ex": [
     {
      "el": "Είμαστε μαζί.",
      "en": "We are together."
     },
     {
      "el": "Πού είστε;",
      "en": "Where are you (all)?"
     }
    ]
   },
   "dialogue": {
    "title": "Together",
    "tip": "Hold hands for this one.",
    "lines": [
     [
      "A",
      "Είμαστε μαζί.",
      "We are together."
     ],
     [
      "B",
      "Ναι, είμαστε μαζί. Δόξα τω Θεώ!",
      "Yes, we are together. Thank God!"
     ]
    ]
   }
  },
  {
   "n": 21,
   "title": "Numbers 1 to 5",
   "goal": "Count to five and ask how many.",
   "items": [
    {
     "el": "ένα",
     "en": "one",
     "tm": "ఒకటి"
    },
    {
     "el": "δύο",
     "en": "two",
     "tm": "రెండు"
    },
    {
     "el": "τρία",
     "en": "three",
     "tm": "మూడు"
    },
    {
     "el": "τέσσερα",
     "en": "four",
     "tm": "నాలుగు"
    },
    {
     "el": "πέντε",
     "en": "five",
     "tm": "ఐదు"
    },
    {
     "el": "Πόσα;",
     "en": "How many?",
     "tm": "ఎన్ని?"
    }
   ],
   "grammar": {
    "title": "Cousins of Sanskrit",
    "body": [
     "Greek and Sanskrit come from the same ancient family, and the numbers show it.",
     "δύο and ద్వి, τρία and త్రి, πέντε and పంచ."
    ],
    "te": "You already know these roots from Telugu words like ద్వితీయ, త్రికోణం and పంచాంగం.",
    "ex": [
     {
      "el": "ένα, δύο, τρία",
      "en": "one, two, three"
     }
    ]
   },
   "dialogue": {
    "title": "How many?",
    "tip": "Count spoons, cups and fingers together.",
    "lines": [
     [
      "A",
      "Πόσα;",
      "How many?"
     ],
     [
      "B",
      "Τρία.",
      "Three."
     ],
     [
      "A",
      "Τρία; Όχι, τέσσερα!",
      "Three? No, four!"
     ]
    ]
   }
  },
  {
   "n": 22,
   "title": "Numbers 6 to 10",
   "goal": "Count to ten and say the time.",
   "items": [
    {
     "el": "έξι",
     "en": "six",
     "tm": "ఆరు"
    },
    {
     "el": "εφτά",
     "en": "seven",
     "tm": "ఏడు"
    },
    {
     "el": "οχτώ",
     "en": "eight",
     "tm": "ఎనిమిది"
    },
    {
     "el": "εννιά",
     "en": "nine",
     "tm": "తొమ్మిది"
    },
    {
     "el": "δέκα",
     "en": "ten",
     "tm": "పది"
    },
    {
     "el": "Τι ώρα είναι;",
     "en": "What time is it?",
     "tm": "టైం ఎంత అయింది?"
    }
   ],
   "grammar": {
    "title": "Telling the hour",
    "body": [
     "Say the hour with είναι: Είναι εφτά. (It's seven.)",
     "You will also see επτά, οκτώ and εννέα. These are the formal spellings of the same numbers."
    ],
    "te": "More Sanskrit cousins: έξι and షట్, εφτά and సప్త, οχτώ and అష్ట, εννιά and నవ, δέκα and దశ.",
    "ex": [
     {
      "el": "Είναι δέκα.",
      "en": "It's ten o'clock."
     }
    ]
   },
   "dialogue": {
    "title": "Time to go",
    "tip": "Ask the time three times today.",
    "lines": [
     [
      "A",
      "Τι ώρα είναι;",
      "What time is it?"
     ],
     [
      "B",
      "Είναι εφτά.",
      "It's seven."
     ],
     [
      "A",
      "Εφτά; Πάμε!",
      "Seven? Let's go!"
     ]
    ]
   }
  },
  {
   "n": 23,
   "title": "Words of love",
   "goal": "Say sweet things to each other.",
   "items": [
    {
     "el": "καρδιά μου",
     "en": "my heart (sweetheart)",
     "tm": "నా ప్రాణమా"
    },
    {
     "el": "μωρό μου",
     "en": "my baby",
     "tm": "నా బంగారం"
    },
    {
     "el": "Μου λείπεις",
     "en": "I miss you",
     "tm": "నువ్వు గుర్తొస్తున్నావు"
    },
    {
     "el": "Είσαι όμορφη / όμορφος",
     "en": "You are beautiful (to her / to him)",
     "tm": "నువ్వు అందంగా ఉన్నావు"
    },
    {
     "el": "Είμαι τυχερός / τυχερή",
     "en": "I am lucky (man / woman)",
     "tm": "నేను అదృష్టవంతుడిని / అదృష్టవంతురాలిని"
    },
    {
     "el": "Φιλάκια",
     "en": "Kisses (to sign off)",
     "tm": "ముద్దులు"
    }
   ],
   "grammar": {
    "title": "μου means \"my\" and \"to me\"",
    "body": [
     "After a word, μου means \"my\": η καρδιά μου (my heart), το μωρό μου (my baby).",
     "Before a verb, μου means \"to me\": Μου λείπεις is literally \"You are missing to me\"."
    ],
    "te": "Just like Telugu నాకు గుర్తొస్తున్నావు, \"to me\" comes first.",
    "ex": [
     {
      "el": "Μου λείπεις, καρδιά μου.",
      "en": "I miss you, sweetheart."
     }
    ]
   },
   "dialogue": {
    "title": "Missing you",
    "tip": "Send one of these lines on WhatsApp today, in Greek.",
    "lines": [
     [
      "A",
      "Μου λείπεις, καρδιά μου.",
      "I miss you, sweetheart."
     ],
     [
      "B",
      "Κι εσύ μου λείπεις.",
      "I miss you too."
     ],
     [
      "A",
      "Σ' αγαπώ.",
      "I love you."
     ],
     [
      "B",
      "Κι εγώ σ' αγαπώ. Φιλάκια!",
      "I love you too. Kisses!"
     ]
    ]
   }
  },
  {
   "n": 24,
   "title": "Checkpoint: breakfast talk",
   "goal": "Have a whole breakfast conversation in Greek.",
   "items": [
    {
     "el": "Κοιμήθηκες καλά;",
     "en": "Did you sleep well?",
     "tm": "బాగా నిద్రపోయావా?"
    },
    {
     "el": "πολύ",
     "en": "very, a lot",
     "tm": "చాలా"
    },
    {
     "el": "Ναι, πολύ καλά",
     "en": "Yes, very well",
     "tm": "అవును, చాలా బాగా"
    },
    {
     "el": "Καλή όρεξη",
     "en": "Enjoy your meal",
     "tm": "హాయిగా తినండి"
    }
   ],
   "grammar": {
    "title": "What you can do now",
    "body": [
     "You can greet, introduce each other, say how you feel, ask questions, say no, count to ten, tell the hour and say sweet things.",
     "Read the whole dialogue below twice, swapping roles the second time."
    ],
    "te": "This is real Greek. Greek couples say exactly these things every morning.",
    "ex": [
     {
      "el": "Κοιμήθηκες καλά;",
      "en": "Did you sleep well?"
     }
    ]
   },
   "dialogue": {
    "title": "Breakfast",
    "tip": "Do it at the real breakfast table tomorrow.",
    "lines": [
     [
      "A",
      "Καλημέρα, αγάπη μου!",
      "Good morning, my love!"
     ],
     [
      "B",
      "Καλημέρα!",
      "Good morning!"
     ],
     [
      "A",
      "Κοιμήθηκες καλά;",
      "Did you sleep well?"
     ],
     [
      "B",
      "Ναι, πολύ καλά. Εσύ;",
      "Yes, very well. You?"
     ],
     [
      "A",
      "Όχι πολύ. Είμαι κουρασμένος / κουρασμένη.",
      "Not really. I'm tired."
     ],
     [
      "B",
      "Τσάι;",
      "Tea?"
     ],
     [
      "A",
      "Ναι, ευχαριστώ!",
      "Yes, thank you!"
     ],
     [
      "B",
      "Παρακαλώ. Καλή όρεξη!",
      "You're welcome. Enjoy!"
     ]
    ]
   }
  },
  {
   "n": 25,
   "title": "I have",
   "goal": "Say what you have and ask if someone has time.",
   "items": [
    {
     "el": "έχω",
     "en": "I have",
     "tm": "నా దగ్గర ఉంది"
    },
    {
     "el": "έχεις",
     "en": "you have",
     "tm": "నీ దగ్గర ఉంది"
    },
    {
     "el": "έχει",
     "en": "he / she has",
     "tm": "అతని / ఆమె దగ్గర ఉంది"
    },
    {
     "el": "σπίτι",
     "en": "house, home",
     "tm": "ఇల్లు"
    },
    {
     "el": "χρόνο",
     "en": "time (to spare)",
     "tm": "సమయం"
    },
    {
     "el": "Έχεις χρόνο;",
     "en": "Do you have time?",
     "tm": "నీకు సమయం ఉందా?"
    }
   ],
   "grammar": {
    "title": "Verbs that end in -ω",
    "body": [
     "Most Greek verbs end in -ω, and the ending tells you who: έχω (I have), έχεις (you have), έχει (he/she has).",
     "Plural: έχουμε (we have), έχετε (you have), έχουν (they have)."
    ],
    "te": "Telugu says నా దగ్గర ఉంది, \"with me there is\". Greek simply says έχω, \"I have\".",
    "ex": [
     {
      "el": "Δεν έχω χρόνο.",
      "en": "I don't have time."
     }
    ]
   },
   "dialogue": {
    "title": "Coffee date",
    "tip": "Actually go for coffee this week, and ask in Greek.",
    "lines": [
     [
      "A",
      "Έχεις χρόνο;",
      "Do you have time?"
     ],
     [
      "B",
      "Ναι, έχω.",
      "Yes, I do."
     ],
     [
      "A",
      "Πάμε για καφέ;",
      "Shall we go for coffee?"
     ],
     [
      "B",
      "Πάμε!",
      "Let's go!"
     ]
    ]
   }
  },
  {
   "n": 26,
   "title": "The: ο, η, το",
   "goal": "Name things at home with the right \"the\".",
   "items": [
    {
     "el": "ο καφές",
     "en": "the coffee",
     "tm": "కాఫీ"
    },
    {
     "el": "η πόρτα",
     "en": "the door",
     "tm": "తలుపు"
    },
    {
     "el": "το νερό",
     "en": "the water",
     "tm": "నీళ్ళు"
    },
    {
     "el": "η κουζίνα",
     "en": "the kitchen",
     "tm": "వంటగది"
    },
    {
     "el": "το παράθυρο",
     "en": "the window",
     "tm": "కిటికీ"
    },
    {
     "el": "το σπίτι",
     "en": "the house",
     "tm": "ఇల్లు"
    }
   ],
   "grammar": {
    "title": "Three genders",
    "body": [
     "Every Greek noun is masculine (ο), feminine (η) or neuter (το), even things.",
     "The ending usually tells you: -ος, -ας, -ης → ο · -α, -η → η · -ο, -ι, -μα → το.",
     "Always learn a new word together with its ο, η or το."
    ],
    "te": "Telugu calls things అది (neuter). Greek gives every noun a gender, like Hindi does.",
    "ex": [
     {
      "el": "Πού είναι το νερό;",
      "en": "Where is the water?"
     },
     {
      "el": "Η πόρτα είναι εκεί.",
      "en": "The door is there."
     }
    ]
   },
   "dialogue": {
    "title": "Where is it?",
    "tip": "Walk around the house and ask about each thing.",
    "lines": [
     [
      "A",
      "Πού είναι ο καφές;",
      "Where is the coffee?"
     ],
     [
      "B",
      "Εκεί, στην κουζίνα.",
      "There, in the kitchen."
     ],
     [
      "A",
      "Ευχαριστώ!",
      "Thanks!"
     ]
    ]
   }
  },
  {
   "n": 27,
   "title": "I want",
   "goal": "Say what you want, and offer drinks.",
   "items": [
    {
     "el": "θέλω",
     "en": "I want",
     "tm": "నాకు కావాలి"
    },
    {
     "el": "θέλεις",
     "en": "you want",
     "tm": "నీకు కావాలా"
    },
    {
     "el": "Θέλεις καφέ ή τσάι;",
     "en": "Do you want coffee or tea?",
     "tm": "కాఫీ కావాలా, టీ కావాలా?"
    },
    {
     "el": "λίγο",
     "en": "a little",
     "tm": "కొంచెం"
    },
    {
     "el": "ζάχαρη",
     "en": "sugar",
     "tm": "చక్కెర"
    },
    {
     "el": "Δεν θέλω",
     "en": "I don't want",
     "tm": "నాకు వద్దు"
    }
   ],
   "grammar": {
    "title": "The \"object\" form",
    "body": [
     "When a masculine word is the thing you want, its final ς drops: ο καφές → Θέλω καφέ.",
     "Feminine and neuter words stay the same: Θέλω ζάχαρη. Θέλω νερό.",
     "ή (with an accent) means \"or\"."
    ],
    "te": "Like Telugu adding -ని to the object (కాఫీని), Greek changes the ending of the thing.",
    "ex": [
     {
      "el": "Θέλω καφέ.",
      "en": "I want coffee."
     },
     {
      "el": "Θέλεις ζάχαρη;",
      "en": "Do you want sugar?"
     }
    ]
   },
   "dialogue": {
    "title": "Coffee or tea?",
    "tip": "Make each other a drink tonight, asking only in Greek.",
    "lines": [
     [
      "A",
      "Θέλεις καφέ ή τσάι;",
      "Coffee or tea?"
     ],
     [
      "B",
      "Καφέ, παρακαλώ.",
      "Coffee, please."
     ],
     [
      "A",
      "Ζάχαρη;",
      "Sugar?"
     ],
     [
      "B",
      "Λίγο.",
      "A little."
     ]
    ]
   }
  },
  {
   "n": 28,
   "title": "Food",
   "goal": "Name everyday foods and decide what to eat.",
   "items": [
    {
     "el": "ρύζι",
     "en": "rice",
     "tm": "అన్నం / బియ్యం"
    },
    {
     "el": "κοτόπουλο",
     "en": "chicken",
     "tm": "చికెన్"
    },
    {
     "el": "αυγό / αυγά",
     "en": "egg / eggs",
     "tm": "గుడ్డు / గుడ్లు"
    },
    {
     "el": "ψάρι",
     "en": "fish",
     "tm": "చేప"
    },
    {
     "el": "λαχανικά",
     "en": "vegetables",
     "tm": "కూరగాయలు"
    },
    {
     "el": "φρούτα",
     "en": "fruit",
     "tm": "పండ్లు"
    },
    {
     "el": "Τι θέλεις να φάμε;",
     "en": "What shall we eat?",
     "tm": "ఏం తిందాం?"
    }
   ],
   "grammar": {
    "title": "Plurals of το-words",
    "body": [
     "Neuter words ending in -ο change to -α: το αυγό → τα αυγά.",
     "Words ending in -ι add -α: το ψάρι → τα ψάρια.",
     "The plural of το is τα."
    ],
    "te": "Telugu adds -లు (గుడ్లు). Greek changes the ending instead.",
    "ex": [
     {
      "el": "Θέλω δύο αυγά.",
      "en": "I want two eggs."
     }
    ]
   },
   "dialogue": {
    "title": "Dinner plans",
    "tip": "Decide tomorrow's dinner in Greek.",
    "lines": [
     [
      "A",
      "Τι θέλεις να φάμε;",
      "What shall we eat?"
     ],
     [
      "B",
      "Ρύζι και κοτόπουλο.",
      "Rice and chicken."
     ],
     [
      "A",
      "Και λαχανικά;",
      "And vegetables?"
     ],
     [
      "B",
      "Ναι, βέβαια!",
      "Yes, of course!"
     ]
    ]
   }
  },
  {
   "n": 29,
   "title": "At the table",
   "goal": "Talk at the dinner table.",
   "items": [
    {
     "el": "Πεινάω",
     "en": "I'm hungry",
     "tm": "నాకు ఆకలిగా ఉంది"
    },
    {
     "el": "Διψάω",
     "en": "I'm thirsty",
     "tm": "నాకు దాహంగా ఉంది"
    },
    {
     "el": "Το φαγητό είναι έτοιμο",
     "en": "The food is ready",
     "tm": "భోజనం సిద్ధంగా ఉంది"
    },
    {
     "el": "Πολύ νόστιμο!",
     "en": "Very tasty!",
     "tm": "చాలా రుచిగా ఉంది!"
    },
    {
     "el": "Κι άλλο;",
     "en": "More?",
     "tm": "ఇంకా కావాలా?"
    },
    {
     "el": "Χόρτασα",
     "en": "I'm full",
     "tm": "కడుపు నిండింది"
    }
   ],
   "grammar": {
    "title": "Verbs that end in -άω",
    "body": [
     "Some verbs end in -άω: πεινάω (I'm hungry), διψάω (I'm thirsty), αγαπάω (I love).",
     "They go: πεινάω, πεινάς, πεινάει, πεινάμε, πεινάτε, πεινάνε."
    ],
    "te": "Greek says \"I hunger\" with one verb, where Telugu says నాకు ఆకలిగా ఉంది.",
    "ex": [
     {
      "el": "Πεινάς;",
      "en": "Are you hungry?"
     }
    ]
   },
   "dialogue": {
    "title": "Dinner is ready",
    "tip": "Use these at tonight's dinner.",
    "lines": [
     [
      "A",
      "Πεινάω!",
      "I'm hungry!"
     ],
     [
      "B",
      "Το φαγητό είναι έτοιμο.",
      "The food is ready."
     ],
     [
      "A",
      "Πολύ νόστιμο!",
      "Very tasty!"
     ],
     [
      "B",
      "Κι άλλο;",
      "More?"
     ],
     [
      "A",
      "Όχι, ευχαριστώ. Χόρτασα.",
      "No, thanks. I'm full."
     ]
    ]
   }
  },
  {
   "n": 30,
   "title": "Where in the house?",
   "goal": "Say where you are at home.",
   "items": [
    {
     "el": "το σαλόνι",
     "en": "the living room",
     "tm": "హాలు"
    },
    {
     "el": "η κρεβατοκάμαρα",
     "en": "the bedroom",
     "tm": "పడకగది"
    },
    {
     "el": "το μπάνιο",
     "en": "the bathroom",
     "tm": "స్నానాల గది"
    },
    {
     "el": "ο κήπος",
     "en": "the garden",
     "tm": "తోట"
    },
    {
     "el": "στο / στην",
     "en": "in the, at the",
     "tm": "…లో"
    },
    {
     "el": "Έλα εδώ!",
     "en": "Come here!",
     "tm": "ఇక్కడికి రా!"
    }
   ],
   "grammar": {
    "title": "σε + the = στο, στην",
    "body": [
     "σε means \"in / at / to\". It joins with \"the\": σε + το = στο, σε + την = στην, σε + τον = στον.",
     "Είμαι στο σαλόνι. (I'm in the living room.) Είμαι στην κουζίνα. (I'm in the kitchen.)"
    ],
    "te": "Like Telugu -లో: వంటగదిలో = στην κουζίνα.",
    "ex": [
     {
      "el": "Είμαι στον κήπο.",
      "en": "I'm in the garden."
     }
    ]
   },
   "dialogue": {
    "title": "Where are you?",
    "tip": "Call each other from different rooms, in Greek only.",
    "lines": [
     [
      "A",
      "Πού είσαι;",
      "Where are you?"
     ],
     [
      "B",
      "Στην κουζίνα. Εσύ;",
      "In the kitchen. You?"
     ],
     [
      "A",
      "Στο σαλόνι. Έλα εδώ!",
      "In the living room. Come here!"
     ]
    ]
   }
  },
  {
   "n": 31,
   "title": "Things at home",
   "goal": "Find things around the house.",
   "items": [
    {
     "el": "το τραπέζι",
     "en": "the table",
     "tm": "బల్ల"
    },
    {
     "el": "η καρέκλα",
     "en": "the chair",
     "tm": "కుర్చీ"
    },
    {
     "el": "το κρεβάτι",
     "en": "the bed",
     "tm": "మంచం"
    },
    {
     "el": "τα κλειδιά",
     "en": "the keys",
     "tm": "తాళాలు"
    },
    {
     "el": "το τηλέφωνο",
     "en": "the phone",
     "tm": "ఫోను"
    },
    {
     "el": "η τσάντα",
     "en": "the bag",
     "tm": "సంచి"
    }
   ],
   "grammar": {
    "title": "Plurals of η-words",
    "body": [
     "Feminine words ending in -α or -η change to -ες: η καρέκλα → οι καρέκλες.",
     "The plural of ο and η is οι: οι καρέκλες. The plural of το is τα: τα κλειδιά."
    ],
    "te": "Greek has two plural \"the\" words: οι (for ο and η words) and τα (for το words).",
    "ex": [
     {
      "el": "Πού είναι τα κλειδιά;",
      "en": "Where are the keys?"
     }
    ]
   },
   "dialogue": {
    "title": "Lost keys",
    "tip": "Hide the keys and ask for them in Greek.",
    "lines": [
     [
      "A",
      "Πού είναι τα κλειδιά;",
      "Where are the keys?"
     ],
     [
      "B",
      "Στο τραπέζι.",
      "On the table."
     ],
     [
      "A",
      "Και το τηλέφωνό μου;",
      "And my phone?"
     ],
     [
      "B",
      "Στην τσάντα σου!",
      "In your bag!"
     ]
    ]
   }
  },
  {
   "n": 32,
   "title": "Big, small, hot, cold",
   "goal": "Describe things.",
   "items": [
    {
     "el": "μεγάλος / μεγάλη / μεγάλο",
     "en": "big",
     "tm": "పెద్ద"
    },
    {
     "el": "μικρός / μικρή / μικρό",
     "en": "small",
     "tm": "చిన్న"
    },
    {
     "el": "ζεστός / ζεστή / ζεστό",
     "en": "hot",
     "tm": "వేడి"
    },
    {
     "el": "κρύος / κρύα / κρύο",
     "en": "cold",
     "tm": "చల్లని"
    },
    {
     "el": "καινούργιος / καινούργια / καινούργιο",
     "en": "new",
     "tm": "కొత్త"
    },
    {
     "el": "Ωραία!",
     "en": "Great! Lovely!",
     "tm": "బాగుంది!"
    }
   ],
   "grammar": {
    "title": "Describing words match",
    "body": [
     "A describing word takes the ending of its noun: ο μεγάλος κήπος, η μεγάλη κουζίνα, το μεγάλο σπίτι.",
     "Some feminine forms end in -α instead of -η: κρύα, καινούργια."
    ],
    "te": "Telugu పెద్ద never changes. Greek μεγάλος changes to match ο, η or το.",
    "ex": [
     {
      "el": "Το τσάι είναι κρύο.",
      "en": "The tea is cold."
     }
    ]
   },
   "dialogue": {
    "title": "Cold tea",
    "tip": "Describe three things on the table.",
    "lines": [
     [
      "A",
      "Το τσάι είναι κρύο!",
      "The tea is cold!"
     ],
     [
      "B",
      "Συγγνώμη! Θέλεις ζεστό τσάι;",
      "Sorry! Do you want hot tea?"
     ],
     [
      "A",
      "Ναι, ευχαριστώ.",
      "Yes, thank you."
     ],
     [
      "B",
      "Ωραία!",
      "Great!"
     ]
    ]
   }
  },
  {
   "n": 33,
   "title": "Cooking together",
   "goal": "Talk while you cook.",
   "items": [
    {
     "el": "μαγειρεύω",
     "en": "I cook",
     "tm": "నేను వండుతాను"
    },
    {
     "el": "τρώω",
     "en": "I eat",
     "tm": "నేను తింటాను"
    },
    {
     "el": "πίνω",
     "en": "I drink",
     "tm": "నేను తాగుతాను"
    },
    {
     "el": "πλένω",
     "en": "I wash",
     "tm": "నేను కడుగుతాను"
    },
    {
     "el": "Να βοηθήσω;",
     "en": "Shall I help?",
     "tm": "సహాయం చేయనా?"
    },
    {
     "el": "Τι μαγειρεύεις;",
     "en": "What are you cooking?",
     "tm": "ఏం వండుతున్నావు?"
    }
   ],
   "grammar": {
    "title": "The full present tense",
    "body": [
     "μαγειρεύω (I cook) · μαγειρεύεις (you cook) · μαγειρεύει (he/she cooks)",
     "μαγειρεύουμε (we cook) · μαγειρεύετε (you cook) · μαγειρεύουν (they cook)",
     "The same endings work for most verbs: πλένω, πλένεις, πλένει…"
    ],
    "te": "Telugu verbs change by person too: వండుతాను, వండుతావు, వండుతాడు.",
    "ex": [
     {
      "el": "Μαγειρεύουμε μαζί.",
      "en": "We cook together."
     }
    ]
   },
   "dialogue": {
    "title": "In the kitchen",
    "tip": "Cook one meal this week speaking only Greek.",
    "lines": [
     [
      "A",
      "Τι μαγειρεύεις;",
      "What are you cooking?"
     ],
     [
      "B",
      "Ρύζι και ψάρι.",
      "Rice and fish."
     ],
     [
      "A",
      "Να βοηθήσω;",
      "Shall I help?"
     ],
     [
      "B",
      "Ναι! Πλένεις τα λαχανικά;",
      "Yes! Will you wash the vegetables?"
     ],
     [
      "A",
      "Εντάξει.",
      "OK."
     ]
    ]
   }
  },
  {
   "n": 34,
   "title": "Checkpoint: dinner at home",
   "goal": "Have a full evening conversation.",
   "items": [
    {
     "el": "Γύρισα!",
     "en": "I'm home! (I'm back)",
     "tm": "నేను వచ్చేశాను!"
    },
    {
     "el": "Καλώς ήρθες",
     "en": "Welcome (home)",
     "tm": "స్వాగతం"
    },
    {
     "el": "Πώς πήγε η μέρα σου;",
     "en": "How was your day?",
     "tm": "నీ రోజు ఎలా గడిచింది?"
    },
    {
     "el": "αλλά",
     "en": "but",
     "tm": "కానీ"
    },
    {
     "el": "Ας προσευχηθούμε",
     "en": "Let's pray",
     "tm": "ప్రార్థన చేద్దాం"
    }
   ],
   "grammar": {
    "title": "What you can do now",
    "body": [
     "You can talk about home, food, where things are and what you want, and describe things.",
     "That is enough Greek for a whole evening at home. Read the dialogue twice, swapping roles."
    ],
    "te": "From here, the course moves on to your daily routine.",
    "ex": [
     {
      "el": "Πώς πήγε η μέρα σου;",
      "en": "How was your day?"
     }
    ]
   },
   "dialogue": {
    "title": "Evening at home",
    "tip": "Do this tonight when one of you comes home.",
    "lines": [
     [
      "A",
      "Γύρισα!",
      "I'm home!"
     ],
     [
      "B",
      "Καλώς ήρθες, αγάπη μου! Πώς πήγε η μέρα σου;",
      "Welcome home, my love! How was your day?"
     ],
     [
      "A",
      "Καλά, αλλά είμαι κουρασμένος / κουρασμένη. Πεινάω!",
      "Good, but I'm tired. I'm hungry!"
     ],
     [
      "B",
      "Το φαγητό είναι έτοιμο. Ρύζι και κοτόπουλο.",
      "The food is ready. Rice and chicken."
     ],
     [
      "A",
      "Ωραία! Ας προσευχηθούμε.",
      "Lovely! Let's pray."
     ],
     [
      "B",
      "Αμήν. Καλή όρεξη!",
      "Amen. Enjoy your meal!"
     ]
    ]
   }
  }
 ],
 "extra": {
  "1": {
   "intro": "Before any sounds or words, you meet the alphabet as a whole: 24 letters with their names and order. The Greek alphabet is about 2,800 years old. Greeks took their letters from the Phoenicians and added something new: letters for vowels. The Latin alphabet came from Greek, which is why so many letters look familiar. Today, just look, listen and recognise.",
   "reading": {
    "title": "The alphabet in order",
    "drill": true,
    "lines": [
     [
      "Α Β Γ Δ Ε Ζ",
      "alpha, vita, gamma, delta, epsilon, zita"
     ],
     [
      "Η Θ Ι Κ Λ Μ",
      "ita, thita, yota, kappa, lamda, mi"
     ],
     [
      "Ν Ξ Ο Π Ρ Σ",
      "ni, ksi, omikron, pi, ro, sigma"
     ],
     [
      "Τ Υ Φ Χ Ψ Ω",
      "taf, ipsilon, fi, khi, psi, omega"
     ]
    ]
   },
   "tables": [
    {
     "title": "The 24 letters",
     "tone": "plain",
     "cols": [
      "Capital",
      "Small",
      "Name",
      "Sound"
     ],
     "rows": [
      [
       "Α",
       "α",
       "alpha",
       "a"
      ],
      [
       "Β",
       "β",
       "vita (beta)",
       "v"
      ],
      [
       "Γ",
       "γ",
       "gamma",
       "gh / y"
      ],
      [
       "Δ",
       "δ",
       "delta",
       "dh"
      ],
      [
       "Ε",
       "ε",
       "epsilon",
       "e"
      ],
      [
       "Ζ",
       "ζ",
       "zita (zeta)",
       "z"
      ],
      [
       "Η",
       "η",
       "ita (eta)",
       "i"
      ],
      [
       "Θ",
       "θ",
       "thita (theta)",
       "th"
      ],
      [
       "Ι",
       "ι",
       "yota (iota)",
       "i"
      ],
      [
       "Κ",
       "κ",
       "kappa",
       "k"
      ],
      [
       "Λ",
       "λ",
       "lamda",
       "l"
      ],
      [
       "Μ",
       "μ",
       "mi",
       "m"
      ],
      [
       "Ν",
       "ν",
       "ni",
       "n"
      ],
      [
       "Ξ",
       "ξ",
       "ksi",
       "ks"
      ],
      [
       "Ο",
       "ο",
       "omikron",
       "o"
      ],
      [
       "Π",
       "π",
       "pi",
       "p"
      ],
      [
       "Ρ",
       "ρ",
       "ro",
       "r"
      ],
      [
       "Σ",
       "σ / ς",
       "sigma",
       "s"
      ],
      [
       "Τ",
       "τ",
       "taf (tau)",
       "t"
      ],
      [
       "Υ",
       "υ",
       "ipsilon",
       "i"
      ],
      [
       "Φ",
       "φ",
       "fi",
       "f"
      ],
      [
       "Χ",
       "χ",
       "khi",
       "kh"
      ],
      [
       "Ψ",
       "ψ",
       "psi",
       "ps"
      ],
      [
       "Ω",
       "ω",
       "omega",
       "o"
      ]
     ]
    }
   ],
   "drills": [
    {
     "s": "The first letter, Α, is called ___",
     "a": "alpha",
     "o": [
      "alpha",
      "beta",
      "omega"
     ],
     "en": "Α = alpha",
     "why": "Α is alpha, the first letter."
    },
    {
     "s": "The last letter, Ω, is called ___",
     "a": "omega",
     "o": [
      "omikron",
      "omega",
      "psi"
     ],
     "en": "Ω = omega",
     "why": "Ω is omega, the last letter."
    },
    {
     "s": "Δ is called ___",
     "a": "delta",
     "o": [
      "delta",
      "lamda",
      "pi"
     ],
     "en": "Δ = delta",
     "why": "Δ is delta."
    },
    {
     "s": "Σ is called ___",
     "a": "sigma",
     "o": [
      "sigma",
      "ksi",
      "epsilon"
     ],
     "en": "Σ = sigma",
     "why": "Σ is sigma, the s."
    },
    {
     "s": "Greek has ___ letters",
     "a": "24",
     "o": [
      "24",
      "26",
      "56"
     ],
     "en": "The Greek alphabet has 24 letters.",
     "why": "24 letters, two fewer than English."
    },
    {
     "s": "In Greek, vowels are written as ___",
     "a": "full letters",
     "o": [
      "full letters",
      "signs on consonants"
     ],
     "en": "Vowels are separate letters.",
     "why": "Unlike Telugu, Greek has no vowel signs."
    }
   ],
   "skip": [
    "B",
    "D"
   ],
   "turn": [
    "Say the alphabet in turns, one letter each, using the names.",
    "Point at a letter in the table; your spouse says its name.",
    "Find Greek letters you already know from maths or science: π, Σ, Δ, Ω, μ."
   ],
   "bible": {
    "ref": "Revelation 22:13",
    "koine": "ἐγὼ τὸ Ἄλφα καὶ τὸ Ὦ",
    "en": "I am the Alpha and the Omega",
    "note": "Alpha and omega are the first and last letters of this alphabet: the beginning and the end."
   },
   "know": "π (pi) in maths, Δ (delta) for \"change\", Σ (sigma) for \"sum\" and Ω (omega) for ohms are all Greek letters. You already know more than you think."
  },
  "2": {
   "intro": "Yesterday you saw all 24 letters. Today you learn to tell them apart quickly by sorting them into three families, using English, which you already read, as the guide.",
   "reading": {
    "title": "Name each letter aloud",
    "drill": true,
    "lines": [
     [
      "Α Ε Ζ Ι Κ Μ Ο Τ",
      "friends: a, e, z, i, k, m, o, t"
     ],
     [
      "Β Η Ν Ρ Υ Χ",
      "false friends: v, i, n, r, i, kh"
     ],
     [
      "Γ Δ Θ Λ Ξ",
      "gamma, delta, thita, lamda, ksi"
     ],
     [
      "Π Σ Φ Ψ Ω",
      "pi, sigma, fi, psi, omega"
     ]
    ]
   },
   "tables": [
    {
     "title": "The three families",
     "tone": "plain",
     "cols": [
      "Friends",
      "False friends",
      "New shapes"
     ],
     "rows": [
      [
       "Α a",
       "Β v",
       "Γ gh / y"
      ],
      [
       "Ε e",
       "Η i",
       "Δ dh"
      ],
      [
       "Ζ z",
       "Ν n",
       "Θ th"
      ],
      [
       "Ι i",
       "Ρ r",
       "Λ l"
      ],
      [
       "Κ k",
       "Υ i",
       "Ξ ks"
      ],
      [
       "Μ m",
       "Χ kh",
       "Π p"
      ],
      [
       "Ο o",
       "",
       "Σ s"
      ],
      [
       "Τ t",
       "",
       "Φ f"
      ],
      [
       "",
       "",
       "Ψ ps"
      ],
      [
       "",
       "",
       "Ω o"
      ]
     ]
    }
   ],
   "drills": [
    {
     "s": "Η sounds like ___",
     "a": "i",
     "o": [
      "h",
      "n",
      "i"
     ],
     "en": "Η = i",
     "why": "Η is a false friend: it sounds i."
    },
    {
     "s": "Ρ sounds like ___",
     "a": "r",
     "o": [
      "p",
      "r"
     ],
     "en": "Ρ = r",
     "why": "Ρ is a false friend: it sounds r."
    },
    {
     "s": "Β sounds like ___",
     "a": "v",
     "o": [
      "b",
      "v"
     ],
     "en": "Β = v",
     "why": "Β is always v."
    },
    {
     "s": "Χ sounds like ___",
     "a": "kh",
     "o": [
      "x",
      "kh"
     ],
     "en": "Χ = kh",
     "why": "Χ is kh, as in \"loch\"."
    },
    {
     "s": "Δ belongs to the ___ family",
     "a": "new shapes",
     "o": [
      "friends",
      "false friends",
      "new shapes"
     ],
     "en": "Δ is a new shape.",
     "why": "English has no Δ."
    },
    {
     "s": "Κ belongs to the ___ family",
     "a": "friends",
     "o": [
      "friends",
      "false friends",
      "new shapes"
     ],
     "en": "Κ is a friend.",
     "why": "Κ looks and sounds like K."
    }
   ],
   "skip": [
    "D"
   ],
   "turn": [
    "One of you writes a capital letter on paper; the other says which family it belongs to.",
    "Look at any Greek text or label and find the false friends: Η, Ρ, Χ, Β, Υ, Ν.",
    "Say each false friend with its real sound: Η is i, Ρ is r, and so on."
   ],
   "know": "The English letter H came from Greek Η, which once sounded h. Greek later lost the h sound, so today Η sounds like i."
  },
  "3": {
   "intro": "Most Greek text, including Bibles, is printed in small letters, so this is the form you will read most. Many small letters are just smaller capitals, but a handful look like completely different English letters. Those are today's focus.",
   "reading": {
    "title": "Capital and small, in order",
    "drill": true,
    "lines": [
     [
      "Α α · Β β · Γ γ · Δ δ",
      "alpha, vita, gamma, delta"
     ],
     [
      "Ε ε · Ζ ζ · Η η · Θ θ",
      "epsilon, zita, ita, thita"
     ],
     [
      "Ι ι · Κ κ · Λ λ · Μ μ",
      "yota, kappa, lamda, mi"
     ],
     [
      "Ν ν · Ξ ξ · Ο ο · Π π",
      "ni, ksi, omikron, pi"
     ],
     [
      "Ρ ρ · Σ σ ς · Τ τ · Υ υ",
      "ro, sigma, taf, ipsilon"
     ],
     [
      "Φ φ · Χ χ · Ψ ψ · Ω ω",
      "fi, khi, psi, omega"
     ]
    ]
   },
   "tables": [
    {
     "title": "Capital and small letters",
     "tone": "plain",
     "cols": [
      "Capital",
      "Small",
      "Name"
     ],
     "rows": [
      [
       "Α",
       "α",
       "alpha"
      ],
      [
       "Β",
       "β",
       "vita (beta)"
      ],
      [
       "Γ",
       "γ",
       "gamma"
      ],
      [
       "Δ",
       "δ",
       "delta"
      ],
      [
       "Ε",
       "ε",
       "epsilon"
      ],
      [
       "Ζ",
       "ζ",
       "zita (zeta)"
      ],
      [
       "Η",
       "η",
       "ita (eta)"
      ],
      [
       "Θ",
       "θ",
       "thita (theta)"
      ],
      [
       "Ι",
       "ι",
       "yota (iota)"
      ],
      [
       "Κ",
       "κ",
       "kappa"
      ],
      [
       "Λ",
       "λ",
       "lamda"
      ],
      [
       "Μ",
       "μ",
       "mi"
      ],
      [
       "Ν",
       "ν",
       "ni"
      ],
      [
       "Ξ",
       "ξ",
       "ksi"
      ],
      [
       "Ο",
       "ο",
       "omikron"
      ],
      [
       "Π",
       "π",
       "pi"
      ],
      [
       "Ρ",
       "ρ",
       "ro"
      ],
      [
       "Σ",
       "σ / ς",
       "sigma"
      ],
      [
       "Τ",
       "τ",
       "taf (tau)"
      ],
      [
       "Υ",
       "υ",
       "ipsilon"
      ],
      [
       "Φ",
       "φ",
       "fi"
      ],
      [
       "Χ",
       "χ",
       "khi"
      ],
      [
       "Ψ",
       "ψ",
       "psi"
      ],
      [
       "Ω",
       "ω",
       "omega"
      ]
     ]
    }
   ],
   "drills": [
    {
     "s": "ν is the sound ___",
     "a": "n",
     "o": [
      "v",
      "n"
     ],
     "en": "ν = n",
     "why": "Small ν looks like v but is n."
    },
    {
     "s": "η is the sound ___",
     "a": "i",
     "o": [
      "n",
      "i"
     ],
     "en": "η = i",
     "why": "Small η looks like n but is i."
    },
    {
     "s": "ρ is the sound ___",
     "a": "r",
     "o": [
      "p",
      "r"
     ],
     "en": "ρ = r",
     "why": "Small ρ looks like p but is r."
    },
    {
     "s": "ω is the sound ___",
     "a": "o",
     "o": [
      "w",
      "o"
     ],
     "en": "ω = o",
     "why": "Small ω looks like w but is o."
    },
    {
     "s": "At the end of a word, σ is written ___",
     "a": "ς",
     "o": [
      "σ",
      "ς"
     ],
     "en": "final sigma",
     "why": "σ in the middle, ς at the end."
    },
    {
     "s": "The small form of Θ is ___",
     "a": "θ",
     "o": [
      "θ",
      "φ",
      "ψ"
     ],
     "en": "Θ θ",
     "why": "Θ θ is thita."
    }
   ],
   "skip": [
    "D"
   ],
   "turn": [
    "Write the small letters in order on paper, taking turns, one letter each.",
    "Your spouse writes a capital; you write its small form.",
    "Find ν, η, ρ and ω in any Greek text and say their real sounds."
   ],
   "bible": {
    "ref": "John 1:1, as in the oldest manuscripts",
    "koine": "ΕΝΑΡΧΗΗΝΟΛΟΓΟΣ",
    "en": "In the beginning was the Word",
    "note": "The earliest copies of the New Testament were written in capitals only, with no spaces and no accents. Small letters, spaces and accents came later: Ἐν ἀρχῇ ἦν ὁ λόγος."
   },
   "know": "Small letters were developed by Byzantine scribes around the 9th century so they could write faster. Before that, Greek books were written in capitals."
  },
  "4": {
   "intro": "Vowels carry every syllable, so the sounds start here. Greek has seven vowel letters but only five vowel sounds, and today you learn why: it is a piece of history you can hear.",
   "reading": {
    "title": "Vowels aloud",
    "drill": true,
    "lines": [
     [
      "α ε ι ο",
      "a, e, i, o"
     ],
     [
      "η υ ω",
      "i, i, o"
     ],
     [
      "ι · η · υ",
      "all three are i"
     ],
     [
      "ο · ω",
      "both are o"
     ],
     [
      "αγάπη · ημέρα · ώρα",
      "love · day · hour"
     ]
    ]
   },
   "tables": [
    {
     "title": "The vowel letters",
     "tone": "plain",
     "cols": [
      "Letter",
      "Sound",
      "Telugu",
      "Example"
     ],
     "rows": [
      [
       "α",
       "a",
       "అ",
       "αγάπη, love"
      ],
      [
       "ε",
       "e",
       "ఎ",
       "ελπίδα, hope"
      ],
      [
       "ι",
       "i",
       "ఇ",
       "ιδέα, idea"
      ],
      [
       "η",
       "i",
       "ఇ",
       "ημέρα, day"
      ],
      [
       "υ",
       "i",
       "ఇ",
       "ύμνος, hymn"
      ],
      [
       "ο",
       "o",
       "ఒ",
       "όνομα, name"
      ],
      [
       "ω",
       "o",
       "ఒ",
       "ώρα, hour"
      ]
     ]
    }
   ],
   "drills": [
    {
     "s": "η sounds like ___",
     "a": "i",
     "o": [
      "e",
      "i",
      "a"
     ],
     "en": "η = i",
     "why": "η became i over the centuries."
    },
    {
     "s": "ω sounds like ___",
     "a": "o",
     "o": [
      "w",
      "o",
      "u"
     ],
     "en": "ω = o",
     "why": "ω sounds exactly like ο."
    },
    {
     "s": "υ sounds like ___",
     "a": "i",
     "o": [
      "u",
      "i",
      "y"
     ],
     "en": "υ = i",
     "why": "υ is another i."
    },
    {
     "s": "Which two sound the same? ___",
     "a": "ο and ω",
     "o": [
      "ο and ω",
      "α and ε",
      "ε and ι"
     ],
     "en": "ο = ω",
     "why": "Both are o today."
    },
    {
     "s": "Greek has ___ vowel sounds",
     "a": "5",
     "o": [
      "5",
      "7",
      "12"
     ],
     "en": "five vowel sounds",
     "why": "a, e, i, o, u: five sounds, seven letters (plus ου for u)."
    }
   ],
   "skip": [
    "D"
   ],
   "turn": [
    "Say the Telugu vowels and then the Greek ones: అ ఎ ఇ ఒ, then α ε ι ο.",
    "One says a vowel letter; the other says its sound.",
    "Write the seven vowel letters from memory."
   ],
   "bible": {
    "ref": "Matthew 5:18",
    "koine": "ἰῶτα ἓν ἢ μία κεραία οὐ μὴ παρέλθῃ ἀπὸ τοῦ νόμου",
    "en": "not one iota, not one dot, will pass from the Law",
    "note": "ἰῶτα is the letter ι, the smallest Greek letter. That is where the English phrase \"not one iota\" comes from."
   },
   "know": "The merging of η, υ, ει and οι into a single i sound is called iotacism, after the letter iota. It was already under way when the New Testament was written."
  },
  "5": {
   "intro": "Telugu arranges consonants by where in the mouth they are made, and Greek is easiest to learn the same way. Today: the four sounds made with the lips, Greek's ప-వర్గం.",
   "reading": {
    "title": "Lip sounds with each vowel",
    "drill": true,
    "lines": [
     [
      "πα πε πι πο",
      "pa, pe, pi, po"
     ],
     [
      "μα με μι μο",
      "ma, me, mi, mo"
     ],
     [
      "βα βε βι βο",
      "va, ve, vi, vo"
     ],
     [
      "φα φε φι φο",
      "fa, fe, fi, fo"
     ],
     [
      "μαμά · πάμε · βήμα",
      "mum · let's go · step"
     ]
    ]
   },
   "tables": [
    {
     "title": "Sounds of the lips",
     "tone": "plain",
     "cols": [
      "Letter",
      "Sound",
      "Telugu",
      "How"
     ],
     "rows": [
      [
       "π",
       "p",
       "ప",
       "lips close, no puff of air"
      ],
      [
       "μ",
       "m",
       "మ",
       "lips close, air through the nose"
      ],
      [
       "β",
       "v",
       "వ",
       "teeth on lip, with voice"
      ],
      [
       "φ",
       "f",
       "ఫ (as f)",
       "teeth on lip, no voice"
      ]
     ]
    }
   ],
   "drills": [
    {
     "s": "β sounds like ___",
     "a": "v",
     "o": [
      "b",
      "v"
     ],
     "en": "β = v",
     "why": "β is always v."
    },
    {
     "s": "φ sounds like ___",
     "a": "f",
     "o": [
      "f",
      "p"
     ],
     "en": "φ = f",
     "why": "φ is a real f today."
    },
    {
     "s": "The voiced and voiceless pair is ___",
     "a": "β and φ",
     "o": [
      "π and μ",
      "β and φ"
     ],
     "en": "β / φ",
     "why": "Same position, voice on (β) and off (φ)."
    },
    {
     "s": "πάμε means ___",
     "a": "let's go",
     "o": [
      "mum",
      "step",
      "let's go"
     ],
     "en": "πάμε",
     "why": "πάμε = let's go."
    }
   ],
   "turn": [
    "Put a finger on your throat and say β, then φ: feel the voice switch on and off.",
    "Read the syllable lines in turns, one row each.",
    "Say μαμά and πάμε to each other."
   ],
   "know": "φ once sounded like Telugu ఫ, a p with a puff of air. It became f in the early centuries AD. English words like \"philosophy\" (φιλοσοφία) keep the old \"ph\" spelling."
  },
  "6": {
   "intro": "Next, the sounds made with the tongue at the teeth, Telugu's త-వర్గం. Two of them, δ and θ, are the English \"th\" sounds, which Telugu doesn't have, so they get the most practice.",
   "reading": {
    "title": "Teeth sounds with each vowel",
    "drill": true,
    "lines": [
     [
      "τα τε τι το",
      "ta, te, ti, to"
     ],
     [
      "δα δε δι δο",
      "dha, dhe, dhi, dho"
     ],
     [
      "θα θε θι θο",
      "tha, the, thi, tho"
     ],
     [
      "να νε νι νο",
      "na, ne, ni, no"
     ],
     [
      "σα σε σι σο · ζα ζε ζι ζο",
      "sa, se, si, so · za, ze, zi, zo"
     ],
     [
      "Θεός · ζωή · όνομα",
      "God · life · name"
     ]
    ]
   },
   "tables": [
    {
     "title": "Sounds of the teeth",
     "tone": "plain",
     "cols": [
      "Letter",
      "Sound",
      "Telugu",
      "Partner"
     ],
     "rows": [
      [
       "τ",
       "t",
       "త",
       "—"
      ],
      [
       "δ",
       "dh, as in \"this\"",
       "ద *",
       "voiced partner of θ"
      ],
      [
       "θ",
       "th, as in \"think\"",
       "థ *",
       "voiceless partner of δ"
      ],
      [
       "ν",
       "n",
       "న",
       "—"
      ],
      [
       "σ ς",
       "s",
       "స",
       "voiceless partner of ζ"
      ],
      [
       "ζ",
       "z",
       "జ *",
       "voiced partner of σ"
      ]
     ]
    }
   ],
   "drills": [
    {
     "s": "δ sounds like the th in ___",
     "a": "this",
     "o": [
      "this",
      "think"
     ],
     "en": "δ = th in \"this\"",
     "why": "δ is the voiced th."
    },
    {
     "s": "θ sounds like the th in ___",
     "a": "think",
     "o": [
      "this",
      "think"
     ],
     "en": "θ = th in \"think\"",
     "why": "θ is the voiceless th."
    },
    {
     "s": "ζ sounds like ___",
     "a": "z",
     "o": [
      "j",
      "z"
     ],
     "en": "ζ = z",
     "why": "ζ is z, not Telugu జ."
    },
    {
     "s": "τ is like Telugu ___",
     "a": "త",
     "o": [
      "త",
      "ట"
     ],
     "en": "τ = త",
     "why": "Greek t is soft, at the teeth."
    },
    {
     "s": "Θεός means ___",
     "a": "God",
     "o": [
      "God",
      "life",
      "name"
     ],
     "en": "Θεός",
     "why": "Θεός = God."
    }
   ],
   "turn": [
    "Hold a hand in front of your mouth and say θ, then δ: θ blows air, δ buzzes.",
    "Read the syllable lines in turns.",
    "Say Θεός, ζωή and όνομα to each other."
   ],
   "bible": {
    "ref": "John 1:1",
    "koine": "καὶ θεὸς ἦν ὁ λόγος",
    "en": "and the Word was God",
    "note": "θεός begins with θ, today's letter."
   },
   "know": "Early Christians often wrote the name of God in short form, ΘΣ with a line above it, out of reverence. These short forms are called nomina sacra, \"sacred names\"."
  },
  "7": {
   "intro": "The last group: sounds from the back of the mouth, Telugu's క-వర్గం. Then four letters that don't fit the groups: λ, ρ, and the two double letters ξ and ψ. By the end of today you can read every Greek letter.",
   "reading": {
    "title": "Throat sounds with each vowel",
    "drill": true,
    "lines": [
     [
      "κα κε κι κο",
      "ka, ke, ki, ko"
     ],
     [
      "γα γε γι γο",
      "gha, ye, yi, gho"
     ],
     [
      "χα χε χι χο",
      "kha, khe, khi, kho"
     ],
     [
      "λα λε λι λο · ρα ρε ρι ρο",
      "la, le, li, lo · ra, re, ri, ro"
     ],
     [
      "ξα · ψα",
      "ksa · psa"
     ],
     [
      "γάλα · χαρά · ψωμί · λόγος",
      "milk · joy · bread · word"
     ]
    ]
   },
   "tables": [
    {
     "title": "Sounds of the throat, and the rest",
     "tone": "plain",
     "cols": [
      "Letter",
      "Sound",
      "Telugu",
      "Note"
     ],
     "rows": [
      [
       "κ",
       "k",
       "క",
       "no puff of air"
      ],
      [
       "γ",
       "gh; y before e, i",
       "గ; య",
       "voiced partner of χ"
      ],
      [
       "χ",
       "kh",
       "ఖ",
       "voiceless partner of γ"
      ],
      [
       "λ",
       "l",
       "ల",
       "—"
      ],
      [
       "ρ",
       "r",
       "ర",
       "tapped, like Telugu"
      ],
      [
       "ξ",
       "ks",
       "క్స",
       "one letter, two sounds"
      ],
      [
       "ψ",
       "ps",
       "ప్స",
       "one letter, two sounds"
      ]
     ]
    }
   ],
   "drills": [
    {
     "s": "γ before ε sounds like ___",
     "a": "y",
     "o": [
      "g",
      "y"
     ],
     "en": "γε = ye",
     "why": "γ turns into y before e and i."
    },
    {
     "s": "ξ is said ___",
     "a": "ks",
     "o": [
      "x",
      "ks"
     ],
     "en": "ξ = ks",
     "why": "One letter, two sounds."
    },
    {
     "s": "ψ is said ___",
     "a": "ps",
     "o": [
      "s",
      "ps"
     ],
     "en": "ψ = ps",
     "why": "Even at the start: ψωμί = pso-MÍ."
    },
    {
     "s": "χαρά means ___",
     "a": "joy",
     "o": [
      "milk",
      "joy",
      "word"
     ],
     "en": "χαρά",
     "why": "χαρά = joy."
    },
    {
     "s": "λόγος means ___",
     "a": "word",
     "o": [
      "bread",
      "word",
      "road"
     ],
     "en": "λόγος",
     "why": "λόγος = word, as in John 1:1."
    }
   ],
   "turn": [
    "Say γα and then γε: feel the sound move from the throat to the front of the mouth.",
    "Read the syllable lines in turns.",
    "Say the whole alphabet together, by name, one letter each."
   ],
   "bible": {
    "ref": "John 1:1",
    "koine": "Ἐν ἀρχῇ ἦν ὁ λόγος",
    "en": "In the beginning was the Word",
    "note": "λόγος uses λ, γ and ς. You can now read every letter of this verse."
   },
   "know": "χ is the first letter of Χριστός, Christ. That is why \"Xmas\" uses an X: it is really the Greek letter χ."
  },
  "8": {
   "intro": "You know every letter. Now you put them together. Telugu children practise గుణింతాలు, every consonant with every vowel; this lesson is the Greek equivalent, and it is much shorter.",
   "reading": {
    "title": "Syllables, then whole words",
    "drill": true,
    "lines": [
     [
      "κα-λό · καλό",
      "good"
     ],
     [
      "νε-ρό · νερό",
      "water"
     ],
     [
      "βι-βλί-ο · βιβλίο",
      "book"
     ],
     [
      "δρό-μος · δρόμος",
      "road"
     ],
     [
      "θά-λασ-σα · θάλασσα",
      "sea"
     ],
     [
      "τη-λέ-φω-νο · τηλέφωνο",
      "telephone"
     ]
    ]
   },
   "tables": [
    {
     "title": "The Greek గుణింతం",
     "tone": "plain",
     "cols": [
      "",
      "α",
      "ε",
      "ι",
      "ο"
     ],
     "rows": [
      [
       "π",
       "πα",
       "πε",
       "πι",
       "πο"
      ],
      [
       "β",
       "βα",
       "βε",
       "βι",
       "βο"
      ],
      [
       "φ",
       "φα",
       "φε",
       "φι",
       "φο"
      ],
      [
       "μ",
       "μα",
       "με",
       "μι",
       "μο"
      ],
      [
       "τ",
       "τα",
       "τε",
       "τι",
       "το"
      ],
      [
       "δ",
       "δα",
       "δε",
       "δι",
       "δο"
      ],
      [
       "θ",
       "θα",
       "θε",
       "θι",
       "θο"
      ],
      [
       "ν",
       "να",
       "νε",
       "νι",
       "νο"
      ],
      [
       "σ",
       "σα",
       "σε",
       "σι",
       "σο"
      ],
      [
       "ζ",
       "ζα",
       "ζε",
       "ζι",
       "ζο"
      ],
      [
       "κ",
       "κα",
       "κε",
       "κι",
       "κο"
      ],
      [
       "γ",
       "γα",
       "γε",
       "γι",
       "γο"
      ],
      [
       "χ",
       "χα",
       "χε",
       "χι",
       "χο"
      ],
      [
       "λ",
       "λα",
       "λε",
       "λι",
       "λο"
      ],
      [
       "ρ",
       "ρα",
       "ρε",
       "ρι",
       "ρο"
      ]
     ]
    }
   ],
   "drills": [
    {
     "s": "κ + ο = ___",
     "a": "κο",
     "o": [
      "κο",
      "κα",
      "χο"
     ],
     "en": "ko",
     "why": "Letters simply sit side by side."
    },
    {
     "s": "θ + α = ___",
     "a": "θα",
     "o": [
      "θα",
      "δα",
      "τα"
     ],
     "en": "tha",
     "why": "θ + α = θα."
    },
    {
     "s": "όνομα has ___ syllables",
     "a": "3",
     "o": [
      "2",
      "3",
      "4"
     ],
     "en": "ό-νο-μα",
     "why": "One vowel sound per syllable."
    },
    {
     "s": "θάλασσα is said ___",
     "a": "THÁ-la-sa",
     "o": [
      "THÁ-la-sa",
      "tha-LAS-sa"
     ],
     "en": "sea",
     "why": "Double σσ sounds like one s; the accent is on θά."
    }
   ],
   "turn": [
    "Read one row of the syllable table each, taking turns.",
    "One reads a word in syllables; the other says it whole.",
    "Spell a word aloud by letter names; your spouse writes it."
   ],
   "know": "Greek spelling has changed very little in 2,000 years. That is why the same letters work for a shopping list and for the Gospel of John."
  },
  "9": {
   "intro": "Some vowel sounds are written with two letters. Greek writes the u sound only as ου, and it has more spellings for e and i. Today you learn all the vowel pairs, plus the simple rule for αυ and ευ.",
   "reading": {
    "title": "Vowel pairs aloud",
    "drill": true,
    "lines": [
     [
      "ου · αι · ει · οι",
      "u · e · i · i"
     ],
     [
      "ουρανός · και · είναι",
      "heaven · and · is"
     ],
     [
      "οικογένεια",
      "family"
     ],
     [
      "αύριο · αυτό",
      "ÁV-ri-o · af-TÓ"
     ],
     [
      "ευχαριστώ · Ευαγγέλιο",
      "thank you · Gospel"
     ]
    ]
   },
   "tables": [
    {
     "title": "Vowel pairs",
     "tone": "plain",
     "cols": [
      "Pair",
      "Sound",
      "Telugu",
      "Example"
     ],
     "rows": [
      [
       "ου",
       "u",
       "ఉ",
       "ουρανός, heaven"
      ],
      [
       "αι",
       "e",
       "ఎ",
       "και, and"
      ],
      [
       "ει",
       "i",
       "ఇ",
       "είναι, is"
      ],
      [
       "οι",
       "i",
       "ఇ",
       "οικογένεια, family"
      ],
      [
       "αυ",
       "av / af",
       "అవ్ / అఫ్",
       "αύριο · αυτό"
      ],
      [
       "ευ",
       "ev / ef",
       "ఎవ్ / ఎఫ్",
       "Ευαγγέλιο · ευχαριστώ"
      ]
     ]
    }
   ],
   "drills": [
    {
     "s": "ου sounds like ___",
     "a": "u",
     "o": [
      "o",
      "u"
     ],
     "en": "ου = u",
     "why": "ου is the only spelling of u."
    },
    {
     "s": "αι sounds like ___",
     "a": "e",
     "o": [
      "ai",
      "e"
     ],
     "en": "αι = e",
     "why": "αι is e."
    },
    {
     "s": "οι sounds like ___",
     "a": "i",
     "o": [
      "oi",
      "i"
     ],
     "en": "οι = i",
     "why": "οι is another i."
    },
    {
     "s": "In αυτό, αυ sounds like ___",
     "a": "af",
     "o": [
      "av",
      "af"
     ],
     "en": "af-TÓ",
     "why": "τ is voiceless, so f."
    },
    {
     "s": "In αύριο, αυ sounds like ___",
     "a": "av",
     "o": [
      "av",
      "af"
     ],
     "en": "ÁV-ri-o",
     "why": "ρ is voiced, so v."
    }
   ],
   "turn": [
    "Read the pairs in turns: ου, αι, ει, οι.",
    "One says a word with αυ or ευ; the other says whether it is v or f.",
    "Say ευχαριστώ to each other, carefully, with f."
   ],
   "bible": {
    "ref": "Mark 1:1",
    "koine": "Ἀρχὴ τοῦ εὐαγγελίου Ἰησοῦ Χριστοῦ",
    "en": "The beginning of the gospel of Jesus Christ",
    "note": "εὐαγγέλιον (\"good news\") starts with ευ, said ev: εὖ (good) + ἄγγελος (messenger)."
   },
   "know": "Greek now has six ways to write the i sound: ι, η, υ, ει, οι and υι. Greek schoolchildren find spelling hard too."
  },
  "10": {
   "intro": "The last spellings. Ancient Greek had b, d and g sounds; over time its own letters for them changed sound, so modern Greek writes b, d and g with pairs. After today there is no Greek spelling you can't read.",
   "reading": {
    "title": "Consonant pairs aloud",
    "drill": true,
    "lines": [
     [
      "μπα · ντα · γκα",
      "ba · da · ga"
     ],
     [
      "τσα · τζα",
      "tsa · dza"
     ],
     [
      "μπαμπάς · ντομάτα",
      "dad · tomato"
     ],
     [
      "άγγελος · Ευαγγέλιο",
      "angel · Gospel"
     ],
     [
      "τσάι",
      "tea"
     ]
    ]
   },
   "tables": [
    {
     "title": "Consonant pairs",
     "tone": "plain",
     "cols": [
      "Pair",
      "Sound",
      "Telugu",
      "Example"
     ],
     "rows": [
      [
       "μπ",
       "b",
       "బ",
       "μπαμπάς, dad"
      ],
      [
       "ντ",
       "d",
       "డ",
       "ντομάτα, tomato"
      ],
      [
       "γκ",
       "g",
       "గ",
       "γκαράζ, garage"
      ],
      [
       "γγ",
       "ng",
       "ంగ",
       "άγγελος, angel"
      ],
      [
       "τσ",
       "ts",
       "త్స",
       "τσάι, tea"
      ],
      [
       "τζ",
       "dz",
       "ద్జ",
       "τζάμι, window pane"
      ]
     ]
    }
   ],
   "drills": [
    {
     "s": "μπ sounds like ___",
     "a": "b",
     "o": [
      "mp",
      "b"
     ],
     "en": "μπ = b",
     "why": "Greek has no single letter for b."
    },
    {
     "s": "ντ sounds like ___",
     "a": "d",
     "o": [
      "nt",
      "d"
     ],
     "en": "ντ = d",
     "why": "ντ is d."
    },
    {
     "s": "In άγγελος, γγ sounds like ___",
     "a": "ng",
     "o": [
      "gg",
      "ng"
     ],
     "en": "ÁN-ge-los",
     "why": "γγ is ng."
    },
    {
     "s": "μπαμπάς means ___",
     "a": "dad",
     "o": [
      "dad",
      "tea",
      "angel"
     ],
     "en": "μπαμπάς",
     "why": "μπαμπάς = dad."
    }
   ],
   "turn": [
    "Read the pairs in turns.",
    "Say μπαμπάς and μαμά, and tell each other one memory of your parents.",
    "Read άγγελος and Ευαγγέλιο slowly together."
   ],
   "bible": {
    "ref": "Luke 2:10",
    "koine": "καὶ εἶπεν αὐτοῖς ὁ ἄγγελος· μὴ φοβεῖσθε",
    "en": "And the angel said to them: \"Do not be afraid.\"",
    "note": "ἄγγελος, with γγ said ng. Notice the raised dot ·: it is the Greek semicolon, here introducing speech."
   },
   "know": "Ευαγγέλιο and άγγελος share a root: an angel is literally a messenger, and the Gospel is good news."
  },
  "11": {
   "intro": "You can pronounce every letter. The last piece is rhythm: every Greek word of two or more syllables has one stressed syllable, marked with an accent, and getting it wrong can change the meaning. You also learn Greek punctuation, which has two surprises.",
   "reading": {
    "title": "Read with the right stress",
    "drill": true,
    "lines": [
     [
      "πότε — ποτέ",
      "when — never"
     ],
     [
      "γέρος — γερός",
      "old man — strong"
     ],
     [
      "όνομα · ημέρα · καλά",
      "Ó-no-ma · i-MÉ-ra · ka-LÁ"
     ],
     [
      "Πότε;",
      "When?"
     ],
     [
      "Ποτέ!",
      "Never!"
     ]
    ]
   },
   "tables": [
    {
     "title": "Marks and punctuation",
     "tone": "plain",
     "cols": [
      "Mark",
      "Name",
      "What it does"
     ],
     "rows": [
      [
       "ά",
       "accent (τόνος)",
       "stress this syllable"
      ],
      [
       "ϊ",
       "diaeresis",
       "say this letter separately"
      ],
      [
       ";",
       "question mark",
       "like English ?"
      ],
      [
       "·",
       "raised dot",
       "like English ; or :"
      ],
      [
       "ἀ ἁ ὰ ῆ",
       "old marks (Bible texts)",
       "not pronounced today"
      ]
     ]
    }
   ],
   "drills": [
    {
     "s": "πότε means ___",
     "a": "when",
     "o": [
      "when",
      "never"
     ],
     "en": "PÓ-te",
     "why": "Stress on the first syllable: when."
    },
    {
     "s": "ποτέ means ___",
     "a": "never",
     "o": [
      "when",
      "never"
     ],
     "en": "po-TÉ",
     "why": "Stress on the last syllable: never."
    },
    {
     "s": "όνομα is said ___",
     "a": "Ó-no-ma",
     "o": [
      "Ó-no-ma",
      "o-NÓ-ma"
     ],
     "en": "name",
     "why": "The accent is on ό."
    },
    {
     "s": "The Greek ; means ___",
     "a": "?",
     "o": [
      "?",
      ";"
     ],
     "en": "question mark",
     "why": "Greek ; is the question mark."
    }
   ],
   "turn": [
    "Ask Πότε; and answer Ποτέ! with the stress in the right place.",
    "Read three long words from earlier lessons and clap on the stressed syllable.",
    "Find a ; in any Greek text and read the question aloud."
   ],
   "know": "Greek used the full set of ancient accents and breathings until 1982, when schools switched to the single accent mark you learned today."
  },
  "12": {
   "intro": "Twelve lessons ago you saw 24 unfamiliar shapes. Today you read real Greek: words English borrowed, names, places, signs in capitals, and the opening of the Gospel of John. The aim is to read everything aloud correctly, not to understand every word.",
   "reading": {
    "title": "Real Greek",
    "drill": true,
    "lines": [
     [
      "τηλέφωνο · μουσική · θέατρο · πρόβλημα",
      "telephone · music · theatre · problem"
     ],
     [
      "ΕΛΛΑΔΑ · ΑΘΗΝΑ",
      "Greece · Athens, in capitals as on signs"
     ],
     [
      "Ιησούς Χριστός",
      "Jesus Christ"
     ],
     [
      "Η Βίβλος",
      "The Bible"
     ],
     [
      "Ἐν ἀρχῇ ἦν ὁ λόγος, καὶ ὁ λόγος ἦν πρὸς τὸν θεόν.",
      "In the beginning was the Word, and the Word was with God. (John 1:1)"
     ]
    ]
   },
   "drills": [
    {
     "s": "Χριστός begins with the letter ___",
     "a": "khi",
     "o": [
      "khi",
      "ksi",
      "kappa"
     ],
     "en": "Χ = khi",
     "why": "Χ is khi."
    },
    {
     "s": "Αθήνα is said ___",
     "a": "a-THÍ-na",
     "o": [
      "a-THÍ-na",
      "A-the-na"
     ],
     "en": "Athens",
     "why": "θ is th, η is i, and the accent is on ή."
    },
    {
     "s": "μουσική means ___",
     "a": "music",
     "o": [
      "music",
      "theatre",
      "problem"
     ],
     "en": "μουσική",
     "why": "μουσική = music."
    }
   ],
   "turn": [
    "Read John 1:1 to each other, slowly, then a little faster.",
    "Find any Greek text (a Greek Bible, a label, a website) and read one line aloud.",
    "Say the whole alphabet together, by name, one last time."
   ],
   "bible": {
    "ref": "John 1:1",
    "koine": "Ἐν ἀρχῇ ἦν ὁ λόγος, καὶ ὁ λόγος ἦν πρὸς τὸν θεόν, καὶ θεὸς ἦν ὁ λόγος.",
    "en": "In the beginning was the Word, and the Word was with God, and the Word was God.",
    "note": "You can read this whole verse aloud now. Understanding it word by word comes in the Bible bridge phase, around lesson 185."
   }
  },
  "13": {
   "intro": "Now that you can read, the course turns to speaking. Every conversation starts with a greeting, and Greek greetings depend on the time of day and on who you are talking to.",
   "reading": {
    "title": "A day of greetings",
    "lines": [
     [
      "Το πρωί ο Νίκος λέει: «Καλημέρα!»",
      "In the morning Nikos says: \"Good morning!\""
     ],
     [
      "Το βράδυ η Ελένη λέει: «Καλησπέρα!»",
      "In the evening Eleni says: \"Good evening!\""
     ],
     [
      "Στη γιαγιά λένε: «Γεια σας!»",
      "To grandmother they say: \"Hello!\" (polite)"
     ],
     [
      "Και πριν τον ύπνο: «Καληνύχτα.»",
      "And before sleep: \"Good night.\""
     ]
    ],
    "gloss": [
     [
      "το πρωί",
      "in the morning"
     ],
     [
      "λέει / λένε",
      "says / they say"
     ],
     [
      "το βράδυ",
      "in the evening"
     ],
     [
      "στη γιαγιά",
      "to grandmother"
     ],
     [
      "πριν τον ύπνο",
      "before sleep"
     ]
    ]
   },
   "drills": [
    {
     "s": "At 8 in the morning you say ___",
     "a": "Καλημέρα",
     "o": [
      "Καλημέρα",
      "Καλησπέρα",
      "Καληνύχτα"
     ],
     "en": "Good morning",
     "why": "Καλημέρα until about midday."
    },
    {
     "s": "At 7 in the evening you say ___",
     "a": "Καλησπέρα",
     "o": [
      "Καλημέρα",
      "Καλησπέρα",
      "Καληνύχτα"
     ],
     "en": "Good evening",
     "why": "Καλησπέρα from the afternoon on."
    },
    {
     "s": "To your grandmother you say ___",
     "a": "Γεια σας",
     "o": [
      "Γεια σου",
      "Γεια σας"
     ],
     "en": "Hello (polite)",
     "why": "Γεια σας is polite, like మీరు."
    },
    {
     "s": "Before bed you say ___",
     "a": "Καληνύχτα",
     "o": [
      "Καλημέρα",
      "Καληνύχτα"
     ],
     "en": "Good night",
     "why": "Καληνύχτα when parting at night."
    }
   ],
   "turn": [
    "Greet each other in Greek every time you meet today, using the right greeting for the time.",
    "Ask Τι κάνεις; and answer Καλά, εσύ;",
    "Practise Γεια σας as if greeting an elder at church."
   ],
   "know": "Γεια comes from υγεία, \"health\". Every Γεια σου wishes someone good health."
  },
  "14": {
   "intro": "Small polite words do a lot of work in any language. Today you learn please, thank you, sorry, yes and no, and the three words every couple needs.",
   "reading": {
    "title": "Little words at dinner",
    "lines": [
     [
      "«Νερό;» ρωτάει η Ελένη.",
      "\"Water?\" asks Eleni."
     ],
     [
      "«Ναι, ευχαριστώ.»",
      "\"Yes, thank you.\""
     ],
     [
      "«Παρακαλώ.»",
      "\"You're welcome.\""
     ],
     [
      "Ο Νίκος ρίχνει το νερό. «Συγγνώμη!»",
      "Nikos spills the water. \"Sorry!\""
     ],
     [
      "«Δεν πειράζει.»",
      "\"No problem.\""
     ],
     [
      "«Σ' αγαπώ.» «Κι εγώ σ' αγαπώ.»",
      "\"I love you.\" \"I love you too.\""
     ]
    ],
    "gloss": [
     [
      "νερό",
      "water"
     ],
     [
      "ρωτάει",
      "asks"
     ],
     [
      "ρίχνει",
      "spills"
     ]
    ]
   },
   "drills": [
    {
     "s": "ναι means ___",
     "a": "yes",
     "o": [
      "yes",
      "no"
     ],
     "en": "ναι = yes",
     "why": "ναι sounds like \"ne\" but means yes."
    },
    {
     "s": "The answer to Ευχαριστώ is ___",
     "a": "Παρακαλώ",
     "o": [
      "Παρακαλώ",
      "Συγγνώμη"
     ],
     "en": "You're welcome",
     "why": "παρακαλώ = you're welcome."
    },
    {
     "s": "The answer to Συγγνώμη is ___",
     "a": "Δεν πειράζει",
     "o": [
      "Δεν πειράζει",
      "Ευχαριστώ"
     ],
     "en": "No problem",
     "why": "Δεν πειράζει = it's fine."
    }
   ],
   "turn": [
    "Use ευχαριστώ and παρακαλώ at every meal this week.",
    "Say Σ' αγαπώ and answer Κι εγώ σ' αγαπώ.",
    "Bump into each other on purpose: Συγγνώμη! Δεν πειράζει."
   ],
   "bible": {
    "ref": "1 John 4:19",
    "koine": "ἡμεῖς ἀγαπῶμεν, ὅτι αὐτὸς πρῶτος ἠγάπησεν ἡμᾶς",
    "en": "We love, because he first loved us.",
    "note": "ἀγαπῶμεν and ἠγάπησεν are forms of αγαπώ, the verb in Σ' αγαπώ."
   }
  },
  "15": {
   "setting": "Pretend you are meeting for the first time.",
   "turn": [
    "Introduce yourselves with your real names: Με λένε…",
    "Ask Πώς σε λένε; and answer.",
    "Say Χαίρω πολύ and shake hands."
   ],
   "drills": [
    {
     "s": "Εγώ ___ καλά.",
     "a": "είμαι",
     "o": [
      "είμαι",
      "είσαι"
     ],
     "en": "I am fine.",
     "why": "With εγώ, the verb is είμαι."
    },
    {
     "s": "Εσύ ___ καλά;",
     "a": "είσαι",
     "o": [
      "είμαι",
      "είσαι"
     ],
     "en": "Are you fine?",
     "why": "With εσύ, the verb is είσαι."
    }
   ],
   "spot": {
    "w": [
     "Εσύ",
     "είμαι",
     "καλά;"
    ],
    "wrong": 1,
    "fix": "είσαι",
    "en": "Are you fine?",
    "why": "With εσύ, the verb is είσαι."
   },
   "know": "Χαίρω πολύ means \"I rejoice a lot\". It shares its root with χαρά, joy.",
   "intro": "Each lesson now has a short reading about Νίκος and Ελένη, a married couple much like you. Today we go back to the day they first met. You learn to say who you are and to ask someone's name.",
   "reading": {
    "title": "The first meeting",
    "lines": [
     [
      "Γεια σου! Με λένε Νίκο.",
      "Hi! My name is Nikos."
     ],
     [
      "Είμαι ο Νίκος.",
      "I am Nikos."
     ],
     [
      "Εσύ; Πώς σε λένε;",
      "And you? What's your name?"
     ],
     [
      "Με λένε Ελένη.",
      "My name is Eleni."
     ],
     [
      "Χαίρω πολύ, Ελένη!",
      "Nice to meet you, Eleni!"
     ],
     [
      "Κι εγώ, Νίκο.",
      "Me too, Nikos."
     ]
    ],
    "gloss": [
     [
      "Νίκο",
      "Nikos, when someone names him or talks to him"
     ]
    ]
   }
  },
  "16": {
   "setting": "A friend visits. Introduce each other.",
   "turn": [
    "Introduce each other to an imaginary guest.",
    "Point at people in a family photo: Αυτός είναι… / Αυτή είναι…",
    "Say ο άντρας μου or η γυναίκα μου, whichever fits you."
   ],
   "drills": [
    {
     "s": "___ άντρας μου",
     "a": "ο",
     "o": [
      "ο",
      "η"
     ],
     "en": "my husband",
     "why": "άντρας is masculine: ο."
    },
    {
     "s": "___ γυναίκα μου",
     "a": "η",
     "o": [
      "ο",
      "η"
     ],
     "en": "my wife",
     "why": "γυναίκα is feminine: η."
    }
   ],
   "spot": {
    "w": [
     "Αυτός",
     "είναι",
     "η",
     "γυναίκα",
     "μου."
    ],
    "wrong": 0,
    "fix": "Αυτή",
    "en": "This is my wife.",
    "why": "For a woman, \"this\" is αυτή."
   },
   "bible": {
    "ref": "Ephesians 5:25",
    "koine": "Οἱ ἄνδρες, ἀγαπᾶτε τὰς γυναῖκας",
    "en": "Husbands, love your wives",
    "note": "ἄνδρες and γυναῖκας are the plurals of today's άντρας and γυναίκα."
   },
   "intro": "Today Nikos and Eleni are married, and they introduce each other to a friend. You learn he and she, and the two words for \"the\": ο for him and η for her.",
   "reading": {
    "title": "Meet my wife",
    "lines": [
     [
      "Αυτός είναι ο Νίκος.",
      "This is Nikos."
     ],
     [
      "Αυτή είναι η Ελένη.",
      "This is Eleni."
     ],
     [
      "Ο Νίκος λέει: «Αυτή είναι η γυναίκα μου.»",
      "Nikos says: \"This is my wife.\""
     ],
     [
      "Η Ελένη λέει: «Και αυτός είναι ο άντρας μου.»",
      "Eleni says: \"And this is my husband.\""
     ],
     [
      "Ο φίλος τους λέει: «Χαίρω πολύ!»",
      "Their friend says: \"Nice to meet you!\""
     ]
    ],
    "gloss": [
     [
      "λέει",
      "says"
     ],
     [
      "ο φίλος",
      "the friend"
     ],
     [
      "τους",
      "their"
     ]
    ]
   }
  },
  "17": {
   "setting": "Sunday evening. One of you comes home from work.",
   "turn": [
    "Ask each other Πώς είσαι; and answer honestly, with your own ending.",
    "Name one feeling from your day, then say why in English or Telugu.",
    "Finish with Είμαι χαρούμενος / χαρούμενη γιατί είμαστε μαζί."
   ],
   "table": {
    "tone": "gender",
    "cols": [
     "A man says",
     "A woman says"
    ],
    "rows": [
     [
      "χαρούμενος",
      "χαρούμενη"
     ],
     [
      "κουρασμένος",
      "κουρασμένη"
     ],
     [
      "λυπημένος",
      "λυπημένη"
     ],
     [
      "ήρεμος",
      "ήρεμη"
     ]
    ]
   },
   "drills": [
    {
     "s": "Ο άντρας μου είναι χαρούμεν___.",
     "a": "ος",
     "o": [
      "ος",
      "η"
     ],
     "en": "My husband is happy.",
     "why": "A man: -ος."
    },
    {
     "s": "Η γυναίκα μου είναι ήρεμ___.",
     "a": "η",
     "o": [
      "ος",
      "η"
     ],
     "en": "My wife is calm.",
     "why": "A woman: -η."
    }
   ],
   "spot": {
    "w": [
     "Η",
     "γυναίκα",
     "μου",
     "είναι",
     "κουρασμένος."
    ],
    "wrong": 4,
    "fix": "κουρασμένη",
    "en": "My wife is tired.",
    "why": "She is a woman, so the ending is -η."
   },
   "bible": {
    "ref": "Galatians 5:22",
    "koine": "ὁ δὲ καρπὸς τοῦ πνεύματός ἐστιν ἀγάπη, χαρά, εἰρήνη",
    "en": "But the fruit of the Spirit is love, joy, peace",
    "note": "χαρούμενος (joyful) comes from χαρά. λυπημένος comes from λύπη, the sorrow Jesus felt in Gethsemane (Matthew 26:38)."
   },
   "know": "Greeks rarely answer \"fine\" automatically. Έτσι κι έτσι (\"so-so\") is a normal, honest answer.",
   "intro": "How are you feeling? In Greek, the answer changes depending on whether a man or a woman is speaking. Telugu does something very similar, so this will feel natural.",
   "reading": {
    "title": "Sunday evening",
    "lines": [
     [
      "Είναι Κυριακή βράδυ.",
      "It is Sunday evening."
     ],
     [
      "Ο Νίκος είναι στο σπίτι.",
      "Nikos is at home."
     ],
     [
      "Η Ελένη έρχεται.",
      "Eleni comes in."
     ],
     [
      "«Γεια σου, αγάπη μου! Πώς είσαι;»",
      "\"Hi, my love! How are you?\""
     ],
     [
      "«Είμαι κουρασμένη. Εσύ;»",
      "\"I'm tired. You?\""
     ],
     [
      "«Εγώ είμαι χαρούμενος. Και ήρεμος.»",
      "\"I'm happy. And calm.\""
     ],
     [
      "Η Ελένη δεν είναι λυπημένη. Είναι απλώς κουρασμένη.",
      "Eleni isn't sad. She is just tired."
     ]
    ],
    "gloss": [
     [
      "Κυριακή",
      "Sunday"
     ],
     [
      "βράδυ",
      "evening"
     ],
     [
      "στο σπίτι",
      "at home"
     ],
     [
      "έρχεται",
      "comes"
     ],
     [
      "δεν",
      "not"
     ],
     [
      "απλώς",
      "just"
     ]
    ]
   }
  },
  "18": {
   "setting": "Looking for things around the house.",
   "turn": [
    "Point at things and ask Τι είναι αυτό;",
    "Hide something and ask Πού είναι…; Answer Εδώ! or Εκεί!",
    "Ask each other one real Γιατί; question."
   ],
   "drills": [
    {
     "s": "___ είσαι; (Where are you?)",
     "a": "Πού",
     "o": [
      "Πού",
      "Πώς",
      "Τι"
     ],
     "en": "Where are you?",
     "why": "πού means where."
    },
    {
     "s": "___ είσαι; (How are you?)",
     "a": "Πώς",
     "o": [
      "Πού",
      "Πώς",
      "Τι"
     ],
     "en": "How are you?",
     "why": "πώς means how."
    }
   ],
   "bible": {
    "ref": "John 1:38",
    "koine": "Ῥαββί… ποῦ μένεις;",
    "en": "Rabbi… where are you staying?",
    "note": "ποῦ is today's πού. The first question the disciples asked Jesus."
   },
   "intro": "Questions keep a conversation going. Today you learn where, how, who, why and what, and how Greek marks a question with a sign that looks like a semicolon.",
   "reading": {
    "title": "Where is the phone?",
    "lines": [
     [
      "Η Ελένη ψάχνει κάτι.",
      "Eleni is looking for something."
     ],
     [
      "«Νίκο, πού είναι το τηλέφωνο;»",
      "\"Nikos, where is the phone?\""
     ],
     [
      "«Εκεί!»",
      "\"There!\""
     ],
     [
      "«Πού; Εδώ;»",
      "\"Where? Here?\""
     ],
     [
      "«Όχι, εκεί!»",
      "\"No, there!\""
     ],
     [
      "«Α, ναι! Και τι είναι αυτό;»",
      "\"Ah, yes! And what is this?\""
     ],
     [
      "«Είναι το βιβλίο μου.»",
      "\"It's my book.\""
     ]
    ],
    "gloss": [
     [
      "ψάχνει",
      "is looking for"
     ],
     [
      "κάτι",
      "something"
     ],
     [
      "το βιβλίο",
      "the book"
     ]
    ]
   }
  },
  "19": {
   "setting": "Checking plans for the evening.",
   "turn": [
    "Ask each other three yes/no questions and answer with δεν.",
    "Answer one question with ίσως and one with βέβαια.",
    "Say Δεν ξέρω honestly about something."
   ],
   "drills": [
    {
     "s": "___ ξέρω.",
     "a": "Δεν",
     "o": [
      "Δεν",
      "Όχι"
     ],
     "en": "I don't know.",
     "why": "δεν goes before a verb."
    },
    {
     "s": "Όχι, ___ είμαι κουρασμένη.",
     "a": "δεν",
     "o": [
      "δεν",
      "όχι"
     ],
     "en": "No, I'm not tired.",
     "why": "Όχι answers the question; δεν makes the verb negative."
    }
   ],
   "know": "Greeks often use both together: Όχι, δεν ξέρω. \"No, I don't know.\"",
   "intro": "Saying no, not, maybe and of course. Greek puts δεν in front of the verb, where Telugu puts \"not\" at the end.",
   "reading": {
    "title": "Saturday plans",
    "lines": [
     [
      "Είναι Σάββατο.",
      "It is Saturday."
     ],
     [
      "«Είσαι κουρασμένος;» ρωτάει η Ελένη.",
      "\"Are you tired?\" Eleni asks."
     ],
     [
      "«Όχι, δεν είμαι κουρασμένος.»",
      "\"No, I'm not tired.\""
     ],
     [
      "«Πάμε για καφέ;»",
      "\"Shall we go for coffee?\""
     ],
     [
      "«Ίσως… Δεν ξέρω.»",
      "\"Maybe… I don't know.\""
     ],
     [
      "«Νίκο!»",
      "\"Nikos!\""
     ],
     [
      "«Εντάξει, βέβαια! Πάμε!»",
      "\"OK, of course! Let's go!\""
     ]
    ],
    "gloss": [
     [
      "Σάββατο",
      "Saturday"
     ],
     [
      "ρωτάει",
      "asks"
     ],
     [
      "για καφέ",
      "for coffee"
     ]
    ]
   }
  },
  "20": {
   "setting": "Sitting together on a quiet evening.",
   "turn": [
    "Hold hands and say Είμαστε μαζί.",
    "Point at a family photo: Αυτοί είναι…",
    "Greet an imagined elder politely: Πώς είστε;"
   ],
   "table": {
    "tone": "plain",
    "cols": [
     "Who",
     "is / are"
    ],
    "rows": [
     [
      "εγώ",
      "είμαι"
     ],
     [
      "εσύ",
      "είσαι"
     ],
     [
      "αυτός / αυτή",
      "είναι"
     ],
     [
      "εμείς",
      "είμαστε"
     ],
     [
      "εσείς",
      "είστε"
     ],
     [
      "αυτοί",
      "είναι"
     ]
    ]
   },
   "drills": [
    {
     "s": "Εμείς ___ μαζί.",
     "a": "είμαστε",
     "o": [
      "είμαστε",
      "είστε",
      "είναι"
     ],
     "en": "We are together.",
     "why": "εμείς → είμαστε."
    },
    {
     "s": "Εσείς ___ καλά;",
     "a": "είστε",
     "o": [
      "είμαστε",
      "είστε",
      "είναι"
     ],
     "en": "Are you (all) well?",
     "why": "εσείς → είστε."
    }
   ],
   "bible": {
    "ref": "Matthew 18:20",
    "koine": "οὗ γάρ εἰσιν δύο ἢ τρεῖς συνηγμένοι εἰς τὸ ἐμὸν ὄνομα, ἐκεῖ εἰμι ἐν μέσῳ αὐτῶν",
    "en": "For where two or three are gathered in my name, there am I among them.",
    "note": "εἰσιν (they are) and εἰμι (I am) are the old forms of είναι and είμαι."
   },
   "intro": "We, you (plural) and they, and the whole verb \"to be\". You also learn μαζί, together, the word this app is named after.",
   "reading": {
    "title": "At church",
    "lines": [
     [
      "Ο Νίκος και η Ελένη είναι μαζί δέκα χρόνια.",
      "Nikos and Eleni have been together for ten years."
     ],
     [
      "Σήμερα είναι στην εκκλησία.",
      "Today they are at church."
     ],
     [
      "Ένας φίλος λέει: «Πώς είστε;»",
      "A friend says: \"How are you both?\""
     ],
     [
      "«Είμαστε καλά, ευχαριστώ. Εσείς;»",
      "\"We are well, thank you. And you?\""
     ],
     [
      "«Κι εμείς είμαστε καλά. Δόξα τω Θεώ!»",
      "\"We are well too. Thank God!\""
     ]
    ],
    "gloss": [
     [
      "δέκα χρόνια",
      "ten years"
     ],
     [
      "σήμερα",
      "today"
     ],
     [
      "στην εκκλησία",
      "at church"
     ],
     [
      "ένας φίλος",
      "a friend"
     ]
    ]
   }
  },
  "21": {
   "setting": "Counting things on the table.",
   "turn": [
    "Count spoons, cups and fingers together, in Greek.",
    "Ask Πόσα; about things in the room and answer.",
    "Count backwards from πέντε to ένα."
   ],
   "bible": {
    "ref": "John 6:9",
    "koine": "πέντε ἄρτους κριθίνους καὶ δύο ὀψάρια",
    "en": "five barley loaves and two fish",
    "note": "πέντε and δύο are the numbers you just learned."
   },
   "intro": "The numbers one to five. You will notice they sound like their Sanskrit cousins, which you already know from Telugu words.",
   "reading": {
    "title": "Counting eggs",
    "lines": [
     [
      "Η Ελένη μετράει.",
      "Eleni is counting."
     ],
     [
      "«Ένα, δύο, τρία, τέσσερα, πέντε.»",
      "\"One, two, three, four, five.\""
     ],
     [
      "«Πόσα;» ρωτάει ο Νίκος.",
      "\"How many?\" asks Nikos."
     ],
     [
      "«Πέντε αυγά.»",
      "\"Five eggs.\""
     ],
     [
      "«Πέντε; Όχι, τέσσερα!»",
      "\"Five? No, four!\""
     ],
     [
      "«Α, ναι. Τέσσερα.»",
      "\"Ah, yes. Four.\""
     ]
    ],
    "gloss": [
     [
      "μετράει",
      "is counting"
     ],
     [
      "αυγά",
      "eggs"
     ]
    ]
   }
  },
  "22": {
   "setting": "Getting ready to leave the house.",
   "turn": [
    "Ask Τι ώρα είναι; three times today.",
    "Say the time right now: Είναι…",
    "Count from one to ten together, taking turns."
   ],
   "bible": {
    "ref": "Matthew 18:22",
    "koine": "ἕως ἑβδομηκοντάκις ἑπτά",
    "en": "seventy times seven",
    "note": "ἑπτά is επτά, the formal spelling of εφτά. Jesus on forgiveness."
   },
   "intro": "The numbers six to ten, and how to ask and tell the time. After today you can count to ten and plan when to leave.",
   "reading": {
    "title": "Sunday morning",
    "lines": [
     [
      "Είναι Κυριακή πρωί.",
      "It is Sunday morning."
     ],
     [
      "«Τι ώρα είναι;» ρωτάει η Ελένη.",
      "\"What time is it?\" asks Eleni."
     ],
     [
      "«Είναι εννιά.»",
      "\"It's nine.\""
     ],
     [
      "«Εννιά; Η εκκλησία είναι στις δέκα!»",
      "\"Nine? Church is at ten!\""
     ],
     [
      "«Εντάξει, έχουμε χρόνο.»",
      "\"OK, we have time.\""
     ],
     [
      "«Όχι πολύ! Πάμε!»",
      "\"Not much! Let's go!\""
     ]
    ],
    "gloss": [
     [
      "πρωί",
      "morning"
     ],
     [
      "στις δέκα",
      "at ten"
     ],
     [
      "έχουμε χρόνο",
      "we have time"
     ]
    ]
   }
  },
  "23": {
   "setting": "A message in the middle of the day.",
   "turn": [
    "Send one of today's phrases to each other on WhatsApp, in Greek.",
    "Say Είσαι όμορφη / όμορφος with the right ending.",
    "Tell each other Είμαι τυχερός / τυχερή."
   ],
   "drills": [
    {
     "s": "Είσαι όμορφ___! (to her)",
     "a": "η",
     "o": [
      "ος",
      "η"
     ],
     "en": "You are beautiful!",
     "why": "To a woman: -η."
    },
    {
     "s": "Είμαι τυχερ___. (a man)",
     "a": "ός",
     "o": [
      "ός",
      "ή"
     ],
     "en": "I am lucky.",
     "why": "A man: -ός."
    }
   ],
   "bible": {
    "ref": "Song of Songs 4:1",
    "koine": "Ἰδοὺ εἶ καλή, ἡ πλησίον μου",
    "en": "Behold, you are beautiful, my love",
    "note": "From the Septuagint, the Greek Old Testament. εἶ is the old form of είσαι."
   },
   "intro": "Words of love. You learn how Greek couples talk to each other, and a small word, μου, that means both \"my\" and \"to me\".",
   "reading": {
    "title": "A message from work",
    "lines": [
     [
      "Ο Νίκος είναι στη δουλειά.",
      "Nikos is at work."
     ],
     [
      "Γράφει στην Ελένη:",
      "He writes to Eleni:"
     ],
     [
      "«Μου λείπεις, καρδιά μου.»",
      "\"I miss you, sweetheart.\""
     ],
     [
      "Η Ελένη γράφει: «Κι εσύ μου λείπεις, μωρό μου.»",
      "Eleni writes: \"I miss you too, my baby.\""
     ],
     [
      "«Είμαι τυχερός που σε έχω.»",
      "\"I'm lucky to have you.\""
     ],
     [
      "«Κι εγώ είμαι τυχερή. Φιλάκια!»",
      "\"I'm lucky too. Kisses!\""
     ]
    ],
    "gloss": [
     [
      "στη δουλειά",
      "at work"
     ],
     [
      "γράφει",
      "writes"
     ],
     [
      "που σε έχω",
      "to have you"
     ]
    ]
   }
  },
  "24": {
   "setting": "Breakfast, all in Greek.",
   "turn": [
    "Do the breakfast dialogue at the real table tomorrow.",
    "Ask Κοιμήθηκες καλά; every morning this week.",
    "Add one thing of your own to the conversation."
   ],
   "know": "You now know about 70 Greek words and phrases. That is enough for a real breakfast conversation.",
   "intro": "The second checkpoint. Everything from the last ten lessons comes together in one breakfast conversation, and you will understand all of it.",
   "reading": {
    "title": "Breakfast",
    "lines": [
     [
      "Είναι πρωί. Ο Νίκος και η Ελένη είναι στην κουζίνα.",
      "It is morning. Nikos and Eleni are in the kitchen."
     ],
     [
      "«Καλημέρα, αγάπη μου! Κοιμήθηκες καλά;»",
      "\"Good morning, my love! Did you sleep well?\""
     ],
     [
      "«Ναι, πολύ καλά. Εσύ;»",
      "\"Yes, very well. You?\""
     ],
     [
      "«Όχι πολύ. Είμαι λίγο κουρασμένος.»",
      "\"Not really. I'm a little tired.\""
     ],
     [
      "«Τσάι;» «Ναι, ευχαριστώ.»",
      "\"Tea?\" \"Yes, thank you.\""
     ],
     [
      "«Καλή όρεξη!»",
      "\"Enjoy your breakfast!\""
     ],
     [
      "Η Ελένη είναι χαρούμενη. Ο Νίκος είναι κουρασμένος, αλλά χαρούμενος.",
      "Eleni is happy. Nikos is tired, but happy."
     ]
    ],
    "gloss": [
     [
      "στην κουζίνα",
      "in the kitchen"
     ],
     [
      "λίγο",
      "a little"
     ],
     [
      "αλλά",
      "but"
     ]
    ]
   }
  },
  "25": {
   "setting": "Planning a coffee date.",
   "turn": [
    "Ask Έχεις χρόνο; and plan a real coffee date.",
    "Say one thing you have: Έχω…",
    "Say one thing you don't have: Δεν έχω…"
   ],
   "table": {
    "tone": "plain",
    "cols": [
     "Who",
     "have"
    ],
    "rows": [
     [
      "εγώ",
      "έχω"
     ],
     [
      "εσύ",
      "έχεις"
     ],
     [
      "αυτός / αυτή",
      "έχει"
     ],
     [
      "εμείς",
      "έχουμε"
     ],
     [
      "εσείς",
      "έχετε"
     ],
     [
      "αυτοί",
      "έχουν"
     ]
    ]
   },
   "drills": [
    {
     "s": "Εγώ ___ χρόνο.",
     "a": "έχω",
     "o": [
      "έχω",
      "έχεις",
      "έχει"
     ],
     "en": "I have time.",
     "why": "εγώ → έχω."
    },
    {
     "s": "Εσύ ___ χρόνο;",
     "a": "έχεις",
     "o": [
      "έχω",
      "έχεις",
      "έχει"
     ],
     "en": "Do you have time?",
     "why": "εσύ → έχεις."
    }
   ],
   "bible": {
    "ref": "John 3:16",
    "koine": "ἀλλ᾽ ἔχῃ ζωὴν αἰώνιον",
    "en": "but have eternal life",
    "note": "ἔχῃ is a form of έχω, \"I have\"."
   },
   "intro": "A new unit: home and food. It starts with one of the most useful verbs, έχω, \"I have\", and with it the pattern most Greek verbs follow.",
   "reading": {
    "title": "An idea",
    "lines": [
     [
      "Ο Νίκος έχει μια ιδέα.",
      "Nikos has an idea."
     ],
     [
      "«Ελένη, έχεις χρόνο σήμερα;»",
      "\"Eleni, do you have time today?\""
     ],
     [
      "«Ναι, έχω. Γιατί;»",
      "\"Yes, I do. Why?\""
     ],
     [
      "«Πάμε για καφέ;»",
      "\"Shall we go for coffee?\""
     ],
     [
      "«Καλή ιδέα! Αλλά δεν έχω πολύ χρόνο.»",
      "\"Good idea! But I don't have much time.\""
     ],
     [
      "«Δεν πειράζει. Ένας καφές, μία ώρα.»",
      "\"No problem. One coffee, one hour.\""
     ]
    ],
    "gloss": [
     [
      "μια / μία",
      "a, one (for η-words)"
     ],
     [
      "ένας",
      "a, one (for ο-words)"
     ],
     [
      "σήμερα",
      "today"
     ]
    ]
   }
  },
  "26": {
   "setting": "Walking around the house.",
   "turn": [
    "Walk around the house and name things with ο, η or το.",
    "Ask Πού είναι…; about three things.",
    "Guess the gender of a new word from its ending."
   ],
   "table": {
    "tone": "plain",
    "cols": [
     "ο",
     "η",
     "το"
    ],
    "rows": [
     [
      "ο καφές",
      "η πόρτα",
      "το νερό"
     ],
     [
      "ο κήπος",
      "η κουζίνα",
      "το σπίτι"
     ],
     [
      "-ος -ας -ης",
      "-α -η",
      "-ο -ι -μα"
     ]
    ]
   },
   "drills": [
    {
     "s": "___ καφές",
     "a": "ο",
     "o": [
      "ο",
      "η",
      "το"
     ],
     "en": "the coffee",
     "why": "-ς ending: masculine, ο."
    },
    {
     "s": "___ πόρτα",
     "a": "η",
     "o": [
      "ο",
      "η",
      "το"
     ],
     "en": "the door",
     "why": "-α ending: feminine, η."
    },
    {
     "s": "___ νερό",
     "a": "το",
     "o": [
      "ο",
      "η",
      "το"
     ],
     "en": "the water",
     "why": "-ο ending: neuter, το."
    }
   ],
   "know": "Even things have a gender in Greek: coffee is masculine, the door feminine, water neuter.",
   "intro": "Every Greek noun is masculine, feminine or neuter, even a door or a glass of water. Today you learn to tell which from the word's ending, and the three words for \"the\".",
   "reading": {
    "title": "Our house",
    "lines": [
     [
      "Το σπίτι τους είναι μικρό.",
      "Their house is small."
     ],
     [
      "Έχει μια κουζίνα και ένα σαλόνι.",
      "It has a kitchen and a living room."
     ],
     [
      "Στην κουζίνα είναι ο καφές και το νερό.",
      "The coffee and the water are in the kitchen."
     ],
     [
      "Η πόρτα είναι εκεί, και το παράθυρο εδώ.",
      "The door is there, and the window here."
     ],
     [
      "Η Ελένη λέει: «Αγαπώ το σπίτι μας.»",
      "Eleni says: \"I love our house.\""
     ]
    ],
    "gloss": [
     [
      "τους",
      "their"
     ],
     [
      "μικρό",
      "small"
     ],
     [
      "το σαλόνι",
      "the living room"
     ],
     [
      "μας",
      "our"
     ]
    ]
   }
  },
  "27": {
   "setting": "Making drinks for each other.",
   "turn": [
    "Make each other a drink, asking only in Greek.",
    "Say three things you want: Θέλω…",
    "Say one thing you don't want: Δεν θέλω…"
   ],
   "drills": [
    {
     "s": "Θέλω καφ___, παρακαλώ.",
     "a": "έ",
     "o": [
      "έ",
      "ές"
     ],
     "en": "I want coffee, please.",
     "why": "After θέλω, ο καφές drops its ς."
    },
    {
     "s": "___ καφέ ή τσάι;",
     "a": "Θέλεις",
     "o": [
      "Θέλω",
      "Θέλεις"
     ],
     "en": "Do you want coffee or tea?",
     "why": "Asking \"you\": θέλεις."
    }
   ],
   "spot": {
    "w": [
     "Θέλω",
     "καφές,",
     "παρακαλώ."
    ],
    "wrong": 1,
    "fix": "καφέ,",
    "en": "I want coffee, please.",
    "why": "After θέλω, ο καφές drops its ς: θέλω καφέ."
   },
   "bible": {
    "ref": "John 4:7",
    "koine": "Δός μοι πεῖν",
    "en": "Give me a drink",
    "note": "Jesus to the Samaritan woman at the well."
   },
   "intro": "Wanting and offering: θέλω, \"I want\". You also see how a masculine word like ο καφές changes its ending when it is the thing you want.",
   "reading": {
    "title": "Coffee or tea?",
    "lines": [
     [
      "«Θέλεις καφέ ή τσάι;» ρωτάει ο Νίκος.",
      "\"Do you want coffee or tea?\" asks Nikos."
     ],
     [
      "«Θέλω καφέ, παρακαλώ.»",
      "\"I want coffee, please.\""
     ],
     [
      "«Με ζάχαρη;»",
      "\"With sugar?\""
     ],
     [
      "«Λίγο, ευχαριστώ.»",
      "\"A little, thank you.\""
     ],
     [
      "Ο Νίκος δεν θέλει καφέ. Θέλει τσάι.",
      "Nikos doesn't want coffee. He wants tea."
     ],
     [
      "«Και νερό, παρακαλώ!» λέει η Ελένη.",
      "\"And water, please!\" says Eleni."
     ]
    ],
    "gloss": [
     [
      "με",
      "with"
     ],
     [
      "θέλει",
      "he / she wants"
     ]
    ]
   }
  },
  "28": {
   "setting": "Deciding tomorrow's dinner.",
   "turn": [
    "Decide tomorrow's dinner in Greek.",
    "Name everything on your plate tonight.",
    "Say how many: δύο αυγά, τρία ψάρια."
   ],
   "drills": [
    {
     "s": "δύο αυγ___",
     "a": "ά",
     "o": [
      "ό",
      "ά"
     ],
     "en": "two eggs",
     "why": "το αυγό → τα αυγά."
    },
    {
     "s": "τρία ψάρι___",
     "a": "α",
     "o": [
      "ες",
      "α"
     ],
     "en": "three fish",
     "why": "το ψάρι → τα ψάρια."
    }
   ],
   "bible": {
    "ref": "Luke 24:42",
    "koine": "οἱ δὲ ἐπέδωκαν αὐτῷ ἰχθύος ὀπτοῦ μέρος",
    "en": "They gave him a piece of broiled fish.",
    "note": "The Bible word for fish is ἰχθύς, the ΙΧΘΥΣ fish symbol of early Christians. Today Greeks say ψάρι."
   },
   "intro": "Everyday food, and how Greek makes plurals: not by adding a syllable like Telugu -లు, but by changing the ending.",
   "reading": {
    "title": "What shall we eat?",
    "lines": [
     [
      "Τι θέλουν να φάνε απόψε;",
      "What do they want to eat tonight?"
     ],
     [
      "Ο Νίκος θέλει κοτόπουλο με ρύζι.",
      "Nikos wants chicken with rice."
     ],
     [
      "Η Ελένη θέλει ψάρι και λαχανικά.",
      "Eleni wants fish and vegetables."
     ],
     [
      "«Και φρούτα;» ρωτάει ο Νίκος.",
      "\"And fruit?\" asks Nikos."
     ],
     [
      "«Ναι, βέβαια! Και δύο αυγά για αύριο.»",
      "\"Yes, of course! And two eggs for tomorrow.\""
     ],
     [
      "«Εντάξει. Πάμε!»",
      "\"OK. Let's go!\""
     ]
    ],
    "gloss": [
     [
      "θέλουν",
      "they want"
     ],
     [
      "να φάνε",
      "to eat"
     ],
     [
      "απόψε",
      "tonight"
     ],
     [
      "για",
      "for"
     ]
    ]
   }
  },
  "29": {
   "setting": "Dinner is ready.",
   "turn": [
    "Use these phrases at tonight's dinner.",
    "Offer Κι άλλο; and answer honestly.",
    "Say Πεινάω before dinner and Χόρτασα after."
   ],
   "drills": [
    {
     "s": "Εσύ ___; (Are you hungry?)",
     "a": "πεινάς",
     "o": [
      "πεινάω",
      "πεινάς"
     ],
     "en": "Are you hungry?",
     "why": "εσύ → πεινάς."
    }
   ],
   "bible": {
    "ref": "Matthew 5:6",
    "koine": "μακάριοι οἱ πεινῶντες καὶ διψῶντες τὴν δικαιοσύνην",
    "en": "Blessed are those who hunger and thirst for righteousness",
    "note": "πεινῶντες and διψῶντες come from πεινάω and διψάω."
   },
   "know": "Καλή όρεξη (\"good appetite\") is said at the start of every Greek meal.",
   "intro": "At the table: hungry, thirsty, tasty, full. These verbs end in -άω, a second verb pattern you will meet often.",
   "reading": {
    "title": "Dinner is ready",
    "lines": [
     [
      "Είναι οχτώ. Ο Νίκος πεινάει.",
      "It's eight. Nikos is hungry."
     ],
     [
      "«Πεινάω!» λέει.",
      "\"I'm hungry!\" he says."
     ],
     [
      "«Το φαγητό είναι έτοιμο!» λέει η Ελένη.",
      "\"The food is ready!\" says Eleni."
     ],
     [
      "Τρώνε μαζί.",
      "They eat together."
     ],
     [
      "«Πολύ νόστιμο!»",
      "\"Very tasty!\""
     ],
     [
      "«Κι άλλο;» «Όχι, ευχαριστώ. Χόρτασα.»",
      "\"More?\" \"No, thank you. I'm full.\""
     ]
    ],
    "gloss": [
     [
      "πεινάει",
      "is hungry"
     ],
     [
      "τρώνε",
      "they eat"
     ]
    ]
   }
  },
  "30": {
   "setting": "Calling each other from different rooms.",
   "turn": [
    "Call each other from different rooms, in Greek only.",
    "Say where you are right now: Είμαι στο… / στην…",
    "Say Έλα εδώ! and see if your spouse comes."
   ],
   "drills": [
    {
     "s": "Είμαι ___ κουζίνα.",
     "a": "στην",
     "o": [
      "στο",
      "στην"
     ],
     "en": "I'm in the kitchen.",
     "why": "η κουζίνα → στην κουζίνα."
    },
    {
     "s": "Είμαι ___ σαλόνι.",
     "a": "στο",
     "o": [
      "στο",
      "στην"
     ],
     "en": "I'm in the living room.",
     "why": "το σαλόνι → στο σαλόνι."
    }
   ],
   "spot": {
    "w": [
     "Είμαι",
     "στο",
     "κουζίνα."
    ],
    "wrong": 1,
    "fix": "στην",
    "en": "I'm in the kitchen.",
    "why": "η κουζίνα is feminine, so στην."
   },
   "intro": "Rooms of the house, and the small words στο and στην, \"in the\". After today you can call each other from room to room in Greek.",
   "reading": {
    "title": "Room to room",
    "lines": [
     [
      "Ο Νίκος είναι στο σαλόνι. Η Ελένη είναι στην κρεβατοκάμαρα.",
      "Nikos is in the living room. Eleni is in the bedroom."
     ],
     [
      "«Ελένη, πού είσαι;»",
      "\"Eleni, where are you?\""
     ],
     [
      "«Στην κρεβατοκάμαρα! Εσύ;»",
      "\"In the bedroom! You?\""
     ],
     [
      "«Στο σαλόνι. Έλα εδώ!»",
      "\"In the living room. Come here!\""
     ],
     [
      "«Γιατί;» «Έχει ωραία μουσική!»",
      "\"Why?\" \"There's lovely music!\""
     ],
     [
      "Η Ελένη έρχεται στο σαλόνι.",
      "Eleni comes to the living room."
     ]
    ],
    "gloss": [
     [
      "έχει",
      "there is"
     ],
     [
      "ωραία",
      "lovely"
     ],
     [
      "έρχεται",
      "comes"
     ]
    ]
   }
  },
  "31": {
   "setting": "Looking for the keys, again.",
   "turn": [
    "Hide the keys and ask for them in Greek.",
    "Name three things on the table.",
    "Say the plurals: η καρέκλα → οι καρέκλες."
   ],
   "drills": [
    {
     "s": "η καρέκλα → οι καρέκλ___",
     "a": "ες",
     "o": [
      "ες",
      "α"
     ],
     "en": "the chairs",
     "why": "-α → -ες."
    },
    {
     "s": "___ κλειδιά",
     "a": "τα",
     "o": [
      "τα",
      "οι"
     ],
     "en": "the keys",
     "why": "το κλειδί → τα κλειδιά."
    }
   ],
   "bible": {
    "ref": "Matthew 16:19",
    "koine": "δώσω σοι τὰς κλεῖδας τῆς βασιλείας τῶν οὐρανῶν",
    "en": "I will give you the keys of the kingdom of heaven",
    "note": "κλεῖδας (keys) is the old form of κλειδιά."
   },
   "intro": "Things around the house, and the plural \"the\": οι and τα. You also get the story of every couple's daily search for the keys.",
   "reading": {
    "title": "The keys",
    "lines": [
     [
      "Ο Νίκος ψάχνει τα κλειδιά του.",
      "Nikos is looking for his keys."
     ],
     [
      "«Πού είναι τα κλειδιά;»",
      "\"Where are the keys?\""
     ],
     [
      "«Στο τραπέζι;» «Όχι.»",
      "\"On the table?\" \"No.\""
     ],
     [
      "«Στην καρέκλα;» «Όχι!»",
      "\"On the chair?\" \"No!\""
     ],
     [
      "«Στο κρεβάτι;» «Όχι…»",
      "\"On the bed?\" \"No…\""
     ],
     [
      "«Νίκο… είναι στην τσάντα σου!»",
      "\"Nikos… they're in your bag!\""
     ]
    ],
    "gloss": [
     [
      "ψάχνει",
      "is looking for"
     ],
     [
      "του",
      "his"
     ],
     [
      "σου",
      "your"
     ]
    ]
   }
  },
  "32": {
   "setting": "The tea has gone cold.",
   "turn": [
    "Describe three things on the table: big, small, hot or cold.",
    "Admire something: Ωραίο!",
    "Say ο μεγάλος…, η μεγάλη…, το μεγάλο… with things in your home."
   ],
   "table": {
    "tone": "plain",
    "cols": [
     "ο",
     "η",
     "το"
    ],
    "rows": [
     [
      "μεγάλος",
      "μεγάλη",
      "μεγάλο"
     ],
     [
      "μικρός",
      "μικρή",
      "μικρό"
     ],
     [
      "ζεστός",
      "ζεστή",
      "ζεστό"
     ]
    ]
   },
   "drills": [
    {
     "s": "Το τσάι είναι κρύ___.",
     "a": "ο",
     "o": [
      "ος",
      "α",
      "ο"
     ],
     "en": "The tea is cold.",
     "why": "το τσάι is neuter: -ο."
    },
    {
     "s": "Η κουζίνα είναι μεγάλ___.",
     "a": "η",
     "o": [
      "ος",
      "η",
      "ο"
     ],
     "en": "The kitchen is big.",
     "why": "η κουζίνα is feminine: -η."
    }
   ],
   "bible": {
    "ref": "Revelation 21:5",
    "koine": "Ἰδοὺ καινὰ ποιῶ πάντα",
    "en": "Behold, I make all things new",
    "note": "καινά (new) is the root of today's καινούργιος."
   },
   "intro": "Describing words: big, small, hot, cold, new. Like the feelings in lesson 17, they change their ending to match what they describe.",
   "reading": {
    "title": "A new cup",
    "lines": [
     [
      "Η Ελένη έχει ένα καινούργιο φλιτζάνι.",
      "Eleni has a new cup."
     ],
     [
      "Είναι μικρό και πολύ ωραίο.",
      "It is small and very pretty."
     ],
     [
      "Ο Νίκος φτιάχνει τσάι.",
      "Nikos makes tea."
     ],
     [
      "«Το τσάι είναι ζεστό;» «Όχι, είναι κρύο!»",
      "\"Is the tea hot?\" \"No, it's cold!\""
     ],
     [
      "«Συγγνώμη! Θέλεις ζεστό τσάι;»",
      "\"Sorry! Do you want hot tea?\""
     ],
     [
      "«Ναι. Σε ένα μεγάλο φλιτζάνι!»",
      "\"Yes. In a big cup!\""
     ]
    ],
    "gloss": [
     [
      "το φλιτζάνι",
      "the cup"
     ],
     [
      "ωραίο",
      "pretty, nice"
     ],
     [
      "φτιάχνει",
      "makes"
     ],
     [
      "σε",
      "in"
     ]
    ]
   }
  },
  "33": {
   "setting": "Cooking dinner together.",
   "turn": [
    "Cook one meal this week speaking only Greek.",
    "Ask Να βοηθήσω; and actually help.",
    "Say who does what: Εγώ μαγειρεύω, εσύ πλένεις."
   ],
   "table": {
    "tone": "plain",
    "cols": [
     "Who",
     "cook"
    ],
    "rows": [
     [
      "εγώ",
      "μαγειρεύω"
     ],
     [
      "εσύ",
      "μαγειρεύεις"
     ],
     [
      "αυτός / αυτή",
      "μαγειρεύει"
     ],
     [
      "εμείς",
      "μαγειρεύουμε"
     ],
     [
      "εσείς",
      "μαγειρεύετε"
     ],
     [
      "αυτοί",
      "μαγειρεύουν"
     ]
    ]
   },
   "drills": [
    {
     "s": "Εμείς μαγειρεύ___ μαζί.",
     "a": "ουμε",
     "o": [
      "ουμε",
      "ετε",
      "ουν"
     ],
     "en": "We cook together.",
     "why": "εμείς → -ουμε."
    },
    {
     "s": "Τι μαγειρεύ___; (you)",
     "a": "εις",
     "o": [
      "ω",
      "εις",
      "ει"
     ],
     "en": "What are you cooking?",
     "why": "εσύ → -εις."
    }
   ],
   "bible": {
    "ref": "John 21:12",
    "koine": "Δεῦτε ἀριστήσατε",
    "en": "Come and have breakfast",
    "note": "The risen Jesus cooks fish for his friends on the shore."
   },
   "intro": "Cooking together, and the full present tense: all six forms of a regular verb. After today you can say who does what in the kitchen.",
   "reading": {
    "title": "Cooking together",
    "lines": [
     [
      "Απόψε μαγειρεύουν μαζί.",
      "Tonight they cook together."
     ],
     [
      "Η Ελένη μαγειρεύει το ψάρι.",
      "Eleni cooks the fish."
     ],
     [
      "Ο Νίκος πλένει τα λαχανικά.",
      "Nikos washes the vegetables."
     ],
     [
      "«Να βοηθήσω;» ρωτάει ο Νίκος.",
      "\"Shall I help?\" asks Nikos."
     ],
     [
      "«Ναι. Πλένεις και τα πιάτα;»",
      "\"Yes. Will you wash the dishes too?\""
     ],
     [
      "Ο Νίκος γελάει. «Εντάξει.»",
      "Nikos laughs. \"OK.\""
     ]
    ],
    "gloss": [
     [
      "απόψε",
      "tonight"
     ],
     [
      "τα πιάτα",
      "the dishes"
     ],
     [
      "γελάει",
      "laughs"
     ]
    ]
   }
  },
  "34": {
   "setting": "Evening at home, all in Greek.",
   "turn": [
    "Do the whole evening dialogue tonight when one of you comes home.",
    "Pray before dinner, starting with Ας προσευχηθούμε.",
    "Ask Πώς πήγε η μέρα σου; and answer with two sentences."
   ],
   "know": "You have finished the first 30 lessons: about 200 Greek words and phrases.",
   "intro": "The third checkpoint. A whole evening at home: coming back from work, talking about the day, praying and eating together. You know nearly every word.",
   "reading": {
    "title": "Evening at home",
    "lines": [
     [
      "Είναι βράδυ. Ο Νίκος γυρίζει σπίτι.",
      "It is evening. Nikos comes home."
     ],
     [
      "«Γύρισα!»",
      "\"I'm home!\""
     ],
     [
      "«Καλώς ήρθες! Πώς πήγε η μέρα σου;»",
      "\"Welcome home! How was your day?\""
     ],
     [
      "«Καλά, αλλά είμαι κουρασμένος. Πεινάω!»",
      "\"Good, but I'm tired. I'm hungry!\""
     ],
     [
      "«Το φαγητό είναι έτοιμο: ρύζι και κοτόπουλο.»",
      "\"The food is ready: rice and chicken.\""
     ],
     [
      "Κάθονται στο τραπέζι. «Ας προσευχηθούμε.»",
      "They sit at the table. \"Let's pray.\""
     ],
     [
      "Μετά τρώνε μαζί, και είναι χαρούμενοι.",
      "Afterwards they eat together, and they are happy."
     ]
    ],
    "gloss": [
     [
      "βράδυ",
      "evening"
     ],
     [
      "γυρίζει",
      "comes back"
     ],
     [
      "κάθονται",
      "they sit"
     ],
     [
      "μετά",
      "afterwards"
     ],
     [
      "χαρούμενοι",
      "happy (plural)"
     ]
    ]
   }
  }
 }
};
