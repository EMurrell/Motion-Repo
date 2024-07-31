import TwitterShare from "./TwitterShare";

export default function Hero() {
  return (
    <section>
      <div className="w-full flex justify-between">
        <h1 className="text-5xl lg:text-6xl font-medium">Motion Repo</h1>
        <TwitterShare className="hidden lg:flex mt-auto" />
      </div>
      <div className=" flex flex-col lg:flex-row justify-between w-full">
        <div className="max-w-[90%] lg:w-[70%] text-sm mt-4 font-light space-y-2 lg:pr-28">
          <p className="text-lg lg:text-xl text-balance mb-4 font-medium">
            A collection of animations built with Framer Motion.
          </p>
          <p>
            {" "}
            To get started, ensure you have{" "}
            <a
              href="https://www.framer.com/motion/introduction/"
              className="text-blue-600 hover:text-blue-400 transition ease-in-out duration-200">
              Framer-Motion
            </a>{" "}
            and{" "}
            <a
              href="https://tailwindcss.com/docs/installation"
              className="text-blue-600 hover:text-blue-400 transition ease-in-out duration-200">
              Tailwind CSS{" "}
            </a>{" "}
            installed and configured in your project.{" "}
          </p>
          <p>
            Copy the provided code into your files. Import and use the animation
            components like regular elements (e.g., div, span).
          </p>
        </div>

        <ul className="text-xs sm:text-sm font-light my-4 lg:w-[30%] max-w-[90%] lg:p-4 space-y-2 lg:border rounded-2xl">
          <li>
            <span className="font-medium">Customizable: </span>Adjust parameters
            like duration and delay via props.
          </li>
          <li>
            <span className="font-medium">Accessible: </span>Designed with
            accessibility in mind.
          </li>
          <li>
            <span className="font-medium">Flexible: </span>Style and customize
            as needed.
          </li>
        </ul>
      </div>
      <TwitterShare className="lg:hidden" />
    </section>
  );
}
