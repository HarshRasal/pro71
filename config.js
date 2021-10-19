import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 apiKey: "AIzaSyB8tlLbGxJ20uFng60kdrdzhOfa5fHdIcw",
  authDomain: "complaintfroum.firebaseapp.com",
  projectId: "complaintfroum",
  storageBucket: "complaintfroum.appspot.com",
  messagingSenderId: "603948015438",
  appId: "1:603948015438:web:a1e20037304028f7ba481f"
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

