interface TextUnderlineProps {
  text: string;
  className?: string;
}

export default function TextUnderline({
  text,
  className = "",
}: TextUnderlineProps) {
  return (
    <span className={`group inline-block relative ${className}`}>
      {text}
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 -mt-0.5 bg-sky-600 absolute bottom-0 left-0"></span>
    </span>
  );
}
