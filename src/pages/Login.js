import { useState } from "react";
import "../css/login.css";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

function Login() {
  return (
    <div className="login backgroundColor4  row justify-content-center d-flex align-items-center">
      <SignIn />
    </div>
  );
}

export default Login;
