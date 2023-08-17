'use client'
import { ReactNode } from "react";

export function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div>
      { children }
    </div>
  )
}