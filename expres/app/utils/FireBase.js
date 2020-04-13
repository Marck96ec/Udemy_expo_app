import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAvKZRoYjXq3hU1L6WSHlSxVpKreC6-cOA",
  authDomain: "expres-cf0d3.firebaseapp.com",
  databaseURL: "https://expres-cf0d3.firebaseio.com",
  projectId: "expres-cf0d3",
  storageBucket: "expres-cf0d3.appspot.com",
  messagingSenderId: "1038517325239",
  appId: "1:1038517325239:web:ed03e8da4a23556beb6c32"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
/*
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.13.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAvKZRoYjXq3hU1L6WSHlSxVpKreC6-cOA",
    authDomain: "expres-cf0d3.firebaseapp.com",
    databaseURL: "https://expres-cf0d3.firebaseio.com",
    projectId: "expres-cf0d3",
    storageBucket: "expres-cf0d3.appspot.com",
    messagingSenderId: "1038517325239",
    appId: "1:1038517325239:web:ed03e8da4a23556beb6c32"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>*/
