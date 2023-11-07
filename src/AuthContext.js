import React, { createContext, useContext, useState } from 'react';

/*
----------------------------------CODE ATTRIBUTION---------------------------------
Author: FreeCodeCamp
Code: AuthContext.js
Link: https://www.freecodecamp.org/news/state-management-with-react-hooks/ 
*/ 


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  const login = (authToken,user) => {
    setToken(authToken);
    setUser(user);
  };

  const logout = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};