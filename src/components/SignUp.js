import { useEffect, useState } from "react";
import "../css/login.css";
import { Container } from "react-bootstrap";
import { AiFillGoogleCircle } from "react-icons/ai";
import { auth, db } from "../Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function SignUp({ onSignInClick }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");

  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  useEffect(() => {});

  async function signUp(e) {
    e.preventDefault();

    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
    setFirstNameError("");
    setLastNameError("");

    let error = false;
    const nameRegex = /^[A-Za-z]+$/;
    const passwordRegex = /^.{6,12}$/;

    if (!passwordRegex.test(password)) {
      setPasswordError("Password must be 6 to 12 characters long.");
      error = true;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
      error = true;
    }

    if (!firstName) {
      setFirstNameError("First name is required.");
      error = true;
    } else if (!nameRegex.test(firstName)) {
      setFirstNameError("Please enter a valid first name.");
      error = true;
    }
    if (!lastName) {
      setLastNameError("Last name is required.");
      error = true;
    } else if (!nameRegex.test(lastName)) {
      setLastNameError("Please enter a valid last name.");
      error = true;
    }

    if (error === false) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        if (user) {
          const loggedInUser = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );

          if (loggedInUser) {
            const usersRef = collection(db, "users");
            const userData = {
              userId: loggedInUser.user.uid,
              email: loggedInUser.user.email,
              firstName: firstName,
              lastName: lastName,
            };

            try {
              await addDoc(usersRef, userData);
              console.log("User added to Firestore:", userData);
              navigate("/");
            } catch (error) {
              console.error("Error adding user to Firestore:", error);
            }
          }
        }

        console.log(userCredential);
      } catch (error) {
        if (error.code === "auth/invalid-email") {
          setEmailError("Please enter a vaild email address.");
        } else if (error.code === "auth/email-already-in-use") {
          setEmailError("Email already in use.");
        }
      }
    }
  }
  return (
    <form
      onSubmit={signUp}
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
      <h2 className=" passionFont textColor1 ">Sign Up</h2>
      <a onClick={onSignInClick} className="badge  pb-3 text-danger">
        Click to go back
      </a>
      <div className="mb-3">
        <label htmlFor="" className=" oxygenFont form-label">
          Email
        </label>

        <input
          type="text"
          className="loginInput text-center form-control"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <small id="emailError" className="form-text text-danger">
          {emailError}
        </small>
      </div>
      <div className="mb-3">
        <label htmlFor="" className=" oxygenFont form-label">
          First Name
        </label>

        <input
          type="text"
          className="loginInput text-center form-control"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
        <small id="firstNameError" className="form-text text-danger">
          {firstNameError}
        </small>
      </div>
      <div className="mb-3">
        <label htmlFor="" className=" oxygenFont form-label">
          Last Name
        </label>

        <input
          type="text"
          className="loginInput text-center form-control"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        ></input>
        <small id="lastNameError" className="form-text text-danger">
          {lastNameError}
        </small>
      </div>
      <div className="mb-3">
        <label htmlFor="" className=" oxygenFont form-label">
          Password
        </label>
        <input
          type="text"
          className="loginInput text-center form-control"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <small id="passwordError" className="form-text text-danger">
          {passwordError}
        </small>
      </div>
      <div className="mb-3">
        <label htmlFor="" className=" oxygenFont form-label">
          Re-type Password
        </label>
        <input
          type="text"
          className="loginInput text-center form-control"
          placeholder="Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></input>
        <small id="confirmPasswordError" className="form-text text-danger">
          {confirmPasswordError}
        </small>
      </div>

      <button
        type="submit"
        className="btn loginBtn mt-3 text-white passionFont"
      >
        <div className="guppoFont">Create Account!</div>
      </button>
    </form>
  );
}

export default SignUp;
