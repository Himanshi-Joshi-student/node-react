import React, { useEffect, useState } from 'react'
import { ThemeProvider } from './context/Themecontext'
import Btn from './components/Btn'

const App = () => {
    const [theme,setTheme]=useState("light")
    const lightTheme=()=>{
        setTheme("light")
    }
    const darkTheme=()=>{
        setTheme("dark")
    }
    useEffect(()=>{
        document.querySelector('html').classList.remove("light","dark")
        document.querySelector('html').classList.add(theme)
    },[theme])
   return (
      <ThemeProvider value={{themeMode,lightMode,DarkMode}}>
          <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
                <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <Btn/>
                       {/* theme btn */}
                </div>
  
                <div className="w-full max-w-sm mx-auto">
                
                                  {/* card */}
                </div>
              </div>
          </div>
      </ThemeProvider>)
}

export default App