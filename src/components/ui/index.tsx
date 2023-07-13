export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode,
  className?: string,
}) {
  return <div className={`container | ${className} px-[5%] mx-auto `}>{children}</div>;
}
