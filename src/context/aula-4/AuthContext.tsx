"use client";

import { createContext, useContext, useEffect, useState } from "react";

type User = {
    email: string;
    role: "user" | "admin";
};

type AuthContextProps = {
    user: User | null;
    token: string | null;
    isHydrated: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
};

const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        const restoreSession = async () => {
            try {
                const res = await fetch("/api/auth", {
                    credentials: "include",
                });

                if (res.ok) {
                    const data = await res.json();
                    setUser(data.user);
                }
            } finally {
                setIsHydrated(true);
            }
        };

        void restoreSession();
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
            setIsHydrated(true);
        } else {
            throw new Error(data.message);
        }
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        setIsHydrated(false);
        void fetch("/api/auth", { method: "DELETE", credentials: "include" })
            .finally(() => setIsHydrated(true));
    };

    return (
        <AuthContext.Provider value={{ user, token, isHydrated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);