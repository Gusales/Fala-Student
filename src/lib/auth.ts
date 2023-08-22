import { cookies } from 'next/headers'
import decode from 'jwt-decode'

import { User } from '@/types/auth'

export function getUser(): User {
  const token = cookies().get('token')?.value

  if (!token) {
    throw new Error('Unauthenticated.')
  }

  const user: User = decode(token)
  return user
}