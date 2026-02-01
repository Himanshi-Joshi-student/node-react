// step-1 create a context

import { createContext, useContext } from "react";

export const ThemeContext=createContext({
    themeMode:"light",
    lightTheme:()=>{},
    darkTheme:()=>{}
})

export const ThemeProvider=ThemeContext.Provider

export default function useTheme() {
    return useContext(ThemeContext)
}