import React, { useEffect, useState } from "react";
import Login from "./components/Auth/login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeDashboard from "./components/Dashboard/EmployeDashboard";
import { getLocalStorag, setLocalStorag } from "./Utils/localStorage";
const App = () => {
    // useEffect(() => {
    //     // setLocalStorag()
    //     getLocalStorag()
    // })
    const [user,setUser]=useState(null)

       const handleLogin =(email,password)=>  {if (email == 'admin@me.com' && password == '123') {
        console.log('this Admin')
    } else if (email === 'user@me.com' && password == '123') {
        console.log('this user')
    } else {
        alert('Invalid Credentials')
    }}
    
    return (
        <>
         { !user?<Login handleLogin={handleLogin} />:''}
            {/* <AdminDashboard/> */}
            {/* <EmployeDashboard/> */}
        </>
    )
}
export default App