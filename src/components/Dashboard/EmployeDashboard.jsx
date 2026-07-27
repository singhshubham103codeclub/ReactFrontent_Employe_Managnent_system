import React from "react";
import Header from "./others/header";
import TaskListNumber from "./others/Tasklist";
import TaskList from "../TaskList/TaskList";
const EmployeDashboard=({data})=>{
    // console.log(data)
    return(
        <>
          <Header data={data}/>  
          <TaskListNumber data={data}/>
          <TaskList data={data}/>
          
        </>
    )
}
export default EmployeDashboard