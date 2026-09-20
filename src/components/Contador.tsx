"use client";

import { useEffect, useState } from "react";
import { Button } from "./Button";

export const Contador = () => {

    const [contador, setContador] = useState(0);
    const [coisa, setCoisa] = useState("");

    // useEffect(() => {
    //   console.log("Componente Contador atualizado!");
    // });

    useEffect(() => {
      console.log("Componente Contador renderizado!");
    }, []);

    useEffect(() => {
      console.log("State contador atualizado!");
    }, [contador]);

    useEffect(() => {
      console.log("State coisa atualizado!");
    }, [coisa]);

    useEffect(() => {
      console.log("State contador ou coisa atualizado!");
    }, [contador, coisa]);
    

    return (
        <div className="grid gap-y-4">
            <h2 className="text-2xl font-bold">Contador</h2>
            <div className="flex gap-x-2">
                <input className="border px-4 py-2"
                    value={coisa}
                    onChange={(e) => {
                        setCoisa(e.target.value);
                    }}
                />
                <Button onClick={() => setCoisa("")} color="blue">
                    Limpar
                </Button>
            </div>
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
};