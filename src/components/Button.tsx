"use client";

import { DOMAttributes, FC, ReactNode } from "react";

type ButtonProps = {
    onClick: DOMAttributes<HTMLButtonElement>["onClick"];
    children: ReactNode;
    color: string;
};

export const Button: FC<ButtonProps> = ({ onClick, color, children}) => (
    <button
        className={`bg-${color}-500 text-white px-4 py-2 border rounded hover:bg-${color}-700`}
        onClick={onClick}
    >
        {children}
    </button>
);