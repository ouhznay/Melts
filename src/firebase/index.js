import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAqH5sgGeAVtHGT-O2Wv8SEzs1N2izYN38",
    authDomain: "melts-77d33.firebaseapp.com",
    projectId: "melts-77d33",
    storageBucket: "melts-77d33.appspot.com",
    messagingSenderId: "681962975214",
    appId: "1:681962975214:web:c61ad6697e8e15ddc7a8ff"
}

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore();
const auth = firebase.auth();

export {auth};
export default firebase;