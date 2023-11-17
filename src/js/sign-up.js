import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { Notify } from 'notiflix';

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
const authForm = document.querySelector('.sign-up-form');
const signUpButton = document.querySelector('.sign-up-btn');
const signInButton = document.querySelector('.sign-in-btn');
const logOutButton = document.querySelector('.log-out-btn');
const authModal = document.querySelector('#authorization');
const authFormCloseBtn = document.querySelector('.modal-close-btn');

const headerSignUpBtn = document.querySelector('.sign-up-btn-text');
const headerBtnText = document.querySelector('.sign-up-btn-text');

const mobileSignUp = document.querySelector('.sign-up-mobile');
const mobileMenuContent = document.querySelector('.mobile-nav');
const mobileLogOutBtn = document.querySelector('.mobile-logout-div');
const mobileUserStephen = document.querySelector('.user-block');



authFormCloseBtn.addEventListener('click', onClickClose);
authForm.addEventListener('submit', onClickSignUp);
signInButton.addEventListener('click', onClickSignIn);
headerSignUpBtn.addEventListener('click', onClickHeaderSignUp);
logOutButton.addEventListener('click', onClickLogOut);
mobileSignUp.addEventListener('click', onClickMobileSignUp);


function onClickClose() {
  authModal.classList.add('display-none')
}


if (!userName.hasAttribute('required')) userName.setAttribute('required');
signUpButton.textContent = 'SIGN UP';
signInButton.textContent = 'SIGN IN';

mobileSignUp.classList.add('display-none');

// -------HEADER SIGN UP BTN

function onClickHeaderSignUp(evt) {
  evt.preventDefault();
  if (headerBtnText.textContent === 'Log out') {
    onClickLogOut();
    return;
  }

  authModal.classList.remove('display-none');
}

function onClickMobileSignUp(evt) {
  evt.preventDefault();
  authModal.classList.remove('display-none');
}

// -------SIGN UP

async function onClickSignUp(evt) {
  evt.preventDefault();
  if (signUpButton.textContent === 'SIGN UP') {
    const form = evt.target;
    const signUpEmail = form.elements.email.value;
    const signUpPassword = form.elements.password.value;

    if (signUpPassword.length < 6) {
      Notify.failure('Password should be at least 6 characters!');
      return;
    }

    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
      .then(userData => {
        const user = userData.user;
        console.log(user);
        Notify.success('Your account has been created!');
        form.reset();
      })
      .catch(error => {
        console.log(error.code + error.message);
        Notify.failure('This email address is already in use on Bookshelf. Please sign in!');
        form.reset();
      });
  }

  if (signUpButton.textContent === 'SIGN IN') {
    const form = evt.target;
    const signInEmail = form.elements.email.value;
    const signInPassword = form.elements.password.value;

    signInWithEmailAndPassword(auth, signInEmail, signInPassword)
      .then(userData => {
        const user = userData.user;
        Notify.success('You have signed in successfully!');
        authModal.classList.add('display-none');
        form.reset();
      })
      .catch(error => {
        console.log(error.code + error.message);
        Notify.failure('The email address or password is incorrect. Try again!');
        form.reset();
      });
  }
}

// -------SIGN IN

async function onClickSignIn(evt) {
  evt.preventDefault();
  if (signUpButton.textContent === 'SIGN IN') {
    userName.classList.remove('display-none');
    signUpButton.textContent = 'SIGN UP';
    signInButton.textContent = 'SIGN IN';
    return;
  }

  if (signUpButton.textContent === 'SIGN UP') {
    userName.removeAttribute('required');
    userName.classList.add('display-none');
    signUpButton.textContent = 'SIGN IN';
    signInButton.textContent = 'SIGN UP';
    return;
  }
}

// -------AUTHORIZATION STATUS

async function checkAuthState() {
  onAuthStateChanged(auth, user => {
    if (user) {
      authModal.classList.add('display-none');
      headerBtnText.textContent = 'Log out';
      mobileSignUp.classList.add('display-none');
      mobileMenuContent.classList.remove('display-none');
      mobileLogOutBtn.classList.remove('display-none');
      mobileUserStephen.classList.remove('display-none');
      //Якщо зареєстровані/залогінені - пишемо сюди який контент маємо показати:
      // // secretContent.style.display = 'block';
    } else {
      headerBtnText.textContent = 'Sign up';
      mobileSignUp.classList.remove('display-none');
      mobileMenuContent.classList.add('display-none');
      mobileLogOutBtn.classList.add('display-none');
      mobileUserStephen.classList.add('display-none');
    }
  });
}

// -------LOG OUT

async function onClickLogOut() {
  await signOut(auth);
  // Пишемо сюди який контент маємо приховати, коли натискаємо лог аут
  Notify.success('You have successfully logged out!');
}

checkAuthState();
