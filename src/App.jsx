import React, { useEffect } from "react";
import Login from "./components/Auth/login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeDashboard from "./components/Dashboard/EmployeDashboard";
import { getLocalStorag, setLocalStorag } from "./Utils/localStorage";
const App=()=>{
    useEffect(()=>{
        // setLocalStorag()
        getLocalStorag()
    })

    return (
        <>
          {/* <Login/>   */}
          <AdminDashboard/>
          {/* <EmployeDashboard/> */}
        </>
    )
}
export default App