import React, { useState,useContext } from "react";
import UserContext from "../context/useContext";
function Login() {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const{setUser}=useContext(UserContext)
    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})
    }
    return (
        <div className="m-8 px-4 py-10 flex flex-col ">
            <input 
            className="text-black bg-white p-5 m-4"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            type="text" placeholder="Username"/>
            {"      "}
            <input 
            className="text-black bg-white p-5 m-4"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            type="text" placeholder="Password"/>
            <button onClick={handleSubmit}
            className="bg-red-600 rounded-3xl  py-3"
            >Submit</button>
        </div>
    )
}
export default Login