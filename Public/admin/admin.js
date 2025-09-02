// Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyAphHTM4faH7_FVXdnootp4NipZd3vtEck",
    authDomain: "tambola69-9dc8f.firebaseapp.com.firebaseapp.com",
    projectId: "tambola69-9dc8f",
    storageBucket: "tambola69-9dc8f".appspot.com",
    messagingSenderId:"413290158586",
    appId: "1:413290158586:web:70fff2d94b29206487ec43"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

// Optional: Check if admin user is logged in
auth.onAuthStateChanged(user => {
    if(user){
        user.getIdTokenResult().then(idTokenResult => {
            if(!idTokenResult.claims.admin){
                alert("You are not an admin!");
                window.location.href = "/"; // redirect non-admin to home
            }
        });
    } else {
        alert("Please login first!");
        window.location.href = "/";
    }
});

// Update button functionality
document.getElementById('updateBtn').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);

    if(!name || !age){
        alert("Please fill both fields");
        return;
    }

    // Change 'users/userID' to your collection/document
    db.collection("users").doc("userID")
      .update({ name: name, age: age })
      .then(() => {
          alert("Data updated successfully!");
      })
      .catch((error) => {
          console.error("Error updating document: ", error);
          alert("Error: " + error.message);
      });
});
const db = firebase.firestore();

// Example: Add new game update
function pushUpdate(gameData) {
  db.collection("games").doc("current").set(gameData)
    .then(() => alert("Update sent!"))
    .catch(err => console.error(err));
}

// Example usage: admin form submit
document.getElementById("updateForm").addEventListener("submit", e => {
  e.preventDefault();
  const gameName = document.getElementById("gameName").value;
  pushUpdate({ name: gameName, timestamp: Date.now() });
});
