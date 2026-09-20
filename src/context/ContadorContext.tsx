"use client";

import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";

type ContadorType = number | null;

type ContadorContextType = {
    contador: ContadorType;
    setContador: Dispatch<SetStateAction<ContadorType>>;
}

export const ContadorContext = createContext<ContadorContextType>({
    contador: 0,
    setContador: () => { },
});

// https://nextjs.org/docs/app/getting-started/server-and-client-components#context-providers
export default function ContadorProvider({ children }: { children: ReactNode }) {

    const [contador, setContador] = useState<ContadorType>(null);

    useEffect(() => {
        // const value = sessionStorage.getItem("contador");
        const value = localStorage.getItem("contador");
        setContador(value === null ? 0 : Number(value));
    }, [])

    useEffect(() => {
        if (contador !== null) {
            // sessionStorage.setItem("contador", contador.toString());
            localStorage.setItem("contador", contador.toString());
        }
    }, [contador])

    return (<ContadorContext.Provider value={{ contador, setContador }}>
        {children}
    </ContadorContext.Provider>
    );
};
