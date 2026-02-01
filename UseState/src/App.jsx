import { useState } from 'react'
import './App.css'

function App() {
  const [num,setNum]=useState(10)
function increaseNum(){
  setNum(num+1)
}
function decreaseNum(){
 setNum(num-1)
}
function jump() {
  setNum(num+5 )
}
  return (
    <>
    <h1>Value of num is{num}</h1>
    <button onClick={decreaseNum}>decrease</button>
    <button onClick={increaseNum}>Increase</button>
    <button onClick={jump}>jump by 5</button>
    </>
  )
}

export default App
