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

To put it on your phones, enable GitHub Pages for this repository (Settings → Pages → deploy from branch), then open the page and choose "Add to Home Screen".

Progress is stored in the browser (`localStorage`) on each device. Two names can share one phone, or each person can use their own.

Read-aloud uses the device's Greek text-to-speech voice. If nothing plays, add Greek under the phone's text-to-speech or language settings.

## Editing content

All phrases, prompts, letters and verses live in `js/data.js`.
