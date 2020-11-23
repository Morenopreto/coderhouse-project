import firebase from 'firebase';
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBCz3rbgNveSs1Xaj3bdSfi-Oo_1AUGIJo",
    authDomain: "frodas-coderhouse.firebaseapp.com",
    databaseURL: "https://frodas-coderhouse.firebaseio.com",
    projectId: "frodas-coderhouse",
    storageBucket: "frodas-coderhouse.appspot.com",
    messagingSenderId: "592126224993",
    appId: "1:592126224993:web:017d9a65b2e992c6ec1820",
    measurementId: "G-2E3LW6W0S4"
  };

  const DB = firebase.initializeApp(firebaseConfig);

  export function GetDBFirebase(){
      return firebase.firestore(DB)
  }