import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase";
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;
    return user;
  } catch (error) {
    console.error("Login Error:", error.message);
  }
};
