export function Badge({ variant = "default", className = "", ...props }) {
  const base = "inline-flex items-center rounded-full text-xs font-medium px-2.5 py-1";
  const styles = {
    default: "bg-blue-600 text-white",
    secondary: "bg-gray-100 text-gray-800",
    outline: "border border-gray-300 text-gray-700",
  };
  return <span className={`${base} ${styles[variant]} ${className}`} {...props} />
}
