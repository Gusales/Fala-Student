import { Avatar, AvatarFallback } from "../ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { User } from "lucide-react"
import { SignInLink } from "./SignInLink"


export function SignIn() {
  return(
    <Dialog>
      <DialogTrigger className="flex items-center gap-2 hover:underline">
        <Avatar>
        <AvatarFallback>
          <User className="dark:text-zinc-50" />
        </AvatarFallback>
        </Avatar>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">Conectar Conta</DialogTitle>
        </DialogHeader>
          <DialogDescription className="mt-4">
            <ul className="flex flex-col items-center gap-2">
              <li>
                <SignInLink 
                  coverUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" 
                  name="Google"
                />
              </li>

              <li>
                <SignInLink 
                  coverUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" 
                  name="Github"
                  href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
                />
              </li>
            </ul>
          </DialogDescription>
      </DialogContent>
    </Dialog>


  
  )
}