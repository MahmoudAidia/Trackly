import { useNavigate } from "react-router";
import { auth, googleProvider } from "../../Firebase/firebase";
import "./SignupWith.scss";
import { signInWithPopup } from "firebase/auth";
function SignupWith() {
  const navigate = useNavigate();
  async function signupWithGoogle() {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.log("Couldn't signup", err);
      return;
    }
    navigate("/app/dashboard");
  }
  return (
    <div className="signupwith">
      <div className="or">
        <span></span>
        <p>or continue with</p>
        <span></span>
      </div>

      <div className="gmailBtn">
        <button onClick={signupWithGoogle}>Google</button>
        <button>Apple</button>
      </div>
    </div>
  );
}

export default SignupWith;
