import SignupWith from "../signup/SignupWith.jsx";
import Button from "../../UI/Button.jsx";
import { ChevronRight } from "@mui/icons-material";

import Input from "../login/Input.jsx";
import "./signup.scss";
import { Link } from "react-router";

function Signup() {
  return (
    <form className="signup">
      <div className="signHeader">
        <h2>Create Account</h2>
        <p>Start your financial journey</p>
      </div>
      <Input type="text" name="Full Name" placeholder="John Doe" />
      <Input type="email" name="Email" placeholder="your@email.com" />
      <Input type="password" name="Password" placeholder="Create a password" />
      <Input
        type="password"
        name="Confirm Password"
        placeholder="Confirm your password"
      />
      <Button>
        <span>Create Account</span>
        <ChevronRight />
      </Button>
      <SignupWith />
      <div className="backToLogin">
        <span>Already have an account</span>
        <Link to="/login">Login</Link>
      </div>
    </form>
  );
}

export default Signup;
