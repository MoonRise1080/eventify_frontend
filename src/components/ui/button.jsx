import React from "react";

const base =
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  default: "bg-primary text-white hover:bg-blue-700",
  outline: "border border-gray-300 bg-white hover:bg-gray-100",
  ghost: "bg-transparent hover:bg-black/10",
  secondary: "bg-gray-200 text-black hover:bg-gray-300",
};

const sizes = {
  sm: "h-9 px-3",
  md: "h-10 px-4",
  lg: "h-11 px-6",
};

export const Button = React.forwardRef(
  ({ className = "", variant = "default", size = "md", ...props }, ref) => (
    <button
      ref={ref}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  )
);
Button.displayName = "Button";
