import type { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export function Button({ variant = "primary", children, ...rest }: ButtonProps) {
  return (
    <button type="button" data-variant={variant} {...rest}>
      {children}
    </button>
  );
}
