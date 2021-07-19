import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC2qWjFv0njsN7Sf6qEf6Ejap8lEwBwk6A",
    authDomain: "tat-it-offcial.firebaseapp.com",
    projectId: "tat-it-offcial",
    storageBucket: "tat-it-offcial.appspot.com",
    messagingSenderId: "335479062736",
    appId: "1:335479062736:web:51b13a68ef223f8aa5ded5",
    measurementId: "G-V4MZE4VQPK"
});

//Initialize Firebase 
var db = firebaseApp.firestore();

export { db };