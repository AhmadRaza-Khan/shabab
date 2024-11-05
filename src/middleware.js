import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req) {
    // Retrieve the adminToken from cookies
    const adminToken = req.cookies.get("adminToken")?.value;
    if (adminToken) {
        try {
            // Verify the JWT token
            const { payload } = await jwtVerify(adminToken, new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET));
            console.log("Decoded Token:", payload);

            // Proceed only if the role is admin
            if (payload.role === "admin") {
                return NextResponse.next();
            }
        } catch (error) {
            console.error("Invalid or expired token:", error);
            return NextResponse.redirect(new URL("/", req.url));
        }
    }

    // Redirect if trying to access the admin dashboard without a valid token
    if (req.nextUrl.pathname.startsWith("/admin-dashboard")) {
        console.log("Redirecting to home from admin dashboard.");
        return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin-dashboard/:path*"],
};
