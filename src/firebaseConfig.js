// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDy7tsHbdWrMl5XJuVeAz_p1pHsweV3lPU",
//   authDomain: "whatsapp-42a69.firebaseapp.com",
//   projectId: "whatsapp-42a69",
//   storageBucket: "whatsapp-42a69.appspot.com",
//   messagingSenderId: "215282075006",
//   appId: "1:215282075006:web:de88d4ae8a84290a2a5f2f",
//   measurementId: "G-QXXFJDJKQ6",
// };

// const firebaseapp = firebase.initializeApp(firebaseConfig);
// const db = firebaseapp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

// export { auth, provider, db };
// // export default ;
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDy7tsHbdWrMl5XJuVeAz_p1pHsweV3lPU",
  authDomain: "whatsapp-42a69.firebaseapp.com",
  projectId: "whatsapp-42a69",
  storageBucket: "whatsapp-42a69.appspot.com",
  messagingSenderId: "215282075006",
  appId: "1:215282075006:web:de88d4ae8a84290a2a5f2f",
  measurementId: "G-QXXFJDJKQ6",
};

// const firebaseApp = initializeApp(firebaseConfig);
// const auth = getAuth(firebaseApp);
// const db = getFirestore(firebaseApp);
// const provider = new GoogleAuthProvider();

// export { auth, db, provider };