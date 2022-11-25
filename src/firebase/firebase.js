import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "autokat-group.firebaseapp.com",
  projectId: "autokat-group",
  storageBucket: "autokat-group.appspot.com",
  messagingSenderId: "941117257282",
  appId: "1:941117257282:web:d3f9b061cd1aee9eaa9fdb",
  measurementId: "G-P03YJPT288"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const docRef = doc(db, "Autokat-Group", "comments")

export const updateCommentData = async (data) => {
  await setDoc(docRef, { comments: data });
}

export const getCommentData = async () => {
  const docRef = doc(db, "Autokat-Group", "comments");
  return await getDoc(docRef);
}