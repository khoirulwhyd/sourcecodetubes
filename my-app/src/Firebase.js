import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,signOut} from 'firebase/auth';
import { useState,useEffect } from 'react';


const settings = {timestampsInSnapshots: true};
const config = {
    apiKey: "AIzaSyA2yZaS6hBAJI98pEmAQ1RRNofvCjKIes0",
    authDomain: "pbf-perpustakaan.firebaseapp.com",
    projectId: "pbf-perpustakaan",
    storageBucket: "pbf-perpustakaan.appspot.com",
    messagingSenderId: "932083814285",
    appId: "1:932083814285:web:2e3735c8424986e6deb7c4",
    measurementId: "G-GY5JXHL847"
};

export const myFirebase = firebase.initializeApp(config);
firebase.firestore().settings(settings);
export default firebase;

const auth = getAuth();

export function register(email, password){
  return createUserWithEmailAndPassword(auth, email, password);
}
export function login(email, password){
  return signInWithEmailAndPassword(auth, email, password);
}

export const baseDB = myFirebase.firestore();