import Image from "next/image";
import GithubLink from "./GithubLink";
import TwitterShare from "./TwitterShare";

export default function Footer() {
  return (
    <footer className="w-full p-2 sm:p-6 lg:p-24 border-t text-black/80">
      <div className="max-w-5xl mx-auto flex flex-col text-sm lg:text-[1.125rem] lg:leading-[1.5rem] lg:flex-row items-center justify-center lg:justify-between">
        <div className="flex gap-6 items-center max-w-lg">
          <Image
            src="/logo.png"
            alt="Trailbridge Web Logo"
            height={80}
            width={80}
            className="w-10 lg:w-20"
          />
          <p>
            Built with Next.js, Tailwind CSS, and Framer Motion by{" "}
            <a
              href="https://x.com/emurrelldev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-400 transition ease-in-out duration-100">
              @EMurrell
            </a>
          </p>
        </div>
        <div className="flex gap-2 opacity-80 mt-2 ml-auto sm:mx-auto">
          <GithubLink />
          <TwitterShare />
        </div>
      </div>
    </footer>
  );
}
