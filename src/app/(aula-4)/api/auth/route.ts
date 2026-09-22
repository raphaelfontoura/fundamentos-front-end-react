
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

export async function DELETE() {
    const response = NextResponse.json({ message: "Sessão encerrada" });
    response.cookies.delete("token");
    return response;
}

export async function GET(req: Request) {
    const token = req.headers.get("cookie")
        ?.split(";")
        .map((cookie) => cookie.trim())
        .find((cookie) => cookie.startsWith("token="))
        ?.slice("token=".length);

    if (!token) {
        return NextResponse.json({ message: "Não autenticado" }, { status: 401 });
    }

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET!);
        return NextResponse.json({ user });
    } catch {
        return NextResponse.json({ message: "Sessão inválida" }, { status: 401 });
    }
}

export async function POST(req: Request) {
    const { email, password } = await req.json();

    // Simulação simples
    if (email === "admin@admin.com" && password === "123456") {
        const user = { email, role: "admin" }
        const token = jwt.sign(user, process.env.JWT_SECRET!, { expiresIn: "1h" });

        const response = NextResponse.json({ token, user });

        response.cookies.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            path: "/",
            maxAge: 60 * 60, // 1 hora
        })

        return response
    };

    return NextResponse.json(
        { message: "Credenciais inválidas" }, 
        { status: 401 }
    );
}