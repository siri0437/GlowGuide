const firebaseConfig = {

  apiKey: "AIzaSyBdAD5V1liMSUZuqVjLt0Oh5h6kdzIyS7Y",

  authDomain: "glowguide-a91bd.firebaseapp.com",

  projectId: "glowguide-a91bd",

  storageBucket: "glowguide-a91bd.firebasestorage.app",

  messagingSenderId: "69898478600",

  appId: "1:69898478600:web:6f454489398745976a5dbd",

  databaseURL:
  "https://glowguide-a91bd-default-rtdb.asia-southeast1.firebasedatabase.app"

};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = firebase.database();