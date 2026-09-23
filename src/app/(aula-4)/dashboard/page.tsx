"use client";

import { Button } from "@/components/Button";
import { useAuth } from "@/context/aula-4/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
    const { user, logout, isReady } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (isReady && !user) {
            router.replace("/login");
        }
    }, [isReady, user, router]);

    if (!isReady || !user) return null;

    return (
        <div className="grid gap-4">
            <h1 className="text-3xl font-bold">Dashboard - admin</h1>
            <h1>Bem-vindo, {user.email}!</h1>
            <p>Sua role: {user.role}</p>
            <Button color="blue" onClick={logout}>Sair</Button>
        </div>
    );
}
