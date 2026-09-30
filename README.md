# Mazí (μαζί, "together")

A small Greek-learning web app for two people learning together, with Telugu support, about 30 minutes a day.

- **Today**: a daily 30-minute plan in three stages (letters for days 1–14, everyday Greek to day 180, then Greek + Bible), a shared "talk together" prompt, a phrase of the day, and a streak.
- **Phrases**: 63 everyday Modern Greek phrases for home life, love, faith, feelings and plans. Each has pronunciation in Telugu script and Latin letters, English and Telugu meanings, and read-aloud.
- **Cards**: spaced-repetition flashcards (up to 8 new phrases a day), Greek-first or English-first.
- **Letters**: all 24 letters with Telugu sound equivalents, a quiz, and the letter pairs (ου, αι, μπ, ...).
- **Bible**: Koine New Testament verses with Modern Greek, English and Telugu renderings, and a word-by-word table marking which words are still the same today and which are old forms.

Pronunciation is Modern Greek. In the Telugu-script guide, a long vowel (ా ీ ూ ే ో) marks the stressed syllable.

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

## Editing content

All phrases, prompts, letters and verses live in `js/data.js`.
