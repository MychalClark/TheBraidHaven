import { useState } from "react";
import "../css/login.css";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

function Login({}) {
  const [signUp, setSignUp] = useState(false);

  const handleOnSignClick = () => {
    setSignUp(!signUp);
  };

  return (
    <div className="login backgroundColor4  row justify-content-center d-flex align-items-center">
      {!signUp && <SignIn onSignUpClick={handleOnSignClick} />}
      {signUp && <SignUp onSignInClick={handleOnSignClick} />}
    </div>
  );
}

export default Login;
