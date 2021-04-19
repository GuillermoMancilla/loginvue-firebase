import firebase from 'firebase'
// import firestore from 'firebase/firestore'

  const firebaseConfig = {
    apiKey: "AIzaSyCpwBDa5Sh9IxQsO6eOulb6eR0gYGIfnh0",
    authDomain: "loginvue-firebase.firebaseapp.com",
    projectId: "loginvue-firebase",
    storageBucket: "loginvue-firebase.appspot.com",
    messagingSenderId: "758794392596",
    appId: "1:758794392596:web:b9f9c10009ae9b6b050301",
    measurementId: "G-07CVXENC2M"
    
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })
// console.log(firestore)

export default firebaseApp.firestore();
