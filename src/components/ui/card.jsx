export function Card({ children, className }) {
  return (
    <div className={`bg-white/10 backdrop-blur-lg border border-white/10 p-4 rounded-2xl shadow ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}
