"use client";

import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";

type User = {
    email: string;
    role: "user" | "admin";
};

type AuthContextProps = {
    user: User | null;
    token: string | null;
    isReady: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
};

const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [isReady, setIsReady] = useState(false);

    const router = useRouter();

    useEffect(() => {
        const restoreSession = () => {
            const savedToken = Cookies.get("token");

            if (!savedToken) {
                setUser(null);
                setToken(null);
                setIsReady(true);
                return;
            }

            try {
                const decoded = jwt.decode(savedToken) as Partial<User> | null;

                if (!decoded || !decoded.email || !decoded.role) {
                    throw new Error("Token inválido");
                }

                setToken(savedToken);
                setUser({ email: decoded.email, role: decoded.role as User["role"] });
            } catch {
                Cookies.remove("token");
                setToken(null);
                setUser(null);
            } finally {
                setIsReady(true);
            }
        };

        restoreSession();
    }, []);

    const login = async (email: string, password: string) => {
        const res = await fetch("/api/auth", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        });

        const data = await res.json();

        if (res.ok) {
            setToken(data.token);
            setUser(data.user);
            setIsReady(true);
        } else {
            throw new Error(data.message);
        }
    };

    const logout = () => {
        Cookies.remove("token");
        setToken(null);
        setUser(null);
        router.push("/login");
    };

    return (
        <AuthContext.Provider value={{ user, token, isReady, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);