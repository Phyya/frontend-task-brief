import React from "react"

const Button = ({ children, onClick, className }: { children: React.ReactNode; onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; className?: string }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 outline-none py-1 bg-primary whitespace-nowrap rounded-lg shadow normal-case  ${className}`}
    >
      {children}
    </button>
  );
};


export default Button