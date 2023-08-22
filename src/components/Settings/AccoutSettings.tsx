import { LogOut, Trash,  } from "lucide-react";

export function AccoutSettings(){
  return(
    <div className="flex flex-col items-center justify-between w-full gap-2">
      <div className="flex items-center justify-between w-full">
        <div className="text-start">
          <h3>Sair</h3>
          <p>Faça logout da sua conta</p>
        </div>
        <a href="/api/auth/logout" className="flex items-center gap-1 text-sm hover:underline">
          <LogOut size={14} /> Sair
        </a>
      </div>

      <div className="flex items-center justify-between w-full">
        <div className="text-start">
          <h3>Excluir Conta</h3>
          <p>Exclua definitivamente sua conta</p>
        </div>
        <button className="flex items-center gap-1 text-sm text-red-600">
          <Trash size={14} /> Deletar
        </button>
      </div>
    </div>
  )
}