import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import Card from './components/Card'
import Btn from './components/Btn'
function App() {
  const [themeMode,setthemeMode]=useState('light')
  const lightTheme=()=>{
    setthemeMode("light")
  }
  const darkTheme=()=>{
setthemeMode("dark")
  }
  //actual theme change by useeffect
useEffect(()=>{
  document.querySelector('html').classList.remove("light","dark")
  document.querySelector('html').classList.add(themeMode)
},[themeMode])
  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <Btn/>
                     {/* theme btn */}
              </div>

              <div className="w-full max-w-sm mx-auto">
                <Card/>
                                {/* card */}
              </div>
            </div>
        </div>
    </ThemeProvider>
  )
}

export default App
