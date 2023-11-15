import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAheYpm_SoT0hV8qzXIs5SrSylTuW8rRH4",
  authDomain: "mini-blog-3d1f6.firebaseapp.com",
  projectId: "mini-blog-3d1f6",
  storageBucket: "mini-blog-3d1f6.appspot.com",
  messagingSenderId: "532291506207",
  appId: "1:532291506207:web:ca3398d9c3c22285ca852a",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
