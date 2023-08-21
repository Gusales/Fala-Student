import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover"

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Separator } from "../ui/separator";
import Link from "next/link";
import { Settings } from "../Settings";

export function LoginAvatar(){
  return(
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
  )
}