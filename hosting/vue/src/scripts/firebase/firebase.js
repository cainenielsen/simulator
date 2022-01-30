import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyClvuoWvhjhHw5JTfrV5mwWLgpaXGrXFdc",
  authDomain: "corporate-simulator.firebaseapp.com",
  projectId: "corporate-simulator",
  storageBucket: "corporate-simulator.appspot.com",
  messagingSenderId: "1085198337169",
  appId: "1:1085198337169:web:45b5e39954a573b5fbeb30",
  measurementId: "G-ZSDBECN69R",
};

const firebaseApp = initializeApp(firebaseConfig);

export { firebaseApp };
