//our main database which will house the todos
import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";



  // Set the configuration for app
  var firebaseConfig = {
    apiKey: "AIzaSyD_-vvAs2kEuHxVBkq8qdps8TNTIZcNuQw",
    authDomain: "react-todo-effaa.firebaseapp.com",
    databaseURL: "https://react-todo-effaa-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "react-todo-effaa",
    storageBucket: "react-todo-effaa.appspot.com",
    messagingSenderId: "312052894873",
    appId: "1:312052894873:web:db89625cb4ed7c79be3c08",
    measurementId: "G-VD922PK1RK"

  };

  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  firebase.analytics();


  // Get a reference to the database service
  const database = firebase.database();
  
  export const auth = firebase.auth();
  export const firestone = firebase.firestone();

  export default Firebase;