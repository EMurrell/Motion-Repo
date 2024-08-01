import Image from "next/image";
import TwitterShare from "./TwitterShare";
import GithubLink from "./GithubLink";

export default function Header() {
  return (
    <header className="w-full flex py-6 px-2 sm:px-6 lg:px-24">
      <div className="max-w-5xl flex mx-auto w-full justify-between">
        <Image
          src="/logo.png"
          alt="Trailbridge Web Logo"
          className=""
          height={50}
          width={50}
        />
        <div className="flex gap-2  items-center">
          <GithubLink />
          <TwitterShare />
        </div>
      </div>
    </header>
  );
}
