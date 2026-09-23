import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from "next/server";

type TokenPayload = {
    role?: string;
    exp?: number;
};

export async function middleware(req: NextRequest) {
    const token = req.cookies.get("token")?.value;
    
    if (!token) return NextResponse.redirect(new URL("/login", req.url));

    try {
        const decoded = jwt.decode(token) as TokenPayload | null;

        // if (!decoded?.exp || decoded.exp <= Math.floor(Date.now() / 1000)) {
        //     const response = NextResponse.redirect(new URL("/login", req.url));
        //     response.cookies.delete("token");
        //     return response;
        // }

        const role = typeof decoded === "object" && decoded !== null && "role" in decoded
            ? decoded.role
            : undefined;

        if (req.nextUrl.pathname.startsWith("/dashboard") && role !== "admin") {
            return NextResponse.redirect(new URL("/login", req.url));
        }

    } catch {
        const response = NextResponse.redirect(new URL("/login", req.url));
        response.cookies.delete("token");
        return response;
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard"],
};
