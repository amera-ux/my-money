import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyCBTUrcYgRUW4Mzaejp-wejnY0w_16H0-g",
    authDomain: "mymoney-de6da.firebaseapp.com",
    projectId: "mymoney-de6da",
    storageBucket: "mymoney-de6da.appspot.com",
    messagingSenderId: "218946743080",
    appId: "1:218946743080:web:869a09099f053db5b8fe1d"
  };

  //init firebase

  firebase.initializeApp(firebaseConfig)

  // init service

  const projectFirestore = firebase.firestore()
  const projectAuth =firebase.auth()

  // timestamp
  const timestamp = firebase.firestore.Timestamp

  export {projectFirestore, projectAuth, timestamp}