import type { HTMLAttributes, ReactNode } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  children: ReactNode;
}

export function Card({ title, children, ...rest }: CardProps) {
  return (
    <section {...rest}>
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
}
