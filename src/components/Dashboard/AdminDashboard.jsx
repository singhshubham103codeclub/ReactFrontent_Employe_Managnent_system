import React from "react";
import Header from "./others/header";
const AdminDashboard = () => {
    return (
        <div className="h-screen w- full p-10">
            <Header />
            <div>
                <from className='flex items-baseline'>
                    <div>
                        <div>
                            <h3>Task Tittle</h3>
                            <input type="text" placeholder="make a UI design" />
                        </div>
                        <div>
                            <h3>Description</h3>
                            <textarea name="" id="" cols='30' rows=''></textarea>
                        </div>
                        <div>
                            <h3>Date</h3>
                            <input type="date" />
                        </div>
                        <div>
                            <h3>Asign to</h3>
                            <input type="text" placeholder="employe name" />
                        </div>
                        <div>
                            <h3>Category</h3>
                            <input type="text" placeholder="department" />
                        </div>
                        <div>
                            <button>Create Task</button>
                        </div>
                    </div>

                </from>

            </div>
        </div>
    )
}
export default AdminDashboard