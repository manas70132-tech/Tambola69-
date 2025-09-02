// 1️⃣ Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAphHTM4faH7_FVXdnootp4NipZd3vtEck",
  authDomain:tambola69-9dc8f.firebaseapp.com
 "tambola69-9dc8f.firebaseapp.com",
  databaseURL: "https://tambola69-9dc8f.firebaseio.com",
  projectId: "tambola69-9dc8f",
  storageBucket: "tambola69-9dc8f.appspot.com",
  messagingSenderId: "413290158586",
  appId: "1:413290158586:web:70fff2d94b29206487ec43"
};

// 2️⃣ Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database(); // Agar Firestore use kar rahe ho to change kro

// 3️⃣ HTML me jahan numbers show karna hai
const numbersContainer = document.getElementById("numbers-container");
const statusContainer = document.getElementById("status-container");

// 4️⃣ Real-time listener
const gameRef = db.ref("games/currentGame");
gameRef.on("value", (snapshot) => {
    const data = snapshot.val();
    if (!data) return;

    // Numbers update
    numbersContainer.innerHTML = "";
    data.numbers.forEach(num => {
        const span = document.createElement("span");
        span.textContent = num;
        span.className = "number"; // CSS class
        numbersContainer.appendChild(span);
    });

    // Status update
    statusContainer.textContent = `Game Status: ${data.status}`;
});
const db = firebase.firestore();

db.collection("games").doc("current")
  .onSnapshot(doc => {
    if (doc.exists) {
      const data = doc.data();
      document.getElementById("gameDisplay").innerText = `Current Game: ${data.name}`;
    }
  });
