import { onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase";
import Loader from "../UI/Loader";

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [userId, setUserId] = useState(false);
  const [loading, setLoading] = useState(true);

  const login = (userData) => {
    setUserId(userData);
  };
  const logout = async () => {
    try {
      await signOut(auth);
      navigate("./login");
      console.log("User signed out");
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUserId(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  // if (loading)
  //   return (
  //     <div className="refresh">
  //       <Loader />
  //     </div>
  //   );

  return (
    <AppContext.Provider
      value={{
        userId: userId?.uid,
        login,
        logout,
      }}
    >
      {!loading && children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
};
