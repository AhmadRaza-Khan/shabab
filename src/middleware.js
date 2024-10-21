import { NextResponse } from "next/server";

export async function middleware(req) {
  const isAdmin = req.cookies.get("isAdmin");
  if (req.nextUrl.pathname === "/feedback" && req.method === "POST") {
    const feedbackData = await req.json();
    if (feedbackData && feedbackData.feedback === "SPECIFIC_STRING_FOR_ADMIN") {
      const response = NextResponse.next();
      response.cookies.set("isAdmin", "true", { path: "/" });
      return response;
    }
  }

  if (req.nextUrl.pathname.startsWith("/admin-dashboard") && !isAdmin) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin-dashboard/:path*", "/feedback"],
};
