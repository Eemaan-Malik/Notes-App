import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeZANKMvaaxkGqfmNKPBsxUnAwnHOeEJ8",
  authDomain: "notes-app-7aced.firebaseapp.com",
  projectId: "notes-app-7aced",
  storageBucket: "notes-app-7aced.appspot.com",
  messagingSenderId: "26819829765",
  appId: "1:26819829765:web:85b66abe7b21dea5a7fc6c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const notesCollection = collection(db, "notes");

export {  notesCollection, db };
