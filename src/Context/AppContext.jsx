import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [userId, setUserId] = useState(false);

  const login = (userData) => {
    setUserId(userData);
  };
  const logout = () => setUserId(null);

  return (
    <AppContext.Provider
      value={{
        userId,
        login,
        logout,
      }}
    >
      {children}
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
