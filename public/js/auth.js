// Google Login
function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            const user = result.user;
            localStorage.setItem("user", JSON.stringify(user));
            window.location.href = "index.html";
        }).catch((error) => {
            console.error(error);
            alert("Login failed!");
        });
}

// Facebook Login
function facebookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            const user = result.user;
            localStorage.setItem("user", JSON.stringify(user));
            window.location.href = "index.html";
        }).catch((error) => {
            console.error(error);
            alert("Login failed!");
        });
}

// OTP Login
function phoneLogin(phoneNumber, appVerifier) {
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            alert("OTP sent!");
        }).catch((error) => {
            console.error(error);
        });
}

function verifyOtp(code) {
    window.confirmationResult.confirm(code).then((result) => {
        const user = result.user;
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "index.html";
    }).catch((error) => {
        console.error(error);
        alert("Invalid OTP!");
    });
}
