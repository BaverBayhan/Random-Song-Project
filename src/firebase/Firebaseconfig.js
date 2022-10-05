import firebase from "firebase/app"
import "firebase/database"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDTuSYG0SqnbQ1NSRBZJuGJVopNfJQo9cY",
  authDomain: "reactlogosong.firebaseapp.com",
  projectId: "reactlogosong",
  storageBucket: "reactlogosong.appspot.com",
  messagingSenderId: "679911380629",
  appId: "1:679911380629:web:7bb3c5f077cbf878d3ad9c",
  measurementId: "G-XVDJ2GWYP3"
};

firebase.initializeApp(firebaseConfig);

const database=firebase.database()


export {database as default}





