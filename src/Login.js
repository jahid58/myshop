import React, { useContext, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from "react-router-dom";
import firebaseConfig from "./firebaseConfig";
import logo from "./images/u.jpg";
import { useStateValue } from "./StateProvider";

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const [state, dispatch] = useStateValue();

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email, error } = result.user;
        dispatch({
          type: "ADD_TO_USER",
          user: {
            name: displayName,
            email: email,
          },
        });

        if (!error) {
          history.replace(from);
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="p-5 d-flex justify-content-center align-items-center bg-light ">
      <div className="shadow p-5 text-center rounded bg-white m-5">
        {" "}
        <img src={logo} style={{ width: "120px" }} alt="" />
        <h3> Login With </h3>
        <button className="btn btn-secondary " onClick={handleGoogleSignIn}>
          Continue with Google
        </button>
        <p>
          Don't have an account <a href="/#">Create an account</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
