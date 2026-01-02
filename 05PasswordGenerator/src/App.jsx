import { useState,useCallback,useEffect,useRef} from 'react'
import './App.css'

function App() {
  const [length , setlength]=useState(8)
  const [numberAllowed , setnumber]=useState(false)
  const [characterAllowed , setcharacter]=useState(false)
  const [password , setpassword]=useState("")
   const passwordRef =useRef(null)   
   const copypasswordtoclipboard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
   },[password])
  const passwordgenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str+="1234567890"
    if (characterAllowed) str+="!@#$%^&*()<?}{|"
    for (let i = 0; i <= length; i++) {
   let char=Math.floor(Math.random()*str.length+1)
      pass +=str.charAt(char)
    }
    setpassword(pass)
    }
  ,[length,numberAllowed,characterAllowed,setpassword])

  useEffect(()=>{
    passwordgenerator()
  },[length,numberAllowed,characterAllowed,passwordgenerator])  
    return (
    <>
    <div className='bg-gray-700 rounded-2xl px-3 py-4 my-8 w-full max-w-md mx-auto shadow-md ' >
        <h1 className='text-white text-center my-3'>Password generator</h1>
            <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-amber-50 text-amber-600">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copypasswordtoclipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
         </div>
           <div className='flex text-sm gap-x-2  text-amber-600'>
        <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setlength(e.target.value)}}
          />
          <label>Length: {length}</label>
 </div>
   <div className="">
    <input 
    type='checkbox'
    defaultChecked={numberAllowed}
    id='numberInput'
    onChange={()=>{
       setnumber((prev)=>!prev);
    }} />
    <label htmlFor='numberAllowed'>Number</label>
   </div>
   <div className="">
    <input 
    type='checkbox'
    defaultChecked={characterAllowed}
    id='CharacterInput'
    onChange={()=>{
       setcharacter((prev)=>!prev);
    }} />
    <label htmlFor='characterAllowed'>Character</label>
   </div>
     </div>
       </div>
       
    </>
  )
}
export default App
