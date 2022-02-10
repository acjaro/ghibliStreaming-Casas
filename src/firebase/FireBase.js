

import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp(
//PONER ACA LA INFO DE SU APP
{
    apiKey: "AIzaSyBtnBXfanMey8ILE0qL3ZFbYqP6mT5K_ow",
    authDomain: "ghiblistreaming-casas.firebaseapp.com",
    projectId: "ghiblistreaming-casas",
    storageBucket: "ghiblistreaming-casas.appspot.com",
    messagingSenderId: "304954519541",
    appId: "1:304954519541:web:216081696ed738e306babc"
}
);
export function getFirebase(){
    return app;
}
export function getFirestore(){
    return firebase.firestore(app);
}