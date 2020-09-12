import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDL9SFqmVSeM4W3yB5BIpBYsPguFTyuYns",
  authDomain: "fir-ce7dd.firebaseapp.com",
  databaseURL: "https://fir-ce7dd.firebaseio.com",
  projectId: "fir-ce7dd",
  storageBucket: "fir-ce7dd.appspot.com",
  messagingSenderId: "661198023557",
  appId: "1:661198023557:web:ca64cd1f4b6810ad9ab2ec",
  measurementId: "G-2WV01WQBPM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
