import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


import { SettingsIcon } from "lucide-react"
import { ThemeSetting } from "./ThemeSettings"
import { Separator } from "../ui/separator"
import { AccoutSettings } from "./AccoutSettings"



export function Settings() {
  return (
    <Dialog>
      <DialogTrigger className="flex items-center gap-2 hover:underline">
        <SettingsIcon /> <h2>Configurações</h2>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Configurações</DialogTitle>
          <DialogDescription>
              <ul className="list-none mt-3 grid gap-2">
                <li className="flex flex-col">
                  <h3 className="text-lg text-zinc-950 mb-1 dark:text-zinc-50">App</h3>
                  <ThemeSetting />
                </li>

                <Separator />

                <li className="flex flex-col">
                  <h3 className="text-lg text-zinc-950 mb-1 dark:text-zinc-50">Conta: </h3>
                  <AccoutSettings />                
                </li>
              </ul>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}