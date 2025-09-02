// Firebase config (apna config paste karo)
const firebaseConfig = {
  apiKey: "AIzaSyAphHTM4faH7_FVXdnootp4NipZd3vtEck",
  authDomain: "tambola69-9dc8f.firebaseapp.com",
  databaseURL: "https://tambola69-9dc8f.firebaseio.com",
  projectId: "tambola69-9dc8f",
  storageBucket: "tambola69-9dc8f.appspot.com",
  messagingSenderId: "413290158586",
  appId: "1:413290158586:web:70fff2d94b29206487ec43"
};

// Initialize Firebase (sirf ek baar)
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Database reference
const db = firebase.database();￼Enter
