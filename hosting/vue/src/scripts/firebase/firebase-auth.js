import { firebaseApp } from "./firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  updateEmail,
  sendEmailVerification,
  sendPasswordResetEmail,
  signOut,
  setPersistence,
  inMemoryPersistence,
} from "firebase/auth";

const auth = getAuth(firebaseApp);

auth.useDeviceLanguage();

const googleAuth = new GoogleAuthProvider();

googleAuth.addScope("https://www.googleapis.com/auth/contacts.readonly");

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signOut,
  updateEmail,
  sendEmailVerification,
  sendPasswordResetEmail,
  setPersistence,
  inMemoryPersistence,
  googleAuth,
};
