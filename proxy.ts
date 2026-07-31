import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { verifyTkn } from "./utils/jwt"
import { JwtPayload } from "jsonwebtoken"
import { UserRole } from "./lib/types"
import { redirect } from "next/navigation"

const AUTH_ROUTES = ["/login", "/signup"]
const PUBLIC_ROUTES = ["/", "/properties", "/properties/*"]

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  const accessToken = request.cookies.get("accessToken")?.value
  const refreshToken = request.cookies.get("refreshToken")?.value
  let userRole = null

  const decodedAccessToken = verifyTkn(
    accessToken as string,
    process.env.JWT_ACCESS_TKN_SECRET as string
  )

  const decodedRefreshToken = verifyTkn(
    accessToken as string,
    process.env.JWT_REFRESH_TKN_SECRET as string
  )

  if (decodedAccessToken.success && decodedAccessToken.data) {
    userRole = (decodedAccessToken.data as JwtPayload).role as string
  }

  // * Stop users to access login or signup if they are already login
  if (accessToken && AUTH_ROUTES.includes(pathname)) {
    if (userRole === UserRole.USER) {
      return NextResponse.redirect(new URL("/dashboard", request.url))
    } else if (userRole === UserRole.LANDLORD) {
      return NextResponse.redirect(new URL("/landlord-dashboard", request.url))
    } else if (userRole === UserRole.ADMIN) {
      return NextResponse.redirect(new URL("/admin-dashboard", request.url))
    }
  }

  //   * Stop user to access dashboard is they are not login
  const isPublicRoute = PUBLIC_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(route + "/")
  )

  const isAuthRoute = AUTH_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(route + "/")
  )

  //   *Role based dashboard access
  if (!accessToken && !isAuthRoute && !isPublicRoute) {
    const loginUrl = new URL("/login", request.url)

    loginUrl.searchParams.set("redirectTo", pathname)
    return NextResponse.redirect(new URL(loginUrl))
  }

  if (pathname.startsWith("/dashboard") && userRole !== UserRole.USER) {
    return NextResponse.redirect(new URL("/not-found", request.url))
  } else if (
    pathname.startsWith("/admin-dashboard") &&
    userRole !== UserRole.ADMIN
  ) {
    return NextResponse.redirect(new URL("/not-found", request.url))
  } else if (
    pathname.startsWith("/landlord-dashboard") &&
    userRole !== UserRole.LANDLORD
  ) {
    return NextResponse.redirect(new URL("/not-found", request.url))
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|favicon.ico|_next/image|.*\\.png$).*)"],
}
