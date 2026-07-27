import React from "react";
import AcceptTask from "./AcceptTask ";
import CompletedTask from "./CompleteTask";
const TaskList =({data})=>{
    console.log(data)
    return (
        <div id="Taskit" className="h-[50vh] overflow-auto flex items-center justify-start gap-5 py-5 mt-10 w-full flex-nowrap">
            <CompletedTask />
            <AcceptTask />
             <div className="h-full w-[400px] bg-red-400 rounded-xl flex-shrink-0"> 
                <div className="flex justify-between items-center m-5">
                <h3 className="bg-red-500 px-3 py-1 rounded text-sm">High</h3>
                <h4>20 feb 2024</h4>
                </div>
                <h2 className="mt-5 text-2xl font-semibold"> Make a you tube video</h2>
                <p className="text-sm mt-2"> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat saepe dignissimos vero quae a odio eveniet, illum consectetur sapiente. Delectus ex suscipit quis esse vitae cumque commodi quisquam inventore iusto.
                </p>
            </div>
             <div className="h-full w-[400px] bg-green-400 rounded-xl flex-shrink-0"> 
                <div className="flex justify-between items-center m-5">
                <h3 className="bg-red-500 px-3 py-1 rounded text-sm">High</h3>
                <h4>20 feb 2024</h4>
                </div>
                <h2 className="mt-5 text-2xl font-semibold"> Make a you tube video</h2>
                <p className="text-sm mt-2"> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat saepe dignissimos vero quae a odio eveniet, illum consectetur sapiente. Delectus ex suscipit quis esse vitae cumque commodi quisquam inventore iusto.
                </p>
            </div>
             <div className="h-full w-[400px] bg-blue-400 rounded-xl flex-shrink-0"> 
                <div className="flex justify-between items-center m-5">
                <h3 className="bg-red-500 px-3 py-1 rounded text-sm">High</h3>
                <h4>20 feb 2024</h4>
                </div>
                <h2 className="mt-5 text-2xl font-semibold"> Make a you tube video</h2>
                <p className="text-sm mt-2"> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat saepe dignissimos vero quae a odio eveniet, illum consectetur sapiente. Delectus ex suscipit quis esse vitae cumque commodi quisquam inventore iusto.
                </p>
            </div>
            
        </div>
    )
}
export default TaskList