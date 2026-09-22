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
        const savedToken = localStorage.getItem("token");
        const savedUser = localStorage.getItem("user");
        try {
            if (savedToken && savedUser) {
                setToken(savedToken);
                setUser(JSON.parse(savedUser));
            }
        } finally {
            setIsHydrated(true);
        }
    }, []);

    const login = async (email: string, password: string) => {
        const res = await fetch("/api/auth", {
            method: "POST",
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();

        if (res.ok) {
            setToken(data.token);
            setUser(data.user);
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
        } else {
            throw new Error(data.message);
        }
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    };

    return (
        <AuthContext.Provider value={{ user, token, isHydrated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);