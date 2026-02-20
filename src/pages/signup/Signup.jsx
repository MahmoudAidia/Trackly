import SignupWith from "../signup/SignupWith.jsx";
import Button from "../../UI/Button.jsx";
import { ChevronRight } from "@mui/icons-material";
import Input from "../login/Input.jsx";
import "./Signup.scss";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../Firebase/firebase.js";
import { useAppContext } from "../../Context/AppContext.jsx";
import { showErrorToast, showSuccessToast } from "../../UI/Toasts.jsx";
import Loader from "../../UI/Loader.jsx";
import { Slash } from "lucide-react";

function Signup() {
  const { login } = useAppContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  async function signupUser(e) {
    e.preventDefault();
    if (!name || !email || !password || !confirm) {
      showErrorToast("Please enter all required fields.");
      return;
    }

    if (confirm !== password) {
      showErrorToast("Password does not match.");
      return;
    }
    setIsLoading(true);
    let userCredential;
    try {
      userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      await updateProfile(userCredential.user, {
        displayName: name,
      });
      navigate("/app/dashboard");
      showSuccessToast("Singed in successfully");
    } catch (err) {
      console.log("Signup Failed", err);
      return;
    }
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
        {isLoading ? (
          <Loader size={"small"} />
        ) : (
          <>
            <span>Create Account</span>
            <ChevronRight />
          </>
        )}
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
