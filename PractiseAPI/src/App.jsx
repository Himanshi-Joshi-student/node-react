import { useEffect, useState } from 'react'
import React from 'react'
import axios from 'axios'
function App() {
  const [userData ,SetUserData ]=useState([])
  const [index, Setindex]= useState(1)
  useEffect(()=>{
    getData()
  },[index])
  const getData=async()=>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=20`)
    SetUserData(response.data)    
  }
  let printUserData=<h3 className='text-gray-400 tetx-xs absolute top-1/2 left-1/2 translate-x-1/2'>Loading.......</h3>

  if(userData.length>0) {
    printUserData=userData.map(function(elem,idx){
      return <div key={idx}>
       <a href={elem.url} target='_blank'>
       <div className='h-40 w-44 bg-white rounded-xl overflow-hidden'>
        <img className='h-full w-full  object-cover' src={elem.download_url} alt=''/>
      </div>
      <h2>{elem.author}</h2>
       </a>
      </div>
    })
    
  }
  return (
    <div className='bg-black h-screen p-4 overflow-auto text-white'>
     {/* <button onClick={getData} className='active:scale-95 bg-green-800 mb-3 rounded-2xl px-4 py-3'>GET DATA</button> */}
     <h1 className='fixed text-5xl bg-red-600 py-3 px-2 rounded-2xl'>{index}</h1>
    <div className='flex flex-wrap gap-4  h-[80%]'>{printUserData}</div>
    <div className='p-5 justify-center flex py-5 gap-3'>
      <button onClick={()=>{
        if (index>0) {
           Setindex(index-1)
           SetUserData([])
        }
       
        console.log(index);
        
      }} className='bg-amber-600 py-2 px-5 rounded-xl'>prev</button>
      <h4 className='text-2xl text-white-800 '>Page {index}</h4>
      <button onClick={()=>{
        Setindex(index+1)
        SetUserData([])
      }} className='bg-amber-600 py-2 px-5 rounded-xl'>next</button>
    </div>
    </div>
  )
}

export default App
