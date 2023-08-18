import { MatterListItem } from "./MatterListItem";

export function ListMatter(){
    return(
      <section className="flex flex-col justify-start gap-1 md:gap-5 md:grid md:grid-cols-auto-fill-240">
        <MatterListItem />
      </section>
    )
}