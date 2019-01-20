import Vue from 'vue'
import VueFire from 'vuefire'
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueFire)

const firebaseApp = firebase.initializeApp({
  // ここにfirebaseのapi情報をコピペします。
  apiKey: "AIzaSyChvX7sPUizAZP0rmn7B3xTMK_v61ZBDSQ",
  authDomain: "vue-sample-32d86.firebaseapp.com",
  databaseURL: "https://vue-sample-32d86.firebaseio.com",
  projectId: "vue-sample-32d86",
  storageBucket: "vue-sample-32d86.appspot.com",
  messagingSenderId: "320156514230"
});

export const db = firebaseApp.firestore();

// Timestamp型を使うために
// 参考 https://qiita.com/teramotodaiki/items/b3592326579166003102
const settings = { timestampsInSnapshots: true };
db.settings(settings);