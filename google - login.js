function googleLogin() {
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      // Login successful
      console.log("User:", result.user);
      // Redirect user to dashboard
      window.location.href = "home.html"; // home.html ke path me redirect
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
