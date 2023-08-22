import { Filter } from "../Filter";
import { AddNew as AddNewMatter } from "@/components/Matter/AddNew"

export function Matter(){
  return(
    <section className="flex flex-col md:flex-row md:text-center gap-1 w-full items-center justify-between">
      <h2 className="text-xl leading-relaxed font-semibold dark:text-zinc-50">Minhas matérias</h2>
      <div className="flex items-center gap-3 md">
        <Filter />
        <AddNewMatter />
      </div>
    </section>
  )
}