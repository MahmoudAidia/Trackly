import { Link } from "react-router";
import "./Login.scss";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import Input from "./Input";
import Button from "../../UI/Button";
import SignupWith from "../signup/SignupWith";

function Login() {
  return (
    <form className="login">
      <div className="loginHeader">
        <h2>Welcome back</h2>
        <p>Sign in to continue tracking</p>
      </div>
      <Input type="email" placeholder="your@email.com" name="Email" />
      <Input
        type="password"
        placeholder="Enter your password"
        name="PassWord"
      />
      <Link>Forgot Password?</Link>
      <Button>
        <span>Login</span>
        <ArrowRightAltOutlinedIcon />
      </Button>
      <SignupWith />
      <div className="signupText">
        <p>Don't have an account? </p>
        <Link to="/sign">Sign Up</Link>
      </div>
    </form>
  );
}

export default Login;
