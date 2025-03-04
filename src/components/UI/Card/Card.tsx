import React from "react"

 const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
      <div className={`bg-white rounded-2xl shadow-lg ${className}`}>{children}</div>
    );
  };
  
 export default Card
  