import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <h1 class="bg-amber-100 mb-4 text-4xl text-black p-4 rounded-2xl]"> Welcome to Tailwind css</h1>
 <Card username="Himanshi" button="submit"/>
 <Card username="Harshita" button="see"/>
    </>
  )
}

export default App
