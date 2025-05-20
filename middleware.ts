import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This middleware handles redirects and canonical URLs
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const { pathname } = url

  // Redirect non-trailing slash URLs to trailing slash URLs for consistency
  if (!pathname.endsWith("/") && !pathname.includes(".") && pathname !== "/api/send") {
    url.pathname = `${pathname}/`
    return NextResponse.redirect(url, 308) // 308 is Permanent Redirect
  }

  // Handle old URLs that might have been indexed
  const redirectMap: Record<string, string> = {
    "/blog/": "/publications/",
    "/research/": "/publications/",
    "/projects/": "/publications/",
    "/cv/": "/Somenath_Dutta_CV.pdf",
    "/resume/": "/Somenath_Dutta_CV.pdf",
    "/contact-me/": "/#contact",
    "/about-me/": "/#about",
  }

  const redirectPath = redirectMap[pathname]
  if (redirectPath) {
    url.pathname = redirectPath
    return NextResponse.redirect(url, 308)
  }

  // Add security headers
  const response = NextResponse.next()

  // Add security headers
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("X-Frame-Options", "DENY")
  response.headers.set("X-XSS-Protection", "1; mode=block")
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")

  // Add Content-Security-Policy header in production
  if (process.env.NODE_ENV === "production") {
    response.headers.set(
      "Content-Security-Policy",
      "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://picsum.photos https://api.microlink.io; font-src 'self'; connect-src 'self' https://api.microlink.io;",
    )
  }

  return response
}

// Configure which paths this middleware will run on
export const config = {
  matcher: [
    // Apply to all paths except static files, api routes, and _next
    "/((?!_next/static|_next/image|favicon.ico|images/|api/test-email).*)",
  ],
}
