import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD0cKVNqD24jZMELR4yI4kJaQM3HsO2EIo",
    authDomain: "accredit-new.firebaseapp.com",
    databaseURL: "https://accredit-new.firebaseio.com",
    projectId: "accredit-new",
    storageBucket: "accredit-new.appspot.com",
    messagingSenderId: "145859776581",
    appId: "1:145859776581:web:3022e0c3ac944618e4932c",
    measurementId: "G-PXE4NL7R8C"
  };

  const config = firebase.initializeApp(firebaseConfig);
  export default config