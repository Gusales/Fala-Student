import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value

  if (!token) {
    const urlRedirect = new URL('/', request.url)
    return NextResponse.redirect('http://localhost:3000')
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/pages/:path*'
}