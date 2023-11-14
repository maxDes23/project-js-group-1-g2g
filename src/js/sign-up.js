import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

const app = initializeApp({
  apiKey: 'AIzaSyDQugW-CaYBrWSvO2DN6FwPpw05I7D6tAM',
  authDomain: 'bookshelf-b1d96.firebaseapp.com',
  databaseURL:
    'https://bookshelf-b1d96-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'bookshelf-b1d96',
  storageBucket: 'bookshelf-b1d96.appspot.com',
  messagingSenderId: '179300012730',
  appId: '1:179300012730:web:aa4a508d0a2ffec4c3a883',
  measurementId: 'G-4M8036172T',
});

// Initialize Firebase
const auth = getAuth(app);

const userName = document.querySelector('#name');
const userEmail = document.querySelector('#email');
const userPassword = document.querySelector('#password');
const authForm = document.querySelector('.sign-up-form');
const signUpButton = document.querySelector('.sign-up-btn');
const signInButton = document.querySelector('.sign-in-btn');
// const logOutButton = document.querySelector('');
const headerSignUpBtn = document.querySelector('.sign-up-btn-text');
// console.log(userName);
// console.log(userEmail);
// console.log(userPassword);
// console.log(authForm);
// console.log(signUpButton);
// console.log(signInButton);
// console.log(headerSignUpBtn);

authForm.addEventListener('submit', userSignUp);
signInButton.addEventListener('click', userSignIn);

userName.classList.remove('display-none');
if (!userName.hasAttribute('required')) userName.setAttribute('required');
signUpButton.textContent = 'SIGN UP';
signInButton.textContent = 'SIGN IN';

async function userSignUp(evt) {
  evt.preventDefault();
  if (signUpButton.textContent === 'SIGN UP') {
    const form = evt.target;
    const signUpEmail = form.elements.email.value;
    const signUpPassword = form.elements.password.value;

    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
      .then(userData => {
        const user = userData.user;
        console.log(user);
        alert('Your account has been created!');
        form.reset();
      })
      .catch(error => {
        console.log(error.code + error.message);
        alert(
          'This email address is already in use on Bookshelf. Please sign in!'
        );
        form.reset();
      });
  }

  if (signUpButton.textContent === 'SIGN IN') {
    userSignIn();
  }
}

async function userSignIn(evt) {
  evt.preventDefault();
  userName.removeAttribute('required');
  userName.classList.add('display-none');
  signUpButton.textContent = 'SIGN IN';
  signInButton.textContent = 'SIGN UP';

  const form = evt.target;
  // console.dir(form.elements);
  const signInEmail = form.elements.email.value;
  const signInPassword = form.elements.password.value;

  signInWithEmailAndPassword(auth, signInEmail, signInPassword)
    .then(userData => {
      const user = userData.user;
      alert('You have signed in successfully!');
      form.reset();
    })
    .catch(error => {
      console.log(error.code + error.message);
      alert('The password is incorrect. Try again!');
      form.reset();
    });
}
