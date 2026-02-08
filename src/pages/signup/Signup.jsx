import SignupWith from "../signup/SignupWith.jsx";
import Button from "../../UI/Button.jsx";
import { ChevronRight } from "@mui/icons-material";
import Input from "../login/Input.jsx";
import "./signup.scss";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../Firebase/firebase.js";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();

  async function signupUser(e) {
    e.preventDefault();
    if (confirm !== password) {
      alert("Passwords do not match");
      return;
    }
    let userCredential;
    try {
      userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
    } catch (err) {
      console.log("Signup Failed", err);
      return;
    }
    await updateProfile(userCredential.user, {
      displayName: name,
    });

    navigate("/app/dashboard");
  }

  return (
    <form className="signup" onSubmit={signupUser}>
      <div className="signHeader">
        <h2>Create Account</h2>
        <p>Start your financial journey</p>
      </div>
      <Input
        type="text"
        name="Full Name"
        placeholder="John Doe"
        handleChange={setName}
      />
      <Input
        type="email"
        name="Email"
        placeholder="your@email.com"
        handleChange={setEmail}
      />
      <Input
        type="password"
        name="Password"
        placeholder="Create a password"
        handleChange={setPassword}
      />
      <Input
        type="password"
        name="Confirm Password"
        placeholder="Confirm your password"
        handleChange={setConfirm}
      />
      <button type="submit" className="btn">
        <span>Create Account</span>
        <ChevronRight />
      </button>
      <SignupWith />
      <div className="backToLogin">
        <span>Already have an account</span>
        <Link to="/login">Login</Link>
      </div>
    </form>
  );
}

export default Signup;
