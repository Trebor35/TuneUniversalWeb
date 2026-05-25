import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Card({ className = "", children, ...props }: CardProps) {
  return (
    <div className={`rounded-lg border border-line bg-white/82 p-4 shadow-soft sm:p-5 ${className}`} {...props}>
      {children}
    </div>
  );
}
