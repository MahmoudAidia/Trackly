import { Link, useNavigate } from "react-router";
import "./Login.scss";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import Input from "./Input";
import Button from "../../UI/Button";
import SignupWith from "../signup/SignupWith";
import { useState } from "react";
import { auth } from "../../Firebase/firebase";
import { loginUser } from "../../hooks/login";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    const user = await loginUser(email, password);
    if (!user.email) {
      console.error("couldn't login");
      return;
    } else {
      navigate("/app/dashboard");
    }
  }

  return (
    <div className="login">
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
        name="PassWord"
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
    </div>
  );
}

export default Login;
