'use client'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


import { MenuIcon } from "lucide-react";
import { LinkNavigation } from "./LinkNavigation";

export function NavigationMenu() {
  return(
    <Sheet>
      <SheetTrigger asChild>
        <button>
          <MenuIcon className="text-black dark:text-gray-200 text-base" size={24} />
        </button>
      </SheetTrigger>
      <SheetContent side='left' className="w-[240px]">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>
            <LinkNavigation />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>

  )
}