import { MenuIcon, MoreHorizontal, SearchIcon } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "./ui/separator";
import Link from "next/link";
import { Settings } from "./Settings";


export function Header() {
  return (
    <header className="h-14 w-full bg-zinc-300 dark:bg-zinc-800 flex items-center justify-between px-3 absolute top-0">
      <button>
        <MenuIcon className="text-black dark:text-gray-200 text-base" size={24} />
      </button>

      <h1 className="text-2xl text-black dark:text-gray-200 font-semibold">Fala Student!</h1>

      <Popover>
        <PopoverTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        </PopoverTrigger>
        <PopoverContent className="flex flex-col items-start gap-2 text-sm">
          <Settings />
          <Separator />
          <Link href='#' className="hover:underline">Sobre</Link>
          <Link href='#' className="hover:underline">Baixe o aplicativo móvel</Link>
        </PopoverContent>
      </Popover>
    </header>
  )
}