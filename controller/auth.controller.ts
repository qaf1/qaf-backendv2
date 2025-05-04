
import express, { Express, Request, Response } from 'express'; 
import axios from 'axios';
import dotenv from 'dotenv';
// const firebase = require('firebase');


// // Import the functions you need from the SDKs you need
// // const firebase = require('firebase');
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth, onAuthStateChanged, signInWithPhoneNumber } from "firebase/auth";

// const admin = require('firebase-admin');
// admin.initializeApp();


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDwandflKJAXLTKzyvupgJVcE2ciwpO37E",
//   authDomain: "qaf-kiko.firebaseapp.com",
//   projectId: "qaf-kiko",
//   storageBucket: "qaf-kiko.appspot.com",
//   messagingSenderId: "823773998985",
//   appId: "1:823773998985:web:7313b9ee6b4685864f3b58",
//   measurementId: "G-MB0E9Z2QZ2"
// };
// firebase.initializeApp(firebaseConfig);

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const auth = getAuth(app);

// var applicationVerifier = new firebase.auth.RecaptchaVerifier(
//   'recaptcha-container');
dotenv.config();


const baseURL:any = process.env.AUTH_URL;

// const username = process.env.AUTH_URL
// const password = process.env.AUTH_URL
// const grant_type = process.env.AUTH_URL
// const client_id =  process.env.AUTH_URL
// const client_secret = process.env.AUTH_URL


const authController = async (req: Request, res: Response) => {
    try {
//       const phoneNumber = '+1234567890'; // The user's phone number in international format, including the country code

//       const auth = firebase.auth();

// // Send a verification code to the user's phone
// auth.sendSignInLinkToPhoneNumber(phoneNumber, firebaseConfig)
//   .then(function() {
//     // The verification code has been sent to the user's phone
//   })
//   .catch((e) =>{
//     console.log(e);
//   });

// Sign the user in using the verification code they received on their phone
// auth.signInWithPhoneNumber(phoneNumber, "123")
//   .then(function(result) {
//     // The user has been signed in
//   })
//   .catch(function(error) {
//     // An error occurred while signing the user in
//   });
        console.log('Hello')
        const body = {
            username : process.env.USERNAME,
            password : process.env.PASSWORD,
            grant_type : "password",
            client_id :  process.env.CLIENT_KEY,
            client_secret : process.env.CLIENT_SECRET,
        }

        const headers = {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json',
        }

 
         const response = await axios.post('https://login.salesforce.com/services/oauth2/token', body, {
          headers: headers
        });
        console.log(response.data);

        res.status(200).json(response.data);
      } catch (error:any) {
        console.error(`Error: ${error.message}`);
        res.status(500).json({ message: 'An error occurred while fetching data from the external API' });
      }
    res.send('Express + TypeScript Server'+baseURL);
};
  

export {
    authController
}
