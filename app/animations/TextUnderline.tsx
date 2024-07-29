interface TextUnderlineProps {
  text: string;
  className?: string;
}

export default function TextUnderline({
  text,
  className = "",
}: TextUnderlineProps) {
  return (
    <span className={`group inline-block cursor-pointer relative ${className}`}>
      {text}
      <span className="block max-w-0 group-hover:min-w-full transition-all transform ease-in-out duration-500 h-1 -mt-0.5 bg-sky-600 "></span>
    </span>
  );
}
