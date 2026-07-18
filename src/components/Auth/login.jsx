import React, { useState } from "react";
const Login =()=>{
    const[input1,setInput1]=useState('')
     const[input2,setInput2]=useState('')
    const submitHandler=(e)=>{
        e.preventDefault()
        console.log("submitted")
        setInput1('')
        setInput2('')
    }
    const inputHandler1=(e)=>{
        // console.log("typing...")
        setInput1(e.target.value)
    }
    const inputHandler2=(e)=>{
        // console.log("typing...")
        setInput2(e.target.value)
    }
    

    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="border-2 border-emerald-600 p-20 rounded-xl">
                <form onSubmit={(e)=>{
                        submitHandler(e)
                    }} className="flex flex-col justify-center items-center">
                    <input onChange={inputHandler1} value={input1} required className="border-2 border-emerald-500 py-4 px-5 rounded-full placeholder:text-gray-400" type="email" placeholder="Enter your Email"></input>
                    <input onChange={inputHandler2} value={input2} required className="border-2 border-emerald-500 py-4 px-5 rounded-full mt-4 placeholder:text-gray-400" type="passeord" placeholder="Enter your passwprd"></input>
                    <button className=" bg-emerald-500 py-4 px-5 rounded-full mt-5">Log in</button>
                </form>
            </div>
        </div>
    )
}
export default Login 