import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  //   return NextResponse.redirect(new URL("/", request.url));

  //   if (request.nextUrl.pathname === "/profile") {
  //     return NextResponse.redirect(new URL("/hello", request.nextUrl));
  //   }

  const response = NextResponse.next();
  const themePreference = request.cookies.get("theme");
  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }
  return response;
}

// export const config = {
//   matcher: "/profile",
// };
