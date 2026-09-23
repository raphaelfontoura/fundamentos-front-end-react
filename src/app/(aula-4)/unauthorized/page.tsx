"use client";

import { useAuth } from "@/context/aula-4/AuthContext";
import Link from "next/link";

export default function Page() {

    const { user } = useAuth();

    return (
        <div className="grid gap-y-4 w-96 p-4 boder border-gray-600 rounded">
            <h1 className="text-3xl font-bold">Não autorizado</h1>
            <p> Sua role: {user?.role}</p>
            <Link
            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 border rounded font-bold text-center"
             href={"/login"}>
                Login
             </Link>
        </div>
    )
}