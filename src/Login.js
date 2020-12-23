import React from "react";
import "./Login.css";
import { useStateValue } from "./StateProvider";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { Button } from "@material-ui/core";
import db from "./firebase";
function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://www.ssls.com/blog/wp-content/uploads/2014/08/Google-HTTPS_SEO.png"
          alt="Security Image"
        />
        <h1>Please Sign in to Reminder App</h1>
        <p>Developed by Yılmaz</p>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
}

export default Login;
