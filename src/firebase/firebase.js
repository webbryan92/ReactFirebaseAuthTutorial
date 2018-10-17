import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


//firebase config from the firebase sites
const config = {
  apiKey: "AIzaSyCNcG00bmigpJNln0uWwwllLIu5R8iBP9w",
  authDomain: "authentication-tutorial-4ddfa.firebaseapp.com",
  databaseURL: "https://authentication-tutorial-4ddfa.firebaseio.com",
  projectId: "authentication-tutorial-4ddfa",
  storageBucket: "authentication-tutorial-4ddfa.appspot.com",
  messagingSenderId: "686784994701"
};
//initialize your firebase with the config parameters
if (!firebase.apps.length){
    firebase.initializeApp(config);
}
//expose the firebase database
const db = firebase.database();
//pull in auth api from firebase to be used in the auth file
const auth = firebase.auth();

//export the auth api
export {
    db,
    auth,
};