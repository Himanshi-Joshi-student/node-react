import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
    const data=useLoaderData()
    // const [data,setdata]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data);
    //         setdata(data)
    //     })
    // },[])
    return(
        <div className="bg-blue-300 text-2xl text-black py-6 m-3 p-3">GitHub follower :{data.followers}
        <img src={data.avatar_url} alt="github img" width={300}/>
        </div>
    )
}
export default Github
export const gitInfoLoader=async () => {
    const response= await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}