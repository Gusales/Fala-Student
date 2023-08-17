'use client'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useTheme } from "../../hooks/useTheme"

export function ThemeSetting() {
  const { setTheme } = useTheme()
  const theme = localStorage.getItem('fd-theme') ?? 'light'

  const handleChangeTheme = (value: string) => {
    setTheme(value);
  }
  
  return(
    <Select onValueChange={(value) => {handleChangeTheme(value)}}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={theme} defaultValue={theme} defaultChecked />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">light</SelectItem>
        <SelectItem value="dark">dark</SelectItem>
      </SelectContent>
    </Select>
  )
}