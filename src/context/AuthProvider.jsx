import { createContext, useEffect, useState } from "react";
import {getLocalStorag} from '../Utils/localStorage'

export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
  const [userData,setUserData]=useState({ employee: [], admin: [] })
  useEffect(()=>{
    const {employee,admin}= getLocalStorag()
      // console.log(employee,admin)
    setUserData({employee,admin})
  },[])
  return (
    <>
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
