var provider = new firebase.auth.FacebookAuthProvider();

firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    // Login successful
    console.log("User:", result.user);
    // ✅ Redirect user to app/dashboard
    window.location.href = "home.html"; // apne dashboard page ka path
  })
  .catch((error) => {
    console.error("Error:", error);
  });
function facebookLogin() {
  var provider = new firebase.auth.FacebookAuthProvider();

  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      console.log("User:", result.user);
      window.location.href = "home.html";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
