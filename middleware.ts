import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // This middleware will only run for the /api/send route
  // No need to check for the API key here as it will be handled in the route handler
  return NextResponse.next()
}

export const config = {
  matcher: "/api/send",
}
