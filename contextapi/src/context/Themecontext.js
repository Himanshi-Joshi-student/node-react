import React, { createContext, useContext } from 'react'
import { ThemeContext } from '../../../09themeSwitcher/src/contexts/theme'


export const Themecontext=createContext({
    themeMode:"light",
    lightMode:()=>{},
    DarkMode:()=>{},
})
export const ThemeProvider=Themecontext.Provider
export default function useTheme(){
    return useContext(ThemeContext)
}