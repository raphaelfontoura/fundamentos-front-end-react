"use client";

import { Button } from "@/components/Button";
import { useAuth } from "@/context/aula-4/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Dashboard() {
    const { user, logout } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push("/login");
        }
    }, [user]);

    if (!user) return null;

    return (
        <div className="grid gap-4">
            <h1>Bem-vindo, {user.email}!</h1>
            <p>Sua role: {user.role}</p>
            <Button color="blue" onClick={logout}>Sair</Button>
        </div>
    );
}
