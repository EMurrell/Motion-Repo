export const textUnderlineCode = `
"use client";

type TextUnderlineProps = {
  children: React.ReactNode;
  className?: string;
};

export default function TextUnderline({
  children,
  className = "",
}: TextUnderlineProps) {
  return (
    <span className={\`group inline-block cursor-pointer \${className}\`}>
      {children}
      <span className="block h-0.5 lg:h-1 w-full bg-black transition-all duration-500 motion-reduce:duration-0 ease-in-out max-w-0 group-hover:max-w-full" />
    </span>
  );
}
`;
