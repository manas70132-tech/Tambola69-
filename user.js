import { db } "./
firebase-config.js";
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tambola User App</title>
</head>
<body style="font-family: Arial; background:#222; color:#fff; text-align:center; padding:20px;">

  <h2>Tambola User Screen</h2>
  <p>Below are the numbers drawn by Admin:</p>

  <ul id="liveNumbers" style="list-style:none; padding:0; font-size:20px;"></ul>

  <!-- Firebase SDK -->
  <script type="module">
    // Firebase imports
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
    import { getFirestore, collection, onSnapshot, query, orderBy } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

    // 🔹 Your Firebase Config (replace with your real config)
    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_PROJECT_ID.appspot.com",
      messagingSenderId: "YOUR_SENDER_ID",
      appId: "YOUR_APP_ID"
    };

    // Init Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    // Firestore reference (numbers collection)
    const numbersRef = collection(db, "numbers");

    // Live listener (numbers ordered by time)
    const q = query(numbersRef, orderBy("timestamp", "asc"));
    const list = document.getElementById("liveNumbers");

    onSnapshot(q, (snapshot) => {
      list.innerHTML = "";
      snapshot.forEach((doc) => {
        const item = doc.data();
        const li = document.createElement("li");
        li.textContent = `Number: ${item.value}`;
        list.appendChild(li);
      });
    });
  </script>
</body>
</html>