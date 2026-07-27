import { useContext, useEffect, useState } from "react";

import Login from "./components/Auth/login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeDashboard from "./components/Dashboard/EmployeDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInuserData,setLoggedInuserData]=useState(null)
  const Authdata = useContext(AuthContext);
  // useEffect(()=>{
  //   const loggedInUserRaw = localStorage.getItem('LoggedInUser')
  //   if (loggedInUserRaw) {
  //     const loggedInuser = JSON.parse(loggedInUserRaw)
  //     if (loggedInuser?.role) {
  //       setUser(loggedInuser.role)
  //     }
  //   }
  // },[Authdata])
  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem('LoggedInUser',JSON.stringify({role:'admin'}))
      console.log("this Admin");
    } else if (Authdata) {
      const employee=Authdata?.employee.find((e)=>email==e.email&& password==e.password)
     if(employee){
      // console.log(employee)
       setUser("employee");
       setLoggedInuserData(employee)
      console.log("this user");
       localStorage.setItem('LoggedInUser',JSON.stringify({role:'employee'}))
     }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
    {!user ? <Login handleLogin={handleLogin} /> :''}
    {user=='admin'? <AdminDashboard/>:(user== 'employee' ?<EmployeDashboard data={loggedInuserData}/>:null)}
      </>
  )
};

export default App;
