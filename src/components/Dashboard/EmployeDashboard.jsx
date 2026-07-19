import React from "react";
import Header from "./others/header";
import TaskListNumber from "./others/Tasklist";
import TaskList from "../TaskList/TaskList";
const EmployeDashboard=()=>{
    return(
        <>
          <Header/>  
          <TaskListNumber/>
          <TaskList/>
        </>
    )
}
export default EmployeDashboard