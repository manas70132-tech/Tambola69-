// Firebase config (apna config paste karo)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

// Initialize Firebase (sirf ek baar)
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Database reference
const db = firebase.database();￼Enter
