import { MoreHorizontal } from "lucide-react";

interface MatterListItemProps {

}
export function MatterListItem(props : MatterListItemProps){
  return(
    <div className="relative flex md:flex-col items-center justify-start md:justify-center p-2 md:p-0 gap-3 md:h-[240px] md:w-[240px] bg-zinc-50 border-[1px] border-zinc-900 shadow rounded hover:bg-zinc-200 cursor-pointer transition-all dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:border-zinc-600 ">
      <picture className="h-14 w-14 overflow-hidden rounded-md">
        <img src='https://webstockreview.net/images/clipart-math-icon-10.png' alt="Icone da matéria tal" height={776} width={776} />
      </picture>
      <span className="text-xl font-semibold leading-relaxed dark:text-zinc-50">Matemática</span>
      <button className="absolute top-5 right-5 hidden md:block"><MoreHorizontal className="dark:text-zinc-50" /></button>
    </div>
  )
}