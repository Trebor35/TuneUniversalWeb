import type { InputHTMLAttributes } from "react";

export function Slider({ className = "", ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="range"
      className={`h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-mint ${className}`}
      {...props}
    />
  );
}
