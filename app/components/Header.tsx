import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full max-w-5xl flex">
      <Image
        src="/logo.png"
        alt="Trailbridge Web Logo"
        className=""
        height={100}
        width={100}
      />
    </header>
  );
}
