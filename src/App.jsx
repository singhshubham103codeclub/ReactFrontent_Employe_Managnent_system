import { useContext, useEffect, useState } from "react";

import Login from "./components/Auth/login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeDashboard from "./components/Dashboard/EmployeDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const Authdata = useContext(AuthContext);
  useEffect(()=>{
    const loggedInUserRaw = localStorage.getItem('LoggedInUser')
    if (loggedInUserRaw) {
      const loggedInuser = JSON.parse(loggedInUserRaw)
      if (loggedInuser?.role) {
        setUser(loggedInuser.role)
      }
    }
  },[Authdata])
  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem('LoggedInUser',JSON.stringify({role:'admin'}))
      console.log("this Admin");
    } else if (Authdata && Authdata?.employee.find((e)=>email==e.email&& password==e.password)) {
      setUser("employee");
      console.log("this user");
       localStorage.setItem('LoggedInUser',JSON.stringify({role:'employee'}))
    } else {
      alert("Invalid Credentials");
    }
  };

  if (!user) {
    return <Login handleLogin={handleLogin} />;
  }

  return user === "admin" ? (
    <AdminDashboard />
  ) : (
    <EmployeDashboard />
  );
};

export default App;
