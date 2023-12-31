import { api } from '@/lib/api'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const redirectTo = request.cookies.get('redirectTo')?.value

  const registerResponse = await api.post('/login/github', {
    code,
  })

  const { token } = registerResponse.data

  const urlRedirect = new URL('/', request.url)
  const cookieExpiresInSeconds = 60 * 60 * 24 * 30 // 1 Mês

  return NextResponse.redirect(urlRedirect, {
    headers: {
      'Set-Cookie': `token=${token}; Path=/; max-age=${cookieExpiresInSeconds};`,
    },
  })
}