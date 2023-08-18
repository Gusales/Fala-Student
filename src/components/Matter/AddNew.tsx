import { BookPlus } from "lucide-react";

interface AddNewProps {

}
export function AddNew(props : AddNewProps){
    return(
      <button className="flex items-center gap-1 border-zinc-900 border-[1px] rounded px-2 py-1 text-base hover:bg-zinc-200 transition-all dark:bg-zinc-800 dark:border-zinc-200 dark:hover:bg-zinc-700 dark:text-zinc-200 shadow">
        <BookPlus /> Criar uma nova matéria
      </button>
    )
}