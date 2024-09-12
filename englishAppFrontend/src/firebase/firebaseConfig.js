// firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCJRdG4px6vlTqaip9ckv22MuC_OrON7KE",
    authDomain: "englishapp-5829e.firebaseapp.com",
    projectId: "englishapp-5829e",
    storageBucket: "englishapp-5829e.appspot.com",
    messagingSenderId: "589441236744",
    appId: "1:589441236744:web:b030a6061dd3e83e23f6bd",
    measurementId: "G-S6PGFT327B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
