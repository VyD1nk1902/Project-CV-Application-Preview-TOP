import type React from "react";

export default function Button({
  type,
  onClick,
  children,
  className,
}: {
  className: string;
  type: "button" | "submit" | "reset";
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}) {
  return (
    <button
      className={`w-full font-bold py-2 px-4 rounded-lg shadow-md transition-all duration-300 ease-in-out ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
