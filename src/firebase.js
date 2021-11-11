import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABj36aflHEgtlq6GrWsKnRjAdTijGdrZM",
  authDomain: "portfolio-c16d4.firebaseapp.com",
  projectId: "portfolio-c16d4",
  storageBucket: "portfolio-c16d4.appspot.com",
  messagingSenderId: "575057066856",
  appId: "1:575057066856:web:8637ab566114f5bd7734dd",
  measurementId: "G-RW3ZK9FJXB"
};
 
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;