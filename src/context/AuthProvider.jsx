import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
  const [userData,setUserData]=useState(null)
  useEffect(()=>{
    const {employee,admin}= getLocalStorage()
    setUserData({employee,admin})
  })
  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
