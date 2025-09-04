import React from "react";

const Chip: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="inline-flex items-center rounded-full border border-border 
  bg-primary-100 dark:bg-primary-900/40 
  text-primary-700 dark:text-primary-300 
  px-2 py-1 text-xs font-medium">
  
    {children}
  </span>
);

export default Chip;
