import Image from "next/image"
import { ComponentProps } from "react"

type SignInLinkProps = ComponentProps<'a'> & {
  coverUrl: string
  name: string
}

export function SignInLink({ coverUrl, name, ...props }: SignInLinkProps){
    return(
      <a
      className="flex flex-row items-center gap-2 p-2 border-[1px] border-zinc-900  "
      { ...props }
      >
        <Image src={coverUrl} alt={`Login com ${name}`} height={14} width={14} />
        {`Continuar com ${ name }`}
      </a>
    )
}