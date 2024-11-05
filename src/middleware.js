import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req) {
    const adminToken = req.cookies.get("adminToken")?.value;
    if (adminToken) {
        try {
            const { payload } = await jwtVerify(adminToken, new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET));
            if (payload.role === "admin") {
                return NextResponse.next();
            }
        } catch (error) {
            return NextResponse.redirect(new URL("/", req.url));
        }
    }
    if (req.nextUrl.pathname.startsWith("/admin-dashboard")) {
        return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin-dashboard/:path*"],
};
