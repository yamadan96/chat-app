// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
  getDatabase,
  ref,
  get,
  push,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo9kAhuR3p-qVczdqvmGB7T3T6VHRFTMg",
  authDomain: "chat-1bc1e.firebaseapp.com",
  databaseURL:
    "https://chat-1bc1e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chat-1bc1e",
  storageBucket: "chat-1bc1e.appspot.com",
  messagingSenderId: "441299653065",
  appId: "1:441299653065:web:fbd4d89282f894ab781818",
  measurementId: "G-NSH6FLFW1C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

// 投稿
function post() {
  var text = document.getElementById("text");
  var date = new Date();

  push(ref(db, "chat"), {
    text: text.value,
    date: date.toLocaleString(),
  });
}

window.post = post;
export { post };

// 取得・表示
var chat = document.getElementById("chat");

onValue(ref(db, "chat"), function (snapshot) {
  var chatList = snapshot.val();

  chat.innerHTML = "";
  Object.keys(chatList).forEach((key) => {
    chat.innerHTML +=
      '<div class="text-secindary small">' +
      chatList[key].date +
      "</div><div>" +
      chatList[key].text +
      "</div><hr>";
  });
});
