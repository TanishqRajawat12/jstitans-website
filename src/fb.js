import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth';

const ZNDynaConfig = {
    apiKey: "AIzaSyDkIZqB0GViZhrQKe_7qHyr_DQeAqOxHPw",
    authDomain: "jstitans-bob-bitj.firebaseapp.com",
    projectId: "jstitans-bob-bitj",
    storageBucket: "jstitans-bob-bitj.appspot.com",
    messagingSenderId: "118720981772",
    appId: "1:118720981772:web:bd132f7cc5d1f783797729"
};

firebase.initializeApp(ZNDynaConfig)
const db = firebase.firestore()
const auth = firebase.auth()
db.settings({ timestampsInSnapshots: true })

export default function getFirebaseInstances() {
    return { db, auth };
}