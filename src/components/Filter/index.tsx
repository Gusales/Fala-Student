import { ListFilter } from "lucide-react";

interface FilterProps {

}
export function Filter(props : FilterProps){
    return(
      <button className="dark:text-zinc-200"> <ListFilter /> </button>
    )
}