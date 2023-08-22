import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const urlRedirect = new URL('/', request.url)
  const cookieExpiresInSeconds = 60 * 60 * 24 * 30 // 1 Mês

  return NextResponse.redirect(urlRedirect, {
    headers: {
      'Set-Cookie': `token=; Path=/; max-age=0;`,
    },
  })
}