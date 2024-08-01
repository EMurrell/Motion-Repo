import Image from "next/image";
import TwitterShare from "./TwitterShare";

export default function Header() {
  return (
    <header className="w-full flex py-6">
      <div className="max-w-5xl flex mx-auto w-full justify-between">
        <Image
          src="/logo.png"
          alt="Trailbridge Web Logo"
          className=""
          height={50}
          width={50}
        />
        <TwitterShare />
      </div>
    </header>
  );
}
