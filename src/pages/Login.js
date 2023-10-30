import { useState } from "react";
import "../css/login.css";
import { Container } from "react-bootstrap";
import { AiFillGoogleCircle } from "react-icons/ai";
import { auth } from "../../Firebase";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signIn() {
    //todo: sign In
  }
  return (
    <div className="login backgroundColor4 justify-content-center d-flex align-items-center">
      <form
        onSubmit={signIn}
        className="loginInfo backgroundColor2 rounded-2 text-center d-flex row p-4"
      >
        <Container className="fairFont">
          <img
            alt=""
            src="../images/logo.jpeg"
            width="90"
            height="90"
            className="d-inline-block m-4 rounded-circle align-top"
          />
        </Container>
        <h2 className="pb-3 passionFont textColor1 ">Login</h2>
        <div className="mb-3">
          <label for="" className=" oxygenFont form-label">
            Email
          </label>
          <input
            type="text"
            className="loginInput form-control"
            name=""
            id=""
            aria-describedby="helpId"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <small id="helpId" className="form-text text-muted"></small>
        </div>
        <div class="mb-3">
          <label for="" className="loginInput oxygenFont form-label">
            Password
          </label>
          <input
            type="text"
            className="loginInput form-control"
            name=""
            id=""
            aria-describedby="helpId"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <small id="helpId" class="form-text text-muted"></small>
        </div>
        <button
          type="submit"
          className="btn loginBtn mt-3 text-white passionFont"
        >
          <div className="guppoFont">Continue!</div>
        </button>
        <div className="passionFont my-2">Or</div>
        <div>
          <button type="button" className="btn btn-danger mx-1">
            <div className="oxygenFont  text-white">
              <AiFillGoogleCircle size={20} className="pb-1" />
              Google
            </div>
          </button>
          <button type="button" className="btn btn-primary mx-1">
            <div className="oxygenFont  text-white"> Sign Up!</div>
          </button>
          <div className="alert alert-primary mt-4 my-1" role="alert">
            <strong>Forgot Password?</strong>
            <a href="#" class="alert-link">
              Click Here
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
