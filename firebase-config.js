<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAphHTM4faH7_FVXdnootp4NipZd3vtEck",
    authDomain: "tambola69-9dc8f.firebaseapp.com",
    databaseURL: "https://tambola69-9dc8f-default-rtdb.firebaseio.com",
    projectId: "tambola69-9dc8f",
    storageBucket: "tambola69-9dc8f.firebasestorage.app",
    messagingSenderId: "413290158586",
    appId: "1:413290158586:web:70fff2d94b29206487ec43",
    measurementId: "G-6WJNDX5DGB"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>