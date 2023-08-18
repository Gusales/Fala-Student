import './globals.css'
import { ReactNode } from 'react'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import { PageWrapper } from '@/components/PageWrapper'
import { ThemeContextProvider } from '../contexts/ThemeContext'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Fala Student!',
  description: 'Website para auxiliar estudantes a estudar utilizando IA',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className='bg-zinc-100 dark:bg-zinc-900 font-body flex flex-col min-h-screen'>
        <ThemeContextProvider>
            <Header />
            <div className='flex-1 flex'>
              {children}
            </div>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
