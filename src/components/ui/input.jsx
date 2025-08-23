import React from "react";
export const Input = React.forwardRef(({ className = "", ...props }, ref) => (
  <input
    ref={ref}
    className={`h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-sm focus:border-gray-400 focus:outline-none ${className}`}
    {...props}
  />
));
Input.displayName = "Input";
