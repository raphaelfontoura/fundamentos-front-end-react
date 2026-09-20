"use client";

import { ContadorContext } from "@/context/ContadorContext";
import { useContext } from "react";

export const ContadorGlobalValor = () => {
    const { contador } = useContext(ContadorContext);

    return (
        <div className="grid gap-y-4">

            <p>Valor do contador global: <span className="font-bold">{contador}</span></p>

        </div>
    );
}