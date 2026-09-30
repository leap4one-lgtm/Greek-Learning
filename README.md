# Mazí (μαζί, "together")

A Greek course for a couple, built around one 30-minute session a day, taken together. Explanations are in English with Telugu comparisons, and every Greek word shows its pronunciation in Telugu script and in English letters.

## How it works

Each lesson is a textbook chapter, read top to bottom on one page (about 30 minutes):

- **Introduction** and contents.
- **Review**: earlier words to say aloud together, then reveal and mark the ones you missed (spaced repetition).
- **Reading**: in lessons 1–10, lines of letters and words to read aloud; from lesson 11, a short story about Νίκος and Ελένη using only words learned so far, with a glossary and a hidden translation. Tap any sentence to hear it. Then the lesson's dialogue.
- **Vocabulary** table with pronunciation in Telugu script and English letters.
- **Grammar** explained in prose, with pattern tables, examples and a Telugu comparison.
- **From the Bible** and **Did you know?** notes.
- **Exercises**: a worksheet in sets (choose the ending, translate, match, listen and write, correct the sentence, answer in your own words). Fill in a set, then check it. An on-screen Greek keyboard is included.
- **Together**: role-play the dialogue, then three conversation prompts with a 2-minute timer.

When two phones are connected, the next lesson opens once both of you have finished the previous one (with a "go ahead anyway" option). Finished lessons can be reread from **Lessons**, and the reading position is remembered.

## Course plan

| Phase | Lessons | Goal |
|---|---|---|
| 0 Letters & sounds | 1–10 | Read any Greek word aloud |
| 1 Home Greek | 11–90 | Everyday talk at home |
| 2 Your day | 91–180 | Past, future, telling your day |
| 3 Bible bridge | 181–270 | Koine forms and New Testament verses |
| 4 Reading together | 271+ | The Gospel of John |

Lessons 1–30 are written (`js/course.js`, including `extra` with readings, drills and notes). `js/book.js` lays a lesson out as a chapter. Later units are listed as "coming soon" and get added in batches. `js/bible-verses.js` holds verses with word-by-word notes for Phase 3.

Pronunciation guides are generated from the Greek spelling by `js/translit.js` (Modern Greek pronunciation; in Telugu script a long vowel marks the stressed syllable).

## Running it

It is plain HTML, CSS and JavaScript with no build step. Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

## On your phones (Android and iPhone)

Host it with GitHub Pages (Settings → Pages → Deploy from a branch → this branch, `/ (root)`). The site is then at `https://leap4one-lgtm.github.io/Greek-Learning/`. GitHub Pages on a private repository needs a paid GitHub plan; on a free plan the repository has to be public.

- **iPhone:** open the link in Safari → Share → **Add to Home Screen**.
- **Android:** open the link in Chrome → ⋮ → **Add to Home screen** / **Install app**.

On first open, each phone asks whose phone it is. Progress (streak, cards, ticks) is stored on that phone in `localStorage`. The daily talk prompt, phrase and verse are chosen by date, so both phones show the same ones on the same day. Always open the app from the home-screen icon: on iPhone the icon and Safari keep separate storage.

Read-aloud uses the device's Greek text-to-speech voice. If nothing plays: on iPhone, Settings › Accessibility › Spoken Content › Voices › Greek; on Android, Settings › Text-to-speech › Speech Services by Google › Install voice data › Greek.

## Sharing progress between two phones

`js/sync.js` connects to a free Firebase project (`mazi-bdd67`). One phone creates a couple code in Settings › Together and the other enters it. Each phone then shows both people's streaks and today's progress on the Today screen. Only name, streak, day number, today's ticks and the number of phrases started are shared.

One-time Firebase setup:
1. Authentication › Sign-in method › enable **Anonymous**.
2. Authentication › Settings › Authorized domains › add `leap4one-lgtm.github.io`.
3. Firestore Database › Rules › paste the contents of `firestore.rules` › Publish.

Sync only works from the GitHub Pages site. Everything else in the app works without it.

## Editing content

Lessons live in `js/course.js`: each has items, a grammar note and a dialogue.
