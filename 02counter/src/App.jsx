import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   let [counter,setCounter]= useState(15)
  const addValue=() =>{
    if (counter<=19){
    console.log("clicked",counter);
    setCounter(counter+1)
    }
  }
  const removeValue=() =>{
    if (counter>=1){
    setCounter(counter-1)  ; 
     console.log("clicked",counter);
    }
  }

  return (
    <>
    <h1>Welcome Home Buddy</h1>
    <h3>Counter value:{counter}</h3>
    <button onClick={addValue}>Add value:{counter}</button><br/>
    <button onClick={removeValue}>Decrease value:{counter}</button>
    </>
  )
}

export default App
