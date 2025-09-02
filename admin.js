import { db } from "./
firebase-config.js";
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tambola Admin Panel</title>
</head>
<body style="font-family: Arial; background: #111; color: #fff; text-align:center; padding:20px;">

  <h2>Tambola Admin Panel</h2>

  <input id="numberInput" placeholder="Enter Number" style="padding:8px; border-radius:6px;"/>
  <br><br>
  <button id="saveBtn" style="padding:8px 16px; margin:5px;">Save Number</button>
  <button id="loadBtn" style="padding:8px 16px; margin:5px;">Load Numbers</button>

  <ul id="numberList"></ul>

  <!-- Firebase SDK -->
  <script type="module">
    // Firebase imports
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
    import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

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

    // Firestore reference
    const numbersRef = collection(db, "numbers");

    // Save number
    async function saveNumber() {
      const number = document.getElementById("numberInput").value;

      if (!number) {
        alert("Please enter a number!");
        return;
      }

      try {
        await addDoc(numbersRef, {
          value: number,
          timestamp: new Date()
        });
        alert("Number saved: " + number);
        document.getElementById("numberInput").value = "";
      } catch (e) {
        console.error("Error adding number: ", e);
      }
    }

    // Load numbers
    async function loadNumbers() {
      const list = document.getElementById("numberList");
      list.innerHTML = "";

      const querySnapshot = await getDocs(numbersRef);
      querySnapshot.forEach((doc) => {
        const item = doc.data();
        const li = document.createElement("li");
        li.textContent = `Number: ${item.value}`;
        list.appendChild(li);
      });
    }

    // Event listeners
    document.getElementById("saveBtn").addEventListener("click", saveNumber);
    document.getElementById("loadBtn").addEventListener("click", loadNumbers);
  </script>
</body>
</html>