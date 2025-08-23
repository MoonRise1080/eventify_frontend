// src/components/ui/card.jsx

export function Card({ className = "", ...props }) {
  return (
    <div
      className={`rounded-xl border border-gray-200 bg-white shadow-sm ${className}`}
      {...props}
    />
  );
}

export function CardHeader({ className = "", ...props }) {
  return <div className={`px-6 pt-6 ${className}`} {...props} />;
}

export function CardContent({ className = "", ...props }) {
  return <div className={`px-6 ${className}`} {...props} />;
}

export function CardFooter({ className = "", ...props }) {
  return <div className={`px-6 pb-6 ${className}`} {...props} />;
}

// ✅ Add these
export function CardTitle({ className = "", ...props }) {
  return (
    <h3 className={`text-lg font-semibold leading-none tracking-tight ${className}`} {...props} />
  );
}

export function CardDescription({ className = "", ...props }) {
  return (
    <p className={`text-sm text-muted-foreground ${className}`} {...props} />
  );
}
