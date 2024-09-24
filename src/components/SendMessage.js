import React, { useState } from "react";
import { db } from "../firebase.js";
import firebase from "firebase/compat";

function SendMessage() {
  const [message, setMessage] = useState("");
  function sendMessage(e) {
    e.preventDefault();

    db.collection("messages").add({
      text: message,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  }

  return (
    <div>
      <form onSubmit={sendMessage}>
        <div>
          <input
            placeholder="Enter message"
            type="text"
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
