import {
  getFunctions,
  httpsCallable,
  connectFunctionsEmulator,
} from "firebase/functions";

const functions = getFunctions();

const sessionManager = httpsCallable(functions, "sessionManager");

const hostname = location.hostname;
console.log(hostname);
if (hostname === "localhost") {
  connectFunctionsEmulator(functions, "localhost", 5001);
}

export { functions, sessionManager };
