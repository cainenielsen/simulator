import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  collection,
  onSnapshot,
  query,
  where,
  addDoc,
} from "firebase/firestore";

const firestore = getFirestore();

const emailRef = collection(firestore, "email");
const usersRef = collection(firestore, "users");

export {
  firestore,
  getDoc,
  getDocs,
  collection,
  doc,
  onSnapshot,
  query,
  where,
  addDoc,
  emailRef,
  usersRef,
};
