import Link from "next/link";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Separator } from "../ui/separator";

import { Settings } from "../Settings";
import { getUser } from "@/lib/auth";

import formatName from "@/utils/getInitialLetters";


export function LoginAvatar(){
  const { avatarUrl, name } = getUser()

  return(
    <Popover>
      <PopoverTrigger>
      <Avatar>
        <AvatarImage src={avatarUrl} />
        <AvatarFallback>
          { formatName(name).getInitialLettersName() }
        </AvatarFallback>
      </Avatar>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col items-start gap-2 text-sm">
        <span className="text-base leading-relaxed font-medium dark:text-zinc-50"> Olá, { formatName(name).getFirstName() }! </span>
        <Settings />
        <Separator />
        <Link href='#' className="hover:underline">Sobre</Link>
        <Link href='#' className="hover:underline">Baixe o aplicativo móvel</Link>
      </PopoverContent>
    </Popover>
  )
}