import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCt6oz0PMBFshotdeIcCc9b7KU1sRqRCbk",
  authDomain: "reminder-app-ee5ad.firebaseapp.com",
  projectId: "reminder-app-ee5ad",
  storageBucket: "reminder-app-ee5ad.appspot.com",
  messagingSenderId: "907645537838",
  appId: "1:907645537838:web:20b59e3ed3e1eb8e3219bf",
  measurementId: "G-MZP96G06M1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); //database
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
