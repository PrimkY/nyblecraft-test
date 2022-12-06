import React, { HTMLAttributes, ReactNode } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    onClick?: (e: React.MouseEvent) => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
    return <button onClick={onClick}>{children}</button>;
};
