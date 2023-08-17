'use client'

import { useEffect } from "react"

import { useTheme } from "../hooks/useTheme"

export default function Home() {
  const { theme } = useTheme()
  
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    }
    else{
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('fd-theme', theme)
  }, [theme]) 

  return(
    <h1>Hello World</h1>
  )
}
