import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyCuzT71wjdYybsnrhhJK3CfgR0IwtNPQrU",
    authDomain: "whatsapp-clone-mern-87a6c.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-mern-87a6c.firebaseio.com",
    projectId: "whatsapp-clone-mern-87a6c",
    storageBucket: "whatsapp-clone-mern-87a6c.appspot.com",
    messagingSenderId: "455372067657",
    appId: "1:455372067657:web:dc941e673d7a2e870ac098"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  const storage = firebase.storage()
  
  export {auth, provider}
  export default db
  
  
