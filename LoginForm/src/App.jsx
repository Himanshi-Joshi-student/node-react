import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [title,setTitle]=useState('')
const submitHandler=(e)=>{
  e.preventDefault()
  console.log('form is submitted',title);
  setTitle('')
}
  return (
    <>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input
        placeholder='enter name here'
        type='text'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value);
        }}
        ></input>
        <button>click here</button>
      </form>
    </>
  )
}

export default App
