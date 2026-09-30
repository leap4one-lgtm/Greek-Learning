// Shares each person's streak and today's progress through Firebase.
// Every phone signs in anonymously; both phones read and write under
// couples/{couple code}/members/{their own sign-in id}. See firestore.rules.
import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js';
import { getAuth, signInAnonymously } from 'https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js';
import {
  getFirestore, collection, doc, setDoc, deleteDoc, onSnapshot, serverTimestamp
} from 'https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js';

// These values identify the project; they are not secrets. Access is controlled by firestore.rules.
const firebaseConfig = {
  apiKey: 'AIzaSyDb-UcWErIBPiZiZ88nj8ZdY56QctkoEhY',
  authDomain: 'mazi-bdd67.firebaseapp.com',
  projectId: 'mazi-bdd67',
  storageBucket: 'mazi-bdd67.firebasestorage.app',
  messagingSenderId: '235623254148',
  appId: '1:235623254148:web:7ed709275ffb0a6d9edad1'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

let uid = null;
let code = null;
let unsubscribe = null;
let signingIn = null;

function report(patch) {
  if (patch.status) lastError = patch.status === 'error';
  if (window.MaziApp) window.MaziApp.setRemote(patch);
}

function signIn() {
  if (uid) return Promise.resolve(uid);
  if (!signingIn) {
    signingIn = signInAnonymously(auth).then((cred) => { uid = cred.user.uid; return uid; })
      .catch((err) => { signingIn = null; throw err; });
  }
  return signingIn;
}

function toMillis(t) { return t && typeof t.toMillis === 'function' ? t.toMillis() : 0; }

async function connect(newCode) {
  if (unsubscribe) { unsubscribe(); unsubscribe = null; }
  code = newCode;
  report({ status: 'connecting', error: '' });
  try {
    await signIn();
    unsubscribe = onSnapshot(
      collection(db, 'couples', code, 'members'),
      (snap) => {
        const members = snap.docs.map((d) => Object.assign({ uid: d.id }, d.data(), { updated: toMillis(d.get('updated')) }));
        report({ status: 'on', uid, members, error: '' });
      },
      (err) => report({ status: 'error', error: err.code || String(err) })
    );
    await push(window.MaziApp.summary());
  } catch (err) {
    report({ status: 'error', error: err.code || String(err) });
  }
}

async function push(s) {
  if (!code) return;
  await signIn();
  await setDoc(doc(db, 'couples', code, 'members', uid), {
    name: String(s.name).slice(0, 24),
    streak: s.streak | 0,
    day: s.day | 0,
    date: s.date,
    done: s.done | 0,
    total: s.total | 0,
    started: s.started | 0,
    updated: serverTimestamp()
  });
}

async function disconnect(oldCode) {
  if (unsubscribe) { unsubscribe(); unsubscribe = null; }
  const c = oldCode || code;
  code = null;
  if (c && uid) { try { await deleteDoc(doc(db, 'couples', c, 'members', uid)); } catch (e) { /* offline: leave it */ } }
}

window.MaziSync = { connect, push, disconnect };

// Reconnect on every app start, and refresh our numbers when the app comes back to the front.
const saved = window.MaziApp && window.MaziApp.couple();
if (saved) connect(saved);
let lastError = false;
function retryOrPush() {
  if (!code) return;
  if (lastError || !unsubscribe) connect(code);
  else push(window.MaziApp.summary()).catch(() => {});
}
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') retryOrPush(); });
window.addEventListener('online', retryOrPush);
