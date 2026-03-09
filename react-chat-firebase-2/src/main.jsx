import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router'

import App from './components/App.jsx';

//import CSS
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB--G-lw1CE6nP-Q68Ahm9HOBlTbeFcN38",
  authDomain: "info340bchatwinter26.firebaseapp.com",
  databaseURL: "https://info340bchatwinter26-default-rtdb.firebaseio.com",
  projectId: "info340bchatwinter26",
  storageBucket: "info340bchatwinter26.firebasestorage.app",
  messagingSenderId: "356750976563",
  appId: "1:356750976563:web:4fab8703f5fdd0ab8be546"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);