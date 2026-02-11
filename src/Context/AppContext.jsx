import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(true);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AppContext.Provider
      value={{
        user,
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
