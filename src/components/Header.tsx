import { cookies } from 'next/headers'

import { NavigationMenu } from "./NavigationMenu";
import { SignIn } from "./Avatar/SignInAvatar";
import { LoginAvatar } from './Avatar/LoginAvatar';

export function Header() {
  const isAuth = cookies().has('token')
  return (
    <header className="h-14 w-full bg-zinc-100 shadow dark:bg-zinc-800 flex items-center justify-between px-3">
      { isAuth &&  <NavigationMenu /> }

      <h1 className="text-2xl text-black dark:text-gray-200 font-semibold">Fala Student!</h1>

      { isAuth ? <LoginAvatar /> : <SignIn /> }
    </header>
  )
}