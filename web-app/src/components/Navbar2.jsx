import React from 'react'
import { useNavigate } from 'react-router-dom';
const Navbar2 = () => {
    let navigate = useNavigate();
  return (
    <div className='bg-amber-200'>
    <button onClick={()=>{navigate('/')}} className='bg-red-500 rounded-2xl px-4 py-3 m-3'>Return to Home</button>
    <button onClick={()=>{navigate(-1)}} className='bg-blue-500 rounded-2xl px-4 py-3 m-3'>Back</button>
    <button onClick={()=>{navigate(+1)}} className='bg-pink-500 rounded-2xl px-4 py-3 m-3'>Next</button>
    </div>
  )
}

export default Navbar2