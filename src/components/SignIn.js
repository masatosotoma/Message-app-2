import { Button } from "@mui/material";
import firebase from "firebase/compat/app";
import React from "react";
import { auth } from "../firebase";

function SignIn() {
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <div>
      <Button onClick={signInWithGoogle}>Login with Google</Button>
    </div>
  );
}

export default SignIn;
