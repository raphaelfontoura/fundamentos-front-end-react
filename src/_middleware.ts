import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
    const token = req.cookies.get("token")?.value;
    
    if (!token) return NextResponse.redirect(new URL("/login", req.url));

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!);

        const role = typeof decoded === "object" && decoded !== null && "role" in decoded
            ? decoded.role
            : undefined;

        if (req.nextUrl.pathname.startsWith("/dashboard") && role !== "admin") {
            return NextResponse.redirect(new URL("/login", req.url));
        }

    } catch {
        return NextResponse.redirect(new URL("/login", req.url));
    }   
}

export const config = {
    matcher: ["/dashboard"],
};
