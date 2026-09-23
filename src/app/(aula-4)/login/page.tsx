"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/context/aula-4/AuthContext";
import { Button } from "@/components/Button";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, isReady } = useAuth();
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault();
        setError("");

        if (!email || !password) {
            setError("Preencha o formulário para continuar.");
            return;
        }

        try {
            await login(email, password);
            router.replace("/dashboard");
        } catch (err) {
            console.log(err)
            setError((err as Error).message);
        }
    };

    if (!isReady) return null;

    return (
        <div className="flex min-h-[calc(100dvh-4rem)] w-full items-center justify-center">
            <div className="mx-auto flex w-full max-w-md flex-col items-center gap-y-4 rounded border p-4">
                <h1 className="text-3xl font-bold">Login</h1>
                { error && <p className="p-2 bg-red-900 text-white font-bold border rounded">{error}</p> }
                <form onSubmit={handleSubmit} className="grid w-full gap-y-2">
                    <input
                        className="w-full rounded border border-gray-600 p-2"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                    <input
                        className="w-full rounded border border-gray-600 p-2"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Senha"
                        type="password"
                    />
                    <Button color="blue" type="submit">
                        Entrar
                    </Button>
                </form>
            </div>
        </div>
    );
}
