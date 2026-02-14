import { Link, useNavigate } from "react-router";
import "./Login.scss";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import Input from "./Input";
import SignupWith from "../signup/SignupWith";
import { useContext, useEffect, useState } from "react";
import { loginUser } from "../../api/login";
import { useAppContext } from "../../Context/AppContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Firebase/firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAppContext();
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    const user = await loginUser(email, password);
    if (!user?.uid) {
      setEmail("");
      setPassword("");
      console.error("couldn't login. Email or password is wrong!!!");
      return;
    }
    // login(user.uid);
    navigate("/app/dashboard");
  }

  return (
    <form className="login">
      <div className="loginHeader">
        <h2>Welcome back</h2>
        <p>Sign in to continue tracking</p>
      </div>
      <Input
        type="email"
        placeholder="your@email.com"
        name="Email"
        handleChange={setEmail}
      />
      <Input
        type="password"
        placeholder="Enter your password"
        name="Password"
        handleChange={setPassword}
      />
      <Link>Forgot Password?</Link>
      <button onClick={handleLogin}>
        <span>Login</span>
        <ArrowRightAltOutlinedIcon />
      </button>
      <SignupWith />
      <div className="signupText">
        <p>Don't have an account? </p>
        <Link to="/sign">Sign Up</Link>
      </div>
    </form>
  );
}

export default Login;
