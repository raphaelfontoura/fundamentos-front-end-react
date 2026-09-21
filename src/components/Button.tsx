import { ButtonHTMLAttributes, FC } from "react";

type ButtonProps = {
    color: "blue" | "red";
};

const colorClasses = {
    blue: "bg-blue-500 hover:bg-blue-700",
    red: "bg-red-500 hover:bg-red-700",
} as const;

export const Button: FC<
    ButtonProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color">
> = ({
    onClick,
    color,
    children,
    ...props
}) => (
    <button
        className={`${colorClasses[color]} text-white px-4 py-2 border rounded font-bold`}
        onClick={onClick}
        {...props}
    >
        {children}
    </button>
);