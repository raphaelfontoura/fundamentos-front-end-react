"use client";

import { useContext } from "react";

import { ContadorContext } from "@/context/ContadorContext";

export const ContadorGlobalValor = () => {
    const { contador } = useContext(ContadorContext);

    return (
        <div className="grid gap-y-4">

            <p>Valor do contador global: <span className="font-bold">{contador}</span></p>

        </div>
    );
}