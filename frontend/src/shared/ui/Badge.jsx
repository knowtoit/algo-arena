function Badge({ children }) {
  return (
    <span className="bg-secondary inline-flex rounded-full px-3 py-1 text-sm font-medium text-white">
      {children}
    </span>
  );
}

export default Badge;
