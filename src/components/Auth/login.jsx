import React, { useState } from "react";
const Login =({handleLogin})=>{
    console.log({handleLogin})
    const[email,setEmail]=useState('')
     const[password,setPassword]=useState('')
    const submitHandler=(e)=>{
        e.preventDefault()
        handleLogin(email,password)
        // console.log("submitted")
        setEmail('')
        setPassword('')
    }
    const inputHandler1=(e)=>{
        // console.log("typing...")
        setEmail(e.target.value)
    }
    const inputHandler2=(e)=>{
        // console.log("typing...")
        setPassword(e.target.value)
    }
    

    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="border-2 border-emerald-600 p-20 rounded-xl">
                <form onSubmit={(e)=>{
                        submitHandler(e)
                    }} className="flex flex-col justify-center items-center">
                    <input onChange={inputHandler1} value={email} required className="border-2 border-emerald-500 py-4 px-5 rounded-full placeholder:text-gray-400" type="email" placeholder="Enter your Email"></input>
                    <input onChange={inputHandler2} value={password} required className="border-2 border-emerald-500 py-4 px-5 rounded-full mt-4 placeholder:text-gray-400" type="passeord" placeholder="Enter your passwprd"></input>
                    <button className=" bg-emerald-500 py-4 px-5 rounded-full mt-5">Log in</button>
                </form>
            </div>
        </div>
    )
}
export default Login 