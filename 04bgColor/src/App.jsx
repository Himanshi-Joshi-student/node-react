import { useState } from 'react'
function App() {
  const [color, setColor] = useState("pink")
  return (
   <div className="w-Full h-screen duration-200"
   style={{backgroundColor: color}}
   >
    <div className=" p-5 fixed flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
<div className=" flex flex-wrap justify-center bg-white px-3 py-3 rounded-3xl gap-3">
  <button onClick={() => setColor("red")}
   className="rounded-full outline-none px-4 py-1 shadow-lg"style={{backgroundColor:"red"}}>red</button>
  <button onClick={() => setColor("Green")}
   className='p-2 rounded-2xl outline-none px-4' style={{backgroundColor:"Green"}}>Green</button>
  <button onClick={() => setColor("Blue")}
   className=' p-2 rounded-2xl outline-none px-4'style={{backgroundColor:"Blue"}}>Blue</button>
  <button onClick={() => setColor("Olive")}
   className=' p-2 rounded-2xl outline-none px-4'style={{backgroundColor:"Olive"}}>Olive</button>
  <button onClick={() => setColor("Gray")}
   className=' p-2 rounded-2xl outline-none px-4'style={{backgroundColor:"Gray"}}>Gray</button>
  <button onClick={() => setColor("Yellow")}
   className=' p-2 rounded-2xl outline-none px-4'style={{backgroundColor:"Yellow"}}>Yellow</button>
  <button onClick={() => setColor("Pink")}
   className=' p-2 rounded-2xl outline-none px-4'style={{backgroundColor:"Pink"}}>Pink</button>
  <button onClick={() => setColor("Purple")}
   className=' p-2 rounded-2xl outline-none px-4'style={{backgroundColor:"Purple"}}>Purple</button>
  <button onClick={() => setColor("Lavender")}
   className=' p-2 rounded-2xl outline-none px-4'style={{backgroundColor:"Lavender"}}>Lavender</button>
  <button onClick={() => setColor("White")}
   className=' p-2 rounded-2xl outline-none px-4'style={{backgroundColor:"White"}}>white</button>
  <button onClick={() => setColor("Black")}
   className=' p-2 rounded-2xl outline-none px-4 text-white'style={{backgroundColor:"Black"}}>Black</button>

</div>
    </div>
   </div>
  )
}
export default App
