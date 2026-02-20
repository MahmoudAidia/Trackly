import { Link, useNavigate } from "react-router";
import "./Login.scss";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import Input from "./Input";
import SignupWith from "../signup/SignupWith";
import { useContext, useEffect, useState } from "react";
import { loginUser } from "../../api/loginUser";
import { useAppContext } from "../../Context/AppContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Firebase/firebase";
import toast from "react-hot-toast";
import { showErrorToast } from "../../UI/Toasts";
import useLoginUser from "../../hooks/useLoginUser";
import Loader from "../../UI/Loader";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    if (!email && !password)
      return showErrorToast("Please enter email and password");
    if (!email) return showErrorToast("Please enter email.");
    if (!password) return showErrorToast("Please enter password");
    setIsLoading(true);

    const user = await loginUser(email, password);
    if (!user?.uid) {
      setIsLoading(false);
      showErrorToast("Couldn't login. Email or password is wrong!!!");
      setEmail("");
      setPassword("");
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
        value={email}
      />
      <Input
        type="password"
        placeholder="Enter your password"
        name="Password"
        handleChange={setPassword}
        value={password}
      />
      <Link>Forgot Password?</Link>
      <button onClick={handleLogin}>
        {isLoading ? (
          <Loader size={"small"} />
        ) : (
          <>
            <span>Login</span>
            <ArrowRightAltOutlinedIcon />
          </>
        )}
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
