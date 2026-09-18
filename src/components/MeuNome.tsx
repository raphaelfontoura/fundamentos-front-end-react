"use client";

import { FC } from "react";

type MeuNomeProps = {
    name: string;
    age: number;
    birthDate: Date;
};

export const MeuNome: FC<MeuNomeProps> = ({ name, age, birthDate }) => (
    <>
        <h1>Meu nome é {name}</h1>
        <h2>Minha idade é {age}</h2>
        <h3>Minha data de nascimento é {birthDate.toLocaleDateString("pt-BR")}</h3>
    </>
);