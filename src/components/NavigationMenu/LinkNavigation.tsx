import Link from "next/link";

import { CalendarCheck2, MessageCircle, Backpack, Clock, ClipboardList } from 'lucide-react'

interface LinkNavigationProps {

}
export function LinkNavigation(props : LinkNavigationProps){
    return(
      <ul className="flex flex-col gap-2 text-sm">
        <li >
          <Link className="flex items-center gap-3 hover:underline" href='/calendar'> <CalendarCheck2 /> Calendário</Link>
        </li>
        <li >
          <Link className="flex items-center gap-3 hover:underline" href='/chat'> <MessageCircle /> Chat</Link>
        </li>
        <li >
          <Link className="flex items-center gap-3 hover:underline" href='/'> <Backpack /> Matérias</Link>
        </li>
        <li >
          <Link className="flex items-center gap-3 hover:underline" href='/pomodoro'> <Clock /> Pomodoro</Link>
        </li>
        <li >
          <Link className="flex items-center gap-3 hover:underline" href='/tasks'> <ClipboardList /> Tarefas</Link>
        </li>
      </ul>
    )
}