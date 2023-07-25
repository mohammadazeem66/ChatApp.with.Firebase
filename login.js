// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXHh-7xl03DgxapRm9Dm9IkYthcb6jej4",
    authDomain: "chatapp-c627d.firebaseapp.com",
    projectId: "chatapp-c627d",
    storageBucket: "chatapp-c627d.appspot.com",
    messagingSenderId: "481718115290",
    appId: "1:481718115290:web:e88f0cfed04583f0da7ee3",
    measurementId: "G-BG7SGEELQK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
  
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    location.href="./chatapp.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

});
