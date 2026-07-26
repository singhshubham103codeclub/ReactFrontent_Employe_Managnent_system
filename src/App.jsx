import { useContext, useState } from "react";

import Login from "./components/Auth/login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeDashboard from "./components/Dashboard/EmployeDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const Authdata = useContext(AuthContext);
  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      console.log("this Admin");
    } else if (Authdata && Authdata?.employee.find((e)=>email==e.email&& password==e.password)) {
      setUser("employee");
      console.log("this user");
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
