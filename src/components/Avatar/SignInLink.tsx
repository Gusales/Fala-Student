import Image from "next/image"
import { ComponentProps } from "react"

type SignInLinkProps = ComponentProps<'a'> & {
  coverUrl: string
  name: string
}

export function SignInLink({ coverUrl, name, ...props }: SignInLinkProps){
    return(
      <a
      className="flex items-center justify-center gap-2 py-1 px-2 transition-all cursor-pointer border-2 border-zinc-950 text-zinc-950 rounded hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-zinc-50 dark:border-zinc-50"
      { ...props }
      >
        <Image src={coverUrl} alt={`Login com ${name}`} height={14} width={14} />
        {`Continuar com ${ name }`}
      </a>
    )
}