// Mazí content: alphabet, everyday phrases, talk prompts and Bible verses.
// Pronunciation is Modern Greek. In the Telugu-script column a long vowel
// (ా ీ ూ ే ో) marks the stressed syllable; all other vowels are short.
window.MAZI_DATA = {
  alphabet: [
    { up: 'Α', lo: 'α', name: 'álfa', sound: 'a', te: 'అ', tip: 'Like "a" in father, always short.', ex: { el: 'αγάπη', tr: 'a-GHÁ-pi', te: 'అగాపి', en: 'love' } },
    { up: 'Β', lo: 'β', name: 'víta', sound: 'v', te: 'వ', tip: 'Always v, never b.', ex: { el: 'βιβλίο', tr: 'vi-VLÍ-o', te: 'వివ్లీయొ', en: 'book' } },
    { up: 'Γ', lo: 'γ', name: 'ghámma', sound: 'gh / y', te: 'గ / య', tip: 'A soft, breathy g. Before e or i it sounds like y: γεια = యా.', ex: { el: 'γάλα', tr: 'GHÁ-la', te: 'గాల', en: 'milk' } },
    { up: 'Δ', lo: 'δ', name: 'dhélta', sound: 'dh', te: 'ద', tip: 'The "th" in this. Say ద with the tongue touching the upper teeth.', ex: { el: 'δρόμος', tr: 'DHRÓ-mos', te: 'ద్రోమొస్', en: 'road' } },
    { up: 'Ε', lo: 'ε', name: 'épsilon', sound: 'e', te: 'ఎ', tip: 'Like "e" in pen.', ex: { el: 'ελπίδα', tr: 'el-PÍ-dha', te: 'ఎల్పీద', en: 'hope' } },
    { up: 'Ζ', lo: 'ζ', name: 'zíta', sound: 'z', te: 'జ (z)', tip: 'A real z as in zoo, like the Hindi ज़. Not the Telugu j.', ex: { el: 'ζωή', tr: 'zo-Í', te: 'జొఈ', en: 'life' } },
    { up: 'Η', lo: 'η', name: 'íta', sound: 'i', te: 'ఇ', tip: 'Sounds exactly like ι. Greek has several ways to write the i sound.', ex: { el: 'ημέρα', tr: 'i-MÉ-ra', te: 'ఇమేర', en: 'day' } },
    { up: 'Θ', lo: 'θ', name: 'thíta', sound: 'th', te: 'థ', tip: 'The "th" in think. Tongue between the teeth, air flowing, no puff.', ex: { el: 'Θεός', tr: 'the-ÓS', te: 'థెయోస్', en: 'God' } },
    { up: 'Ι', lo: 'ι', name: 'yóta', sound: 'i', te: 'ఇ', tip: 'Like "ee" in see, but short.', ex: { el: 'ιδέα', tr: 'i-DHÉ-a', te: 'ఇదేయ', en: 'idea' } },
    { up: 'Κ', lo: 'κ', name: 'káppa', sound: 'k', te: 'క', tip: 'Plain k, no puff of air.', ex: { el: 'καφές', tr: 'ka-FÉS', te: 'కఫేస్', en: 'coffee' } },
    { up: 'Λ', lo: 'λ', name: 'lámdha', sound: 'l', te: 'ల', tip: 'Plain l.', ex: { el: 'λόγος', tr: 'LÓ-ghos', te: 'లోగొస్', en: 'word' } },
    { up: 'Μ', lo: 'μ', name: 'mi', sound: 'm', te: 'మ', tip: 'Plain m.', ex: { el: 'μητέρα', tr: 'mi-TÉ-ra', te: 'మితేర', en: 'mother' } },
    { up: 'Ν', lo: 'ν', name: 'ni', sound: 'n', te: 'న', tip: 'Plain n.', ex: { el: 'νερό', tr: 'ne-RÓ', te: 'నెరో', en: 'water' } },
    { up: 'Ξ', lo: 'ξ', name: 'ksi', sound: 'ks', te: 'క్స', tip: 'One letter for ks.', ex: { el: 'ξέρω', tr: 'KSÉ-ro', te: 'క్సేరొ', en: 'I know' } },
    { up: 'Ο', lo: 'ο', name: 'ómikron', sound: 'o', te: 'ఒ', tip: 'Like "o" in not, short and round.', ex: { el: 'όνομα', tr: 'Ó-no-ma', te: 'ఓనొమ', en: 'name' } },
    { up: 'Π', lo: 'π', name: 'pi', sound: 'p', te: 'ప', tip: 'Plain p, no puff of air.', ex: { el: 'πατέρας', tr: 'pa-TÉ-ras', te: 'పతేరస్', en: 'father' } },
    { up: 'Ρ', lo: 'ρ', name: 'ro', sound: 'r', te: 'ర', tip: 'A tapped or rolled r, exactly like Telugu ర.', ex: { el: 'ρίζα', tr: 'RÍ-za', te: 'రీజ', en: 'root' } },
    { up: 'Σ', lo: 'σ / ς', name: 'sígma', sound: 's', te: 'స', tip: 'Written ς at the end of a word, σ everywhere else.', ex: { el: 'σπίτι', tr: 'SPÍ-ti', te: 'స్పీతి', en: 'house' } },
    { up: 'Τ', lo: 'τ', name: 'taf', sound: 't', te: 'త', tip: 'The soft Telugu త, not the hard ట.', ex: { el: 'τώρα', tr: 'TÓ-ra', te: 'తోర', en: 'now' } },
    { up: 'Υ', lo: 'υ', name: 'ípsilon', sound: 'i', te: 'ఇ', tip: 'Another i sound, same as ι and η.', ex: { el: 'ύπνος', tr: 'ÍP-nos', te: 'ఈప్నొస్', en: 'sleep' } },
    { up: 'Φ', lo: 'φ', name: 'fi', sound: 'f', te: 'ఫ (f)', tip: 'A real f as in fan, lips touching the teeth.', ex: { el: 'φίλος', tr: 'FÍ-los', te: 'ఫీలొస్', en: 'friend' } },
    { up: 'Χ', lo: 'χ', name: 'khi', sound: 'kh', te: 'ఖ', tip: 'A throaty h, like "ch" in Scottish loch. Before e or i it is softer.', ex: { el: 'χαρά', tr: 'kha-RÁ', te: 'ఖరా', en: 'joy' } },
    { up: 'Ψ', lo: 'ψ', name: 'psi', sound: 'ps', te: 'ప్స', tip: 'One letter for ps, even at the start of a word.', ex: { el: 'ψωμί', tr: 'pso-MÍ', te: 'ప్సొమీ', en: 'bread' } },
    { up: 'Ω', lo: 'ω', name: 'oméga', sound: 'o', te: 'ఒ', tip: 'Sounds exactly like ο in Modern Greek.', ex: { el: 'ώρα', tr: 'Ó-ra', te: 'ఓర', en: 'hour' } }
  ],

  combos: [
    { g: 'ου', sound: 'u', te: 'ఉ', ex: 'ουρανός', exTr: 'u-ra-NÓS', en: 'sky, heaven' },
    { g: 'ει', sound: 'i', te: 'ఇ', ex: 'είμαι', exTr: 'Í-me', en: 'I am' },
    { g: 'οι', sound: 'i', te: 'ఇ', ex: 'οικογένεια', exTr: 'i-ko-YÉ-ni-a', en: 'family' },
    { g: 'αι', sound: 'e', te: 'ఎ', ex: 'και', exTr: 'ke', en: 'and' },
    { g: 'αυ', sound: 'av / af', te: 'అవ్ / అఫ్', ex: 'αύριο', exTr: 'ÁV-ri-o', en: 'tomorrow' },
    { g: 'ευ', sound: 'ev / ef', te: 'ఎవ్ / ఎఫ్', ex: 'ευχαριστώ', exTr: 'ef-kha-ri-STÓ', en: 'thank you' },
    { g: 'μπ', sound: 'b', te: 'బ', ex: 'μπαμπάς', exTr: 'ba-BÁS', en: 'dad' },
    { g: 'ντ', sound: 'd', te: 'డ', ex: 'ντομάτα', exTr: 'do-MÁ-ta', en: 'tomato' },
    { g: 'γκ', sound: 'g', te: 'గ', ex: 'γκαράζ', exTr: 'ga-RÁZ', en: 'garage' },
    { g: 'γγ', sound: 'ng', te: 'ంగ', ex: 'άγγελος', exTr: 'ÁN-ge-los', en: 'angel' },
    { g: 'τσ', sound: 'ts', te: 'త్స', ex: 'τσάι', exTr: 'TSÁ-i', en: 'tea' },
    { g: 'τζ', sound: 'dz', te: 'ద్జ', ex: 'τζάμι', exTr: 'DZÁ-mi', en: 'window pane' }
  ],

  categories: [
    { id: 'greet', label: 'Greetings' },
    { id: 'love', label: 'Love' },
    { id: 'home', label: 'Home & food' },
    { id: 'faith', label: 'Faith' },
    { id: 'feel', label: 'Feelings' },
    { id: 'ask', label: 'Questions' },
    { id: 'time', label: 'Time & plans' }
  ],

  // note: extra guidance, usually the man/woman forms.
  phrases: [
    { id: 'kalimera', cat: 'greet', el: 'Καλημέρα', tr: 'ka-li-MÉ-ra', te: 'కలిమేర', en: 'Good morning', tm: 'శుభోదయం' },
    { id: 'kalispera', cat: 'greet', el: 'Καλησπέρα', tr: 'ka-li-SPÉ-ra', te: 'కలిస్పేర', en: 'Good evening', tm: 'శుభ సాయంత్రం' },
    { id: 'kalinikhta', cat: 'greet', el: 'Καληνύχτα', tr: 'ka-li-NÍKH-ta', te: 'కలినీఖ్త', en: 'Good night', tm: 'శుభ రాత్రి' },
    { id: 'yasu', cat: 'greet', el: 'Γεια σου', tr: 'YA su', te: 'యా సు', en: 'Hi / Bye', tm: 'హాయ్ / వెళ్లొస్తా', note: 'To one person you know well. Γεια σας (ya sas) is for elders or a group.' },
    { id: 'tikanis', cat: 'greet', el: 'Τι κάνεις;', tr: 'ti KÁ-nis?', te: 'తి కానిస్?', en: 'How are you?', tm: 'ఎలా ఉన్నావు?', note: 'The Greek question mark is ; (a semicolon).' },
    { id: 'kalaesi', cat: 'greet', el: 'Καλά, εσύ;', tr: 'ka-LÁ, e-SÍ?', te: 'కలా, ఎసీ?', en: 'Good, and you?', tm: 'బాగున్నాను, నువ్వు?' },
    { id: 'efkharisto', cat: 'greet', el: 'Ευχαριστώ', tr: 'ef-kha-ri-STÓ', te: 'ఎఫ్ఖరిస్తో', en: 'Thank you', tm: 'ధన్యవాదాలు', note: 'Same root as Eucharist, the "thanksgiving".' },
    { id: 'parakalo', cat: 'greet', el: 'Παρακαλώ', tr: 'pa-ra-ka-LÓ', te: 'పరకలో', en: 'Please / You\'re welcome', tm: 'దయచేసి / పర్వాలేదు' },
    { id: 'signomi', cat: 'greet', el: 'Συγγνώμη', tr: 'sigh-NÓ-mi', te: 'సిగ్నోమి', en: 'Sorry', tm: 'క్షమించు' },
    { id: 'kalosirthes', cat: 'greet', el: 'Καλώς ήρθες', tr: 'ka-LÓS ÍR-thes', te: 'కలోస్ ఈర్థెస్', en: 'Welcome (home)', tm: 'స్వాగతం' },

    { id: 'sagapo', cat: 'love', el: 'Σ\' αγαπώ', tr: 'sa-gha-PÓ', te: 'సగపో', en: 'I love you', tm: 'నిన్ను ప్రేమిస్తున్నాను', note: 'αγαπώ is the verb behind αγάπη, the love in 1 Corinthians 13.' },
    { id: 'kiego', cat: 'love', el: 'Κι εγώ σ\' αγαπώ', tr: 'ki e-GHÓ sa-gha-PÓ', te: 'కి ఎగో సగపో', en: 'I love you too', tm: 'నేను కూడా నిన్ను ప్రేమిస్తున్నాను' },
    { id: 'agapimu', cat: 'love', el: 'Αγάπη μου', tr: 'a-GHÁ-pi mu', te: 'అగాపి ము', en: 'My love', tm: 'నా ప్రేమా' },
    { id: 'kardiamu', cat: 'love', el: 'Καρδιά μου', tr: 'kar-DHYÁ mu', te: 'కర్ద్యా ము', en: 'My heart (sweetheart)', tm: 'నా ప్రాణమా' },
    { id: 'mulipis', cat: 'love', el: 'Μου λείπεις', tr: 'mu LÍ-pis', te: 'ము లీపిస్', en: 'I miss you', tm: 'నువ్వు గుర్తొస్తున్నావు' },
    { id: 'omorfi', cat: 'love', el: 'Είσαι όμορφη', tr: 'Í-se Ó-mor-fi', te: 'ఈసె ఓమొర్ఫి', en: 'You are beautiful', tm: 'నువ్వు అందంగా ఉన్నావు', note: 'To a woman. To a man: Είσαι όμορφος (Ó-mor-fos).' },
    { id: 'tikheros', cat: 'love', el: 'Είμαι τυχερός που σε έχω', tr: 'Í-me ti-khe-RÓS pu se É-kho', te: 'ఈమె తిఖెరోస్ పు సె ఏఖొ', en: 'I\'m lucky to have you', tm: 'నువ్వు నాకు దొరకడం నా అదృష్టం', note: 'Man speaking. A woman says τυχερή (ti-khe-RÍ).' },
    { id: 'koritsi', cat: 'love', el: 'Γεια σου, κορίτσι!', tr: 'YA su, ko-RÍ-tsi!', te: 'యా సు, కొరీత్సి!', en: 'Hi, girl!', tm: 'హాయ్, అమ్మాయీ!' },
    { id: 'filakia', cat: 'love', el: 'Φιλάκια', tr: 'fi-LÁ-kya', te: 'ఫిలాక్య', en: 'Kisses (to sign off)', tm: 'ముద్దులు' },

    { id: 'pamekafe', cat: 'home', el: 'Πάμε για καφέ;', tr: 'PÁ-me ya ka-FÉ?', te: 'పామె య కఫే?', en: 'Shall we go for coffee?', tm: 'కాఫీకి వెళ్దామా?' },
    { id: 'kafetsai', cat: 'home', el: 'Θέλεις καφέ ή τσάι;', tr: 'THÉ-lis ka-FÉ i TSÁ-i?', te: 'థేలిస్ కఫే ఇ త్సాయి?', en: 'Do you want coffee or tea?', tm: 'కాఫీ కావాలా, టీ కావాలా?' },
    { id: 'pinao', cat: 'home', el: 'Πεινάω', tr: 'pi-NÁ-o', te: 'పినావొ', en: 'I\'m hungry', tm: 'నాకు ఆకలిగా ఉంది' },
    { id: 'dipsao', cat: 'home', el: 'Διψάω', tr: 'dhip-SÁ-o', te: 'దిప్సావొ', en: 'I\'m thirsty', tm: 'నాకు దాహంగా ఉంది' },
    { id: 'fagito', cat: 'home', el: 'Το φαγητό είναι έτοιμο', tr: 'to fa-yi-TÓ Í-ne É-ti-mo', te: 'తొ ఫయితో ఈనె ఏతిమొ', en: 'The food is ready', tm: 'భోజనం సిద్ధంగా ఉంది' },
    { id: 'nostimo', cat: 'home', el: 'Πολύ νόστιμο!', tr: 'po-LÍ NÓ-sti-mo!', te: 'పొలీ నోస్తిమొ!', en: 'Very tasty!', tm: 'చాలా రుచిగా ఉంది!' },
    { id: 'orexi', cat: 'home', el: 'Καλή όρεξη', tr: 'ka-LÍ Ó-re-ksi', te: 'కలీ ఓరెక్సి', en: 'Enjoy your meal', tm: 'హాయిగా తినండి' },
    { id: 'klidia', cat: 'home', el: 'Πού είναι τα κλειδιά;', tr: 'PU Í-ne ta kli-DHYÁ?', te: 'పూ ఈనె త క్లిద్యా?', en: 'Where are the keys?', tm: 'తాళాలు ఎక్కడ ఉన్నాయి?' },
    { id: 'elaedo', cat: 'home', el: 'Έλα εδώ', tr: 'É-la e-DHÓ', te: 'ఏల ఎదో', en: 'Come here', tm: 'ఇక్కడికి రా' },
    { id: 'yirisa', cat: 'home', el: 'Γύρισα!', tr: 'YÍ-ri-sa!', te: 'యీరిస!', en: 'I\'m home! (I\'m back)', tm: 'నేను వచ్చేశాను!' },
    { id: 'kurastika', cat: 'home', el: 'Κουράστηκα', tr: 'ku-RÁ-sti-ka', te: 'కురాస్తిక', en: 'I\'m tired', tm: 'అలసిపోయాను' },
    { id: 'ipno', cat: 'home', el: 'Πάω για ύπνο', tr: 'PÁ-o ya ÍP-no', te: 'పావొ య ఈప్నొ', en: 'I\'m going to sleep', tm: 'నేను నిద్రపోతున్నాను' },

    { id: 'prosefkhi', cat: 'faith', el: 'Ας προσευχηθούμε', tr: 'as pro-sef-khi-THÚ-me', te: 'అస్ ప్రొసెఫ్ఖిథూమె', en: 'Let\'s pray', tm: 'ప్రార్థన చేద్దాం' },
    { id: 'doxa', cat: 'faith', el: 'Δόξα τω Θεώ', tr: 'DHÓ-ksa to the-Ó', te: 'దోక్స తొ థెయో', en: 'Glory to God (thank God)', tm: 'దేవునికి మహిమ', note: 'Greeks say this every day, like "thank God". τω Θεώ is an old dative form, straight from Koine.' },
    { id: 'evloyi', cat: 'faith', el: 'Ο Θεός να σε ευλογεί', tr: 'o the-ÓS na se ev-lo-YÍ', te: 'ఒ థెయోస్ న సె ఎవ్లొయీ', en: 'God bless you', tm: 'దేవుడు నిన్ను దీవించును గాక' },
    { id: 'kiriosmazi', cat: 'faith', el: 'Ο Κύριος μαζί σου', tr: 'o KÍ-ri-os ma-ZÍ su', te: 'ఒ కీరియొస్ మజీ సు', en: 'The Lord be with you', tm: 'ప్రభువు నీకు తోడై ఉండును గాక' },
    { id: 'amin', cat: 'faith', el: 'Αμήν', tr: 'a-MÍN', te: 'అమీన్', en: 'Amen', tm: 'ఆమేన్' },
    { id: 'theosagapi', cat: 'faith', el: 'Ο Θεός είναι αγάπη', tr: 'o the-ÓS Í-ne a-GHÁ-pi', te: 'ఒ థెయోస్ ఈనె అగాపి', en: 'God is love', tm: 'దేవుడు ప్రేమయై ఉన్నాడు', note: 'Compare 1 John 4:8 in the Bible tab: ὁ θεὸς ἀγάπη ἐστίν.' },
    { id: 'vivlo', cat: 'faith', el: 'Ας διαβάσουμε τη Βίβλο', tr: 'as dhya-VÁ-su-me ti VÍ-vlo', te: 'అస్ ద్యావాసుమె తి వీవ్లొ', en: 'Let\'s read the Bible', tm: 'బైబిల్ చదువుదాం' },
    { id: 'khristos', cat: 'faith', el: 'Χριστός Ανέστη!', tr: 'khri-STÓS a-NÉ-sti!', te: 'ఖ్రిస్తోస్ అనేస్తి!', en: 'Christ is risen!', tm: 'క్రీస్తు లేచెను!', note: 'The Easter greeting. The reply is the next phrase.' },
    { id: 'alithos', cat: 'faith', el: 'Αληθώς Ανέστη!', tr: 'a-li-THÓS a-NÉ-sti!', te: 'అలిథోస్ అనేస్తి!', en: 'Truly He is risen!', tm: 'నిజముగా లేచెను!' },
    { id: 'kiriaki', cat: 'faith', el: 'Καλή Κυριακή', tr: 'ka-LÍ ki-rya-KÍ', te: 'కలీ కిర్యకీ', en: 'Have a good Sunday', tm: 'శుభ ఆదివారం', note: 'Κυριακή, Sunday, means "the Lord\'s day".' },

    { id: 'kharumenos', cat: 'feel', el: 'Είμαι χαρούμενος / χαρούμενη', tr: 'Í-me kha-RÚ-me-nos / kha-RÚ-me-ni', te: 'ఈమె ఖరూమెనొస్ / ఖరూమెని', en: 'I\'m happy', tm: 'నేను సంతోషంగా ఉన్నాను', note: 'Man says -ος, woman says -η. Telugu does the same with -వాడు / -ది.' },
    { id: 'lipimenos', cat: 'feel', el: 'Είμαι λυπημένος / λυπημένη', tr: 'Í-me li-pi-MÉ-nos / li-pi-MÉ-ni', te: 'ఈమె లిపిమేనొస్ / లిపిమేని', en: 'I\'m sad', tm: 'నాకు బాధగా ఉంది', note: 'Man says -ος, woman says -η.' },
    { id: 'anisikho', cat: 'feel', el: 'Ανησυχώ', tr: 'a-ni-si-KHÓ', te: 'అనిసిఖో', en: 'I\'m worried', tm: 'నాకు ఆందోళనగా ఉంది' },
    { id: 'minanisikhis', cat: 'feel', el: 'Μην ανησυχείς', tr: 'min a-ni-si-KHÍS', te: 'మిన్ అనిసిఖీస్', en: 'Don\'t worry', tm: 'కంగారు పడకు' },
    { id: 'olakala', cat: 'feel', el: 'Όλα θα πάνε καλά', tr: 'Ó-la tha PÁ-ne ka-LÁ', te: 'ఓల థ పానె కలా', en: 'Everything will be fine', tm: 'అంతా బాగానే జరుగుతుంది' },
    { id: 'perifanos', cat: 'feel', el: 'Είμαι περήφανος για σένα', tr: 'Í-me pe-RÍ-fa-nos ya SÉ-na', te: 'ఈమె పెరీఫనొస్ య సేన', en: 'I\'m proud of you', tm: 'నిన్ను చూసి గర్వపడుతున్నాను', note: 'Man speaking. A woman says περήφανη (pe-RÍ-fa-ni).' },

    { id: 'tikanistora', cat: 'ask', el: 'Τι κάνεις τώρα;', tr: 'ti KÁ-nis TÓ-ra?', te: 'తి కానిస్ తోర?', en: 'What are you doing now?', tm: 'ఇప్పుడు ఏం చేస్తున్నావు?' },
    { id: 'puise', cat: 'ask', el: 'Πού είσαι;', tr: 'PU Í-se?', te: 'పూ ఈసె?', en: 'Where are you?', tm: 'ఎక్కడ ఉన్నావు?' },
    { id: 'tiora', cat: 'ask', el: 'Τι ώρα είναι;', tr: 'ti Ó-ra Í-ne?', te: 'తి ఓర ఈనె?', en: 'What time is it?', tm: 'టైం ఎంత అయింది?' },
    { id: 'tifame', cat: 'ask', el: 'Τι θέλεις να φάμε;', tr: 'ti THÉ-lis na FÁ-me?', te: 'తి థేలిస్ న ఫామె?', en: 'What do you want to eat?', tm: 'ఏం తిందాం?' },
    { id: 'mera', cat: 'ask', el: 'Πώς πήγε η μέρα σου;', tr: 'pos PÍ-ye i MÉ-ra su?', te: 'పోస్ పీయె ఇ మేర సు?', en: 'How was your day?', tm: 'నీ రోజు ఎలా గడిచింది?' },
    { id: 'tiipes', cat: 'ask', el: 'Τι είπες;', tr: 'ti Í-pes?', te: 'తి ఈపెస్?', en: 'What did you say?', tm: 'ఏమన్నావు?' },
    { id: 'poslegete', cat: 'ask', el: 'Πώς λέγεται αυτό στα ελληνικά;', tr: 'pos LÉ-ye-te af-TÓ sta e-li-ni-KÁ?', te: 'పోస్ లేయెతె అఫ్తో స్త ఎలినికా?', en: 'How do you say this in Greek?', tm: 'దీన్ని గ్రీకులో ఏమంటారు?' },

    { id: 'simera', cat: 'time', el: 'Σήμερα', tr: 'SÍ-me-ra', te: 'సీమెర', en: 'Today', tm: 'ఈరోజు' },
    { id: 'avrio', cat: 'time', el: 'Αύριο', tr: 'ÁV-ri-o', te: 'ఆవ్రియొ', en: 'Tomorrow', tm: 'రేపు' },
    { id: 'khthes', cat: 'time', el: 'Χθες', tr: 'khthes', te: 'ఖ్థెస్', en: 'Yesterday', tm: 'నిన్న' },
    { id: 'neokhi', cat: 'time', el: 'Ναι / Όχι', tr: 'ne / Ó-khi', te: 'నె / ఓఖి', en: 'Yes / No', tm: 'అవును / కాదు', note: 'Careful: ναι sounds like "nay" but means yes.' },
    { id: 'pame', cat: 'time', el: 'Πάμε!', tr: 'PÁ-me!', te: 'పామె!', en: 'Let\'s go!', tm: 'వెళ్దాం పద!' },
    { id: 'perimene', cat: 'time', el: 'Περίμενε λίγο', tr: 'pe-RÍ-me-ne LÍ-gho', te: 'పెరీమెనె లీగొ', en: 'Wait a little', tm: 'కొంచెం ఆగు' },
    { id: 'sigasiga', cat: 'time', el: 'Σιγά σιγά', tr: 'si-GHÁ si-GHÁ', te: 'సిగా సిగా', en: 'Slowly, take it easy', tm: 'నెమ్మదిగా' },
    { id: 'arga', cat: 'time', el: 'Θα γυρίσω αργά', tr: 'tha yi-RÍ-so ar-GHÁ', te: 'థ యిరీసొ అర్గా', en: 'I\'ll be back late', tm: 'నేను ఆలస్యంగా వస్తాను' },
    { id: 'talegame', cat: 'time', el: 'Τα λέμε αργότερα', tr: 'ta LÉ-me ar-GHÓ-te-ra', te: 'త లేమె అర్గోతెర', en: 'See you later', tm: 'తర్వాత కలుద్దాం' }
  ],

  // One per day. Both of you see the same prompt on the same date.
  prompts: [
    { text: 'Greet each other only in Greek this morning.', el: 'Καλημέρα! Τι κάνεις;', en: 'Good morning! How are you?' },
    { text: 'At dinner, ask about each other\'s day. Answer with one word: καλά (good), κουραστικά (tiring) or τέλεια (perfect).', el: 'Πώς πήγε η μέρα σου;', en: 'How was your day?' },
    { text: 'Walk around the house and name five things together.', el: 'πόρτα, τραπέζι, καρέκλα, παράθυρο, κρεβάτι', en: 'door, table, chair, window, bed' },
    { text: 'Say good night to each other in Greek, with a nickname.', el: 'Καληνύχτα, αγάπη μου.', en: 'Good night, my love.' },
    { text: 'Thank God together for today in one Greek line.', el: 'Σ\' ευχαριστούμε, Κύριε, για αυτή τη μέρα.', en: 'We thank you, Lord, for this day.' },
    { text: 'Count to ten together, taking turns.', el: 'ένα, δύο, τρία, τέσσερα, πέντε, έξι, εφτά, οχτώ, εννιά, δέκα', en: 'one to ten' },
    { text: 'Decide what to eat, only in Greek.', el: 'Τι θέλεις να φάμε; Ρύζι; Ψωμί; Κοτόπουλο;', en: 'What do you want to eat? Rice? Bread? Chicken?' },
    { text: 'Tell each other one plan for tomorrow.', el: 'Αύριο θα δουλέψω / θα μαγειρέψω / θα διαβάσω.', en: 'Tomorrow I will work / cook / read.' },
    { text: 'Give each other a compliment.', el: 'Είσαι όμορφη. / Είσαι όμορφος.', en: 'You are beautiful (to her / to him).' },
    { text: 'Use only Greek for yes, no, please and thank you all evening.', el: 'ναι, όχι, παρακαλώ, ευχαριστώ', en: 'yes, no, please, thank you' },
    { text: 'Describe the weather to each other.', el: 'Κάνει ζέστη. Κάνει κρύο. Βρέχει.', en: 'It\'s hot. It\'s cold. It\'s raining.' },
    { text: 'Say how you feel right now. Remember -ος for him, -η for her.', el: 'Είμαι κουρασμένος. / Είμαι κουρασμένη.', en: 'I am tired (him / her).' },
    { text: 'Read today\'s Bible verse aloud to each other, slowly, word by word.', el: 'Ας διαβάσουμε τη Βίβλο.', en: 'Let\'s read the Bible.' },
    { text: 'Name your family members in Greek.', el: 'μητέρα, πατέρας, αδελφός, αδελφή, παιδιά', en: 'mother, father, brother, sister, children' },
    { text: 'Find English words that came from Greek and say them the Greek way.', el: 'τηλέφωνο, μουσική, θέατρο, πρόβλημα', en: 'telephone, music, theatre, problem' },
    { text: 'Ask the time and answer with a number.', el: 'Τι ώρα είναι; Είναι εφτά.', en: 'What time is it? It\'s seven.' },
    { text: 'Bless each other before one of you leaves the house.', el: 'Ο Θεός μαζί σου.', en: 'God be with you.' },
    { text: 'Say sorry and thank you for something small from today.', el: 'Συγγνώμη. Ευχαριστώ πολύ.', en: 'Sorry. Thank you very much.' },
    { text: 'Choose Greek pet names for each other and use them all day.', el: 'αγάπη μου, καρδιά μου, μωρό μου', en: 'my love, my heart, my baby' },
    { text: 'Offer each other a drink, then answer.', el: 'Θέλεις καφέ ή τσάι; Καφέ, παρακαλώ.', en: 'Coffee or tea? Coffee, please.' },
    { text: 'Tell each other three things you love.', el: 'Αγαπώ τον καφέ, τη μουσική και εσένα.', en: 'I love coffee, music and you.' },
    { text: 'Ask where something is, then point and answer.', el: 'Πού είναι το τηλέφωνο; Εκεί!', en: 'Where is the phone? There!' },
    { text: 'Pray the first line of the Lord\'s Prayer together in Greek.', el: 'Πάτερ ημών ο εν τοις ουρανοίς', en: 'Our Father who art in heaven' },
    { text: 'Say what you did today, starting with "I".', el: 'Σήμερα δούλεψα. Σήμερα μαγείρεψα.', en: 'Today I worked. Today I cooked.' }
  ],

  // Koine verses. mg = a simple Modern Greek rendering, te = a simple Telugu meaning.
  // Word kinds: same = still used today; old = older form or word, modern shown in "now".
  verses: [
    {
      ref: 'John 1:1', koine: 'Ἐν ἀρχῇ ἦν ὁ λόγος, καὶ ὁ λόγος ἦν πρὸς τὸν θεόν, καὶ θεὸς ἦν ὁ λόγος.',
      tr: 'En arkhí in o lógos, ke o lógos in pros ton theón, ke theós in o lógos.',
      mg: 'Στην αρχή ήταν ο Λόγος, και ο Λόγος ήταν με τον Θεό, και Θεός ήταν ο Λόγος.',
      en: 'In the beginning was the Word, and the Word was with God, and the Word was God.',
      te: 'ఆదిలో వాక్యం ఉంది, ఆ వాక్యం దేవునితో ఉంది, ఆ వాక్యం దేవుడే.',
      words: [
        { g: 'Ἐν', en: 'in', te: 'లో', kind: 'old', now: 'σε / στην' },
        { g: 'ἀρχῇ', en: 'beginning', te: 'ఆది', kind: 'same', now: 'αρχή', note: 'The -ῇ ending is the dative case, "in/at". Like Telugu -లో.' },
        { g: 'ἦν', en: 'was', te: 'ఉండెను', kind: 'old', now: 'ήταν' },
        { g: 'ὁ', en: 'the', te: '—', kind: 'same', now: 'ο' },
        { g: 'λόγος', en: 'word', te: 'వాక్యము', kind: 'same', now: 'λόγος' },
        { g: 'καὶ', en: 'and', te: 'మరియు', kind: 'same', now: 'και' },
        { g: 'πρὸς', en: 'with, toward', te: 'యొద్ద', kind: 'old', now: 'με / προς' },
        { g: 'τὸν', en: 'the (object)', te: '—', kind: 'same', now: 'τον' },
        { g: 'θεόν', en: 'God (object)', te: 'దేవుని', kind: 'same', now: 'Θεό', note: 'Object ending -ν, like Telugu -ని.' },
        { g: 'θεὸς', en: 'God', te: 'దేవుడు', kind: 'same', now: 'Θεός' }
      ]
    },
    {
      ref: 'John 11:35', koine: 'ἐδάκρυσεν ὁ Ἰησοῦς.',
      tr: 'edhákrisen o Iisoús.',
      mg: 'Ο Ιησούς δάκρυσε.',
      en: 'Jesus wept.',
      te: 'యేసు కన్నీళ్లు విడిచాడు.',
      words: [
        { g: 'ἐδάκρυσεν', en: 'wept', te: 'కన్నీళ్లు విడిచెను', kind: 'same', now: 'δάκρυσε', note: 'From δάκρυ (tear). The ἐ- at the front marks the past, still used today in stressed forms like έγραψα.' },
        { g: 'ὁ', en: 'the', te: '—', kind: 'same', now: 'ο' },
        { g: 'Ἰησοῦς', en: 'Jesus', te: 'యేసు', kind: 'same', now: 'Ιησούς' }
      ]
    },
    {
      ref: '1 John 4:8', koine: 'ὁ μὴ ἀγαπῶν οὐκ ἔγνω τὸν θεόν, ὅτι ὁ θεὸς ἀγάπη ἐστίν.',
      tr: 'o mi agapón uk égno ton theón, óti o theós agápi estín.',
      mg: 'Όποιος δεν αγαπά δεν γνώρισε τον Θεό, γιατί ο Θεός είναι αγάπη.',
      en: 'Whoever does not love does not know God, because God is love.',
      te: 'ప్రేమించనివాడు దేవుణ్ణి ఎరుగడు, ఎందుకంటే దేవుడు ప్రేమయై ఉన్నాడు.',
      words: [
        { g: 'ὁ', en: 'the one who', te: 'వాడు', kind: 'old', now: 'όποιος', note: 'ὁ + participle = "the one who ...". Modern Greek says όποιος.' },
        { g: 'μὴ', en: 'not', te: 'కాని', kind: 'same', now: 'μη', note: 'μη survives in "don\'t" commands: Μην ανησυχείς.' },
        { g: 'ἀγαπῶν', en: 'loving', te: 'ప్రేమించే', kind: 'old', now: 'αγαπά', note: 'A participle, the "-ing" form. Koine uses these everywhere.' },
        { g: 'οὐκ', en: 'not', te: 'లేదు', kind: 'old', now: 'δεν' },
        { g: 'ἔγνω', en: 'knew', te: 'ఎరిగెను', kind: 'old', now: 'γνώρισε' },
        { g: 'ὅτι', en: 'because', te: 'ఎందుకంటే', kind: 'old', now: 'γιατί', note: 'In Modern Greek ότι means "that".' },
        { g: 'ἀγάπη', en: 'love', te: 'ప్రేమ', kind: 'same', now: 'αγάπη' },
        { g: 'ἐστίν', en: 'is', te: 'ఉన్నాడు', kind: 'old', now: 'είναι' }
      ]
    },
    {
      ref: '1 John 4:19', koine: 'ἡμεῖς ἀγαπῶμεν, ὅτι αὐτὸς πρῶτος ἠγάπησεν ἡμᾶς.',
      tr: 'imís agapómen, óti aftós prótos igápisen imás.',
      mg: 'Εμείς αγαπάμε, γιατί αυτός πρώτος μας αγάπησε.',
      en: 'We love, because he first loved us.',
      te: 'మనం ప్రేమిస్తున్నాం, ఎందుకంటే ఆయనే మొదట మనల్ని ప్రేమించాడు.',
      words: [
        { g: 'ἡμεῖς', en: 'we', te: 'మనం', kind: 'old', now: 'εμείς' },
        { g: 'ἀγαπῶμεν', en: 'we love', te: 'ప్రేమిస్తున్నాం', kind: 'old', now: 'αγαπάμε' },
        { g: 'ὅτι', en: 'because', te: 'ఎందుకంటే', kind: 'old', now: 'γιατί' },
        { g: 'αὐτὸς', en: 'he', te: 'ఆయన', kind: 'same', now: 'αυτός' },
        { g: 'πρῶτος', en: 'first', te: 'మొదట', kind: 'same', now: 'πρώτος' },
        { g: 'ἠγάπησεν', en: 'loved', te: 'ప్రేమించెను', kind: 'old', now: 'αγάπησε' },
        { g: 'ἡμᾶς', en: 'us', te: 'మనల్ని', kind: 'old', now: 'μας' }
      ]
    },
    {
      ref: 'John 14:6', koine: 'ἐγώ εἰμι ἡ ὁδὸς καὶ ἡ ἀλήθεια καὶ ἡ ζωή.',
      tr: 'egó imi i odhós ke i alíthia ke i zoí.',
      mg: 'Εγώ είμαι ο δρόμος και η αλήθεια και η ζωή.',
      en: 'I am the way and the truth and the life.',
      te: 'నేనే మార్గమును, సత్యమును, జీవమును.',
      words: [
        { g: 'ἐγώ', en: 'I', te: 'నేను', kind: 'same', now: 'εγώ' },
        { g: 'εἰμι', en: 'am', te: 'ఉన్నాను', kind: 'same', now: 'είμαι' },
        { g: 'ἡ', en: 'the (her words)', te: '—', kind: 'same', now: 'η' },
        { g: 'ὁδὸς', en: 'way, road', te: 'మార్గము', kind: 'old', now: 'δρόμος', note: 'οδός is still used in street names: Οδός Ερμού.' },
        { g: 'ἀλήθεια', en: 'truth', te: 'సత్యము', kind: 'same', now: 'αλήθεια' },
        { g: 'ζωή', en: 'life', te: 'జీవము', kind: 'same', now: 'ζωή' }
      ]
    },
    {
      ref: 'John 8:32', koine: 'καὶ γνώσεσθε τὴν ἀλήθειαν, καὶ ἡ ἀλήθεια ἐλευθερώσει ὑμᾶς.',
      tr: 'ke gnósesthe tin alíthian, ke i alíthia eleftherósi imás.',
      mg: 'Και θα γνωρίσετε την αλήθεια, και η αλήθεια θα σας ελευθερώσει.',
      en: 'And you will know the truth, and the truth will set you free.',
      te: 'మీరు సత్యాన్ని తెలుసుకుంటారు, ఆ సత్యం మిమ్మల్ని స్వతంత్రులను చేస్తుంది.',
      words: [
        { g: 'γνώσεσθε', en: 'you will know', te: 'తెలుసుకుంటారు', kind: 'old', now: 'θα γνωρίσετε', note: 'Modern Greek builds the future with θα.' },
        { g: 'τὴν', en: 'the (object)', te: '—', kind: 'same', now: 'την' },
        { g: 'ἀλήθειαν', en: 'truth (object)', te: 'సత్యాన్ని', kind: 'same', now: 'αλήθεια' },
        { g: 'ἐλευθερώσει', en: 'will set free', te: 'స్వతంత్రులను చేయును', kind: 'same', now: 'θα ελευθερώσει', note: 'Same verb today, with θα added.' },
        { g: 'ὑμᾶς', en: 'you (plural)', te: 'మిమ్మల్ని', kind: 'old', now: 'σας' }
      ]
    },
    {
      ref: 'John 3:16', koine: 'Οὕτως γὰρ ἠγάπησεν ὁ θεὸς τὸν κόσμον, ὥστε τὸν υἱὸν τὸν μονογενῆ ἔδωκεν, ἵνα πᾶς ὁ πιστεύων εἰς αὐτὸν μὴ ἀπόληται ἀλλ᾽ ἔχῃ ζωὴν αἰώνιον.',
      tr: 'Útos gar igápisen o theós ton kósmon, óste ton ión ton monoyení édhoken, ína pas o pistévon is aftón mi apólite al ékhi zoín eónion.',
      mg: 'Γιατί τόσο πολύ αγάπησε ο Θεός τον κόσμο, ώστε έδωσε τον μονογενή Υιό του, για να μη χαθεί όποιος πιστεύει σ\' αυτόν, αλλά να έχει ζωή αιώνια.',
      en: 'For God so loved the world that he gave his only Son, so that everyone who believes in him should not perish but have eternal life.',
      te: 'దేవుడు లోకాన్ని ఎంతగానో ప్రేమించాడు, కాబట్టి తన ఏకైక కుమారుణ్ణి ఇచ్చాడు; ఆయనను నమ్మే ప్రతి ఒక్కరూ నశించకుండా నిత్యజీవం పొందాలని.',
      words: [
        { g: 'Οὕτως', en: 'so, in this way', te: 'ఈ విధంగా', kind: 'old', now: 'τόσο / έτσι' },
        { g: 'γὰρ', en: 'for', te: 'ఎందుకంటే', kind: 'old', now: 'γιατί' },
        { g: 'ἠγάπησεν', en: 'loved', te: 'ప్రేమించెను', kind: 'old', now: 'αγάπησε' },
        { g: 'κόσμον', en: 'world', te: 'లోకము', kind: 'same', now: 'κόσμο' },
        { g: 'ὥστε', en: 'so that', te: 'కాబట్టి', kind: 'same', now: 'ώστε' },
        { g: 'υἱὸν', en: 'son', te: 'కుమారుడు', kind: 'same', now: 'Υιό', note: 'Church word. In daily talk a son is γιος.' },
        { g: 'μονογενῆ', en: 'only, one and only', te: 'అద్వితీయ', kind: 'same', now: 'μονογενή' },
        { g: 'ἔδωκεν', en: 'gave', te: 'ఇచ్చెను', kind: 'old', now: 'έδωσε' },
        { g: 'ἵνα', en: 'so that', te: 'కోసం', kind: 'old', now: 'για να' },
        { g: 'πᾶς', en: 'every', te: 'ప్రతి', kind: 'old', now: 'κάθε' },
        { g: 'πιστεύων', en: 'believing', te: 'నమ్మే', kind: 'old', now: 'όποιος πιστεύει', note: 'Participle again: "the believing one".' },
        { g: 'εἰς', en: 'in, into', te: 'లో', kind: 'old', now: 'σε' },
        { g: 'ἀπόληται', en: 'perish', te: 'నశించు', kind: 'old', now: 'χαθεί' },
        { g: 'ἀλλ᾽', en: 'but', te: 'కాని', kind: 'same', now: 'αλλά' },
        { g: 'ἔχῃ', en: 'have', te: 'కలిగి ఉండు', kind: 'same', now: 'έχει' },
        { g: 'ζωὴν', en: 'life', te: 'జీవము', kind: 'same', now: 'ζωή' },
        { g: 'αἰώνιον', en: 'eternal', te: 'నిత్య', kind: 'same', now: 'αιώνια' }
      ]
    },
    {
      ref: '1 Corinthians 13:4', koine: 'Ἡ ἀγάπη μακροθυμεῖ, χρηστεύεται ἡ ἀγάπη.',
      tr: 'I agápi makrothimí, khristévete i agápi.',
      mg: 'Η αγάπη είναι υπομονετική, η αγάπη είναι καλοσυνάτη.',
      en: 'Love is patient, love is kind.',
      te: 'ప్రేమ దీర్ఘశాంతం గలది, ప్రేమ దయ చూపిస్తుంది.',
      words: [
        { g: 'Ἡ', en: 'the', te: '—', kind: 'same', now: 'η' },
        { g: 'ἀγάπη', en: 'love', te: 'ప్రేమ', kind: 'same', now: 'αγάπη' },
        { g: 'μακροθυμεῖ', en: 'is patient', te: 'దీర్ఘశాంతము గలది', kind: 'old', now: 'είναι υπομονετική', note: 'Literally "long-tempered". Compare Telugu దీర్ఘ + శాంతం.' },
        { g: 'χρηστεύεται', en: 'is kind', te: 'దయ చూపును', kind: 'old', now: 'είναι καλοσυνάτη' }
      ]
    },
    {
      ref: '1 Corinthians 13:13', koine: 'νυνὶ δὲ μένει πίστις, ἐλπίς, ἀγάπη, τὰ τρία ταῦτα· μείζων δὲ τούτων ἡ ἀγάπη.',
      tr: 'niní dhe méni pístis, elpís, agápi, ta tría táfta; mízon dhe túton i agápi.',
      mg: 'Τώρα μένουν η πίστη, η ελπίδα, η αγάπη, αυτά τα τρία· μεγαλύτερη όμως από αυτά είναι η αγάπη.',
      en: 'So now faith, hope and love remain, these three; but the greatest of these is love.',
      te: 'ఇప్పుడు విశ్వాసం, నిరీక్షణ, ప్రేమ ఈ మూడూ నిలిచి ఉన్నాయి; వీటిలో గొప్పది ప్రేమే.',
      words: [
        { g: 'νυνὶ', en: 'now', te: 'ఇప్పుడు', kind: 'old', now: 'τώρα' },
        { g: 'δὲ', en: 'and, but', te: 'అయితే', kind: 'old', now: 'όμως' },
        { g: 'μένει', en: 'remains', te: 'నిలుచును', kind: 'same', now: 'μένει', note: 'Today μένω also means "I live (somewhere)".' },
        { g: 'πίστις', en: 'faith', te: 'విశ్వాసము', kind: 'same', now: 'πίστη' },
        { g: 'ἐλπίς', en: 'hope', te: 'నిరీక్షణ', kind: 'same', now: 'ελπίδα' },
        { g: 'τρία', en: 'three', te: 'మూడు', kind: 'same', now: 'τρία', note: 'Like Sanskrit త్రి.' },
        { g: 'ταῦτα', en: 'these', te: 'ఇవి', kind: 'old', now: 'αυτά' },
        { g: 'μείζων', en: 'greater', te: 'గొప్పది', kind: 'old', now: 'μεγαλύτερη' },
        { g: 'τούτων', en: 'of these', te: 'వీటిలో', kind: 'old', now: 'από αυτά' }
      ]
    },
    {
      ref: 'Matthew 6:9', koine: 'Πάτερ ἡμῶν ὁ ἐν τοῖς οὐρανοῖς· ἁγιασθήτω τὸ ὄνομά σου.',
      tr: 'Páter imón o en tis uranís; ayiasthíto to ónomá su.',
      mg: 'Πατέρα μας, που είσαι στους ουρανούς, ας αγιαστεί το όνομά σου.',
      en: 'Our Father in heaven, hallowed be your name.',
      te: 'పరలోకంలో ఉన్న మా తండ్రీ, నీ నామం పరిశుద్ధపరచబడును గాక.',
      words: [
        { g: 'Πάτερ', en: 'Father!', te: 'తండ్రీ', kind: 'old', now: 'Πατέρα', note: 'Calling form, like Telugu తండ్రీ. Like Sanskrit పితృ.' },
        { g: 'ἡμῶν', en: 'our', te: 'మా', kind: 'old', now: 'μας' },
        { g: 'τοῖς', en: 'the (to/in)', te: '—', kind: 'old', now: 'στους', note: 'Dative plural. Modern Greek lost the dative.' },
        { g: 'οὐρανοῖς', en: 'heavens', te: 'పరలోకము', kind: 'same', now: 'ουρανούς' },
        { g: 'ἁγιασθήτω', en: 'let it be made holy', te: 'పరిశుద్ధపరచబడును గాక', kind: 'old', now: 'ας αγιαστεί' },
        { g: 'ὄνομά', en: 'name', te: 'నామము', kind: 'same', now: 'όνομα', note: 'Cousin of Sanskrit నామ.' },
        { g: 'σου', en: 'your', te: 'నీ', kind: 'same', now: 'σου' }
      ]
    },
    {
      ref: 'Mark 5:41', koine: 'Τὸ κοράσιον, σοὶ λέγω, ἔγειρε.',
      tr: 'To korásion, si légho, éyire.',
      mg: 'Κοριτσάκι, σου λέω, σήκω!',
      en: 'Little girl, I say to you, get up.',
      te: 'చిన్నదానా, నీతో చెబుతున్నాను, లే!',
      words: [
        { g: 'κοράσιον', en: 'little girl', te: 'చిన్నదానా', kind: 'old', now: 'κοριτσάκι' },
        { g: 'σοὶ', en: 'to you', te: 'నీతో', kind: 'old', now: 'σου' },
        { g: 'λέγω', en: 'I say', te: 'చెప్పుచున్నాను', kind: 'same', now: 'λέω' },
        { g: 'ἔγειρε', en: 'get up!', te: 'లెమ్ము', kind: 'old', now: 'σήκω' }
      ]
    },
    {
      ref: 'John 15:12', koine: 'αὕτη ἐστὶν ἡ ἐντολὴ ἡ ἐμή, ἵνα ἀγαπᾶτε ἀλλήλους καθὼς ἠγάπησα ὑμᾶς.',
      tr: 'áfti estín i entolí i emí, ína agapáte allílus kathós igápisa imás.',
      mg: 'Αυτή είναι η δική μου εντολή: να αγαπάτε ο ένας τον άλλον, όπως σας αγάπησα εγώ.',
      en: 'This is my commandment, that you love one another as I have loved you.',
      te: 'నేను మిమ్మల్ని ప్రేమించినట్లే మీరు ఒకరినొకరు ప్రేమించాలి, ఇదే నా ఆజ్ఞ.',
      words: [
        { g: 'αὕτη', en: 'this', te: 'ఇది', kind: 'same', now: 'αυτή' },
        { g: 'ἐντολὴ', en: 'commandment', te: 'ఆజ్ఞ', kind: 'same', now: 'εντολή' },
        { g: 'ἐμή', en: 'my', te: 'నా', kind: 'old', now: 'δική μου' },
        { g: 'ἀγαπᾶτε', en: 'you love', te: 'ప్రేమించండి', kind: 'same', now: 'αγαπάτε' },
        { g: 'ἀλλήλους', en: 'one another', te: 'ఒకరినొకరు', kind: 'old', now: 'ο ένας τον άλλον' },
        { g: 'καθὼς', en: 'just as', te: 'వలె', kind: 'old', now: 'όπως' },
        { g: 'ἠγάπησα', en: 'I loved', te: 'ప్రేమించితిని', kind: 'same', now: 'αγάπησα' }
      ]
    },
    {
      ref: 'Philippians 4:13', koine: 'πάντα ἰσχύω ἐν τῷ ἐνδυναμοῦντί με.',
      tr: 'pánda iskhío en to endhinamúndí me.',
      mg: 'Όλα τα μπορώ μέσω εκείνου που με δυναμώνει.',
      en: 'I can do all things through him who strengthens me.',
      te: 'నన్ను బలపరిచే ఆయనలో నేను సమస్తాన్ని చేయగలను.',
      words: [
        { g: 'πάντα', en: 'all things', te: 'సమస్తము', kind: 'old', now: 'όλα', note: 'Today πάντα means "always".' },
        { g: 'ἰσχύω', en: 'I am strong, I can', te: 'చేయగలను', kind: 'old', now: 'μπορώ' },
        { g: 'ἐν', en: 'in', te: 'లో', kind: 'old', now: 'σε / μέσω' },
        { g: 'τῷ', en: 'the one (to/in)', te: '—', kind: 'old', now: 'εκείνου', note: 'Dative again. You saw τω in Δόξα τω Θεώ.' },
        { g: 'ἐνδυναμοῦντί', en: 'strengthening', te: 'బలపరచు', kind: 'old', now: 'που με δυναμώνει', note: 'Root δύναμη (power), as in dynamite.' },
        { g: 'με', en: 'me', te: 'నన్ను', kind: 'same', now: 'με' }
      ]
    },
    {
      ref: 'Matthew 5:9', koine: 'μακάριοι οἱ εἰρηνοποιοί, ὅτι αὐτοὶ υἱοὶ θεοῦ κληθήσονται.',
      tr: 'makárii i irinopií, óti aftí ií theú klithísonde.',
      mg: 'Μακάριοι όσοι φέρνουν ειρήνη, γιατί αυτοί θα ονομαστούν παιδιά του Θεού.',
      en: 'Blessed are the peacemakers, for they will be called children of God.',
      te: 'సమాధానపరచువారు ధన్యులు, వారు దేవుని కుమారులు అనబడతారు.',
      words: [
        { g: 'μακάριοι', en: 'blessed', te: 'ధన్యులు', kind: 'same', now: 'μακάριοι' },
        { g: 'οἱ', en: 'the (plural)', te: '—', kind: 'same', now: 'οι' },
        { g: 'εἰρηνοποιοί', en: 'peacemakers', te: 'సమాధానపరచువారు', kind: 'same', now: 'ειρηνοποιοί', note: 'ειρήνη (peace) + ποιώ (make).' },
        { g: 'ὅτι', en: 'because', te: 'ఎందుకంటే', kind: 'old', now: 'γιατί' },
        { g: 'αὐτοὶ', en: 'they', te: 'వారు', kind: 'same', now: 'αυτοί' },
        { g: 'υἱοὶ', en: 'sons, children', te: 'కుమారులు', kind: 'old', now: 'παιδιά / γιοι' },
        { g: 'θεοῦ', en: 'of God', te: 'దేవుని', kind: 'same', now: 'Θεού', note: 'The "of" ending, like Telugu -ని / -యొక్క.' },
        { g: 'κληθήσονται', en: 'will be called', te: 'అనబడుదురు', kind: 'old', now: 'θα ονομαστούν' }
      ]
    }
  ]
};
