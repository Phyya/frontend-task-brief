import React from "react"


const CardContent = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return <div className={`p-4 ${className}`}>{children}</div>;
  };

  export default CardContent