import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
    
    apiKey: "AIzaSyCgbBbPvkCtXAdmEeZJAxHoQHl8u7ytNV0",
    authDomain: "fir-clone-28850.firebaseapp.com",
    databaseURL: "https://fir-clone-28850-default-rtdb.firebaseio.com",
    projectId: "fir-clone-28850",
    storageBucket: "fir-clone-28850.appspot.com",
    messagingSenderId: "470850099593",
    appId: "1:470850099593:web:cb48ebe14bc72d65cf2958",
    measurementId: "G-3E7CD5KFZR"
      
})


const db = firebaseApp.firestore();

export default db;
