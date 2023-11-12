// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = initializeApp({
  apiKey: 'AIzaSyDQugW-CaYBrWSvO2DN6FwPpw05I7D6tAM',
  authDomain: 'bookshelf-b1d96.firebaseapp.com',
  projectId: 'bookshelf-b1d96',
  storageBucket: 'bookshelf-b1d96.appspot.com',
  messagingSenderId: '179300012730',
  appId: '1:179300012730:web:aa4a508d0a2ffec4c3a883',
  measurementId: 'G-4M8036172T',
});

// Initialize Firebase
const analytics = getAnalytics(app);
