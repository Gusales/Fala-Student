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



export function Settings() {
  return (
    <Dialog>
      <DialogTrigger className="flex items-center gap-2 hover:underline">
        <SettingsIcon /> Configurações
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Configurações</DialogTitle>
          <DialogDescription>
              <ul className="list-none mt-3">
                <li className="flex items-center justify-between">
                  <div className="text-start">
                    <h2>Tema</h2>
                    <h3>Customize a aparência do programa</h3>
                  </div>
                  <ThemeSetting />
                </li>
              </ul>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}