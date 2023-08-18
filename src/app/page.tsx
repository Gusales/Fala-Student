/* eslint-disable @next/next/no-img-element */
'use client'

import { useEffect } from "react"

import { useTheme } from "../hooks/useTheme"

import { Filter } from "@/components/Filter"
import { AddNew as AddNewMatter } from "@/components/Matter/AddNew"
import { ListMatter } from "@/components/Matter/ListMatter"

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
    <div className="flex-1 flex flex-col gap-4 md:gap-8 py-2 px-3 md:px-10 md:py-4">
      <section className="flex flex-col md:flex-row md:text-center gap-1 w-full items-center justify-between">
        <h2 className="text-xl leading-relaxed font-semibold dark:text-zinc-50">Minhas matérias</h2>
        <div className="flex items-center gap-3 md">
          <Filter />
          <AddNewMatter />
        </div>
      </section>

      <ListMatter />
    </div>
  )
}
