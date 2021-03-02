import firebase from "firebase";
// add your own config params, get them from
// https://console.firebase.google.com/project/<project-name>/settings/general/
var firebaseConfig = {
  apiKey: "AIzaSyCNWEA1tC1oLsJcF2PxwDtUxbQSrWxK1gs",
  authDomain: "baqa-ec8f3.firebaseapp.com",
  databaseURL:
    "https://baqa-ec8f3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "baqa-ec8f3",
  storageBucket: "baqa-ec8f3.appspot.com",
  messagingSenderId: "268215576575",
  appId: "1:268215576575:web:6902e4b90bb63e964329ca",
  measurementId: "G-Y3DN4VEWVJ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.database();
export default api;
