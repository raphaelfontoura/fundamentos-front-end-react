"use client";

import { useState } from "react";

export const Contador = () => {

    const [contador, setContador] = useState(0);

    return (
        <div>
            <h2 className="text-2xl font-bold">Contador</h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">+</button>
            <p>Número atual: <span className="font-bold">{contador}</span></p>
            <button className="bg-red-500 text-white px-4 py-2 rounded">-</button>
        </div>
    );
};