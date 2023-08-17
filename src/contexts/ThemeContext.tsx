'use client'
import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react'

interface ThemeContextProps {
  theme: string
  setTheme: Dispatch<SetStateAction<string>>
}

export const ThemeContext = createContext({} as ThemeContextProps)

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<string>(localStorage.getItem('fd-theme') ? String(localStorage.getItem('fd-theme')) : 'light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      { children }
    </ThemeContext.Provider>
  )

}