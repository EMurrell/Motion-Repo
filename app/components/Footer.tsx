import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="w-full p-2 sm:p-6 lg:p-24 border-t flex flex-col items-center justify-centertext-center text-gray-500">
      <p>Built with Next.js, Tailwind CSS, and Framer Motion by EMurrell</p>
      <a
        href="https://github.com/EMurrell/animations"
        className="text-blue-600 hover:text-blue-400 transition ease-in-out flex items-center">
        Go to Github repository
        <ArrowTopRightOnSquareIcon className="h-5 w-5 inline-block ml-2" />
      </a>
    </footer>
  );
}
