"use client";

import { ContadorContext } from "@/context/ContadorContext";
import { useContext } from "react";
import { Button } from "./Button";

export const ContadorGlobal = () => {
    const { contador, setContador } = useContext(ContadorContext);

    return (
        <div className="grid gap-y-4">
                    <h2 className="text-2xl font-bold">Contador Global</h2>
                    
                    <p>Número atual: <span className="font-bold">{contador}</span></p>
                    <div className="flex gap-x-2">
                        <Button onClick={() => setContador((c) => c + 3)} color="blue">
                            +3
                        </Button>
                        <Button onClick={() => setContador(contador + 1)} color="blue">
                            +1
                        </Button>
                        <Button onClick={() => setContador((contador) => contador - 1)} color="red">
                            -1
                        </Button>
                        <Button onClick={() => setContador((contador) => contador - 3)} color="red">
                            -3
                        </Button>
                    </div>
                </div>
    );
}