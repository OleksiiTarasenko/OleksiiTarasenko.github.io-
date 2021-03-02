import Vue from "vue";
import App from "./App.vue";
import router from "./routes/index";
import firebase from "firebase";
import store from "./store";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyCNWEA1tC1oLsJcF2PxwDtUxbQSrWxK1gs",
  authDomain: "baqa-ec8f3.firebaseapp.com",
  databaseURL:
    "https://baqa-ec8f3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "baqa-ec8f3",
  storageBucket: "baqa-ec8f3.appspot.com",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;

firebase.auth().onAuthStateChanged((user) => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
