import { DOMAttributes, FC, ReactNode } from "react";

type ButtonProps = {
    onClick: DOMAttributes<HTMLButtonElement>["onClick"];
    color: "blue" | "red";
    children: ReactNode;
};

const colorClasses = {
    blue: "bg-blue-500 hover:bg-blue-700",
    red: "bg-red-500 hover:bg-red-700",
} as const;

export const Button: FC<ButtonProps> = ({ onClick, color, children }) => (
    <button
        className={`${colorClasses[color]} text-white px-4 py-2 border rounded`}
        onClick={onClick}
    >
        {children}
    </button>
);