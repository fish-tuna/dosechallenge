import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDm1mthrl3-YmBse_-qmKLC0sflBzyUqWc",
  authDomain: "pfdosechallenge.firebaseapp.com",
  databaseURL: "https://pfdosechallenge.firebaseio.com",
  projectId: "pfdosechallenge",
  storageBucket: "pfdosechallenge.appspot.com",
  messagingSenderId: "205369782269",
  appId: "1:205369782269:web:71572669a6e601c92c7394",
};
firebase.initializeApp(config);
const db = firebase.firestore();

export default db;
