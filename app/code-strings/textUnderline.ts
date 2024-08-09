export const textUnderlineCode = `
"use client";

// Required props: children (React.ReactNode)
// Optional props: className (string), underlineColor (string)
// Good to know: underlineColor allows customizing the underline color, defaults to 'bg-black'
// Example Usage: <TextUnderline underlineColor="bg-red-500">Hover me</TextUnderline>

type TextUnderlineProps = {
  children: React.ReactNode;
  className?: string;
  underlineColor?: string; 
};

export default function TextUnderline({
  children,
  className = "",
  underlineColor = "bg-black", 
}: TextUnderlineProps) {
  return (
    <span className={\`group inline-block cursor-pointer \${className}\`}>
      {children}
      <span
        className={\`block h-0.5 lg:h-1 w-full transition-all duration-500 motion-reduce:duration-0 ease-in-out max-w-0 group-hover:max-w-full \${underlineColor}\`}
      />
    </span>
  );
}
`;
