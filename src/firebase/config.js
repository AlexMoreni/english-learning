import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCM1csNF4Qnk5_DqQVrTqPHwy7SZF0fbYM",
  authDomain: "english-learning-e1acc.firebaseapp.com",
  projectId: "english-learning-e1acc",
  storageBucket: "english-learning-e1acc.appspot.com",
  messagingSenderId: "711022873208",
  appId: "1:711022873208:web:dc0d61b51fb32ec5c4bb8d",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
