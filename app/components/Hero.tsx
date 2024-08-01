import TwitterShare from "./TwitterShare";

export default function Hero() {
  return (
    <section>
      <div className="w-full flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col lg:w-[70%] mt-auto pr-12 lg:pr-36">
          <h1 className="text-6xl lg:text-7xl font-medium">Motion Repo</h1>

          <h2 className="text-[1.125rem] leading-[1.5rem] lg:text-[18px] mt-4">
            A collection of accessible, customizable animations built with
            Framer Motion.
          </h2>
        </div>

        <p className="lg:w-[30%] text-xs sm:text-sm font-light mb-1 pr-12 lg:pr-0 mt-4 lg:mt-0">
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
          installed and configured in your project. Copy the provided code into
          your files. Import and use the animation components like regular
          elements (e.g., div, span).
        </p>

        {/* <ul className="text-xs sm:text-sm font-light my-4 lg:w-[30%] max-w-[90%] lg:p-4 space-y-2 lg:border rounded-2xl">
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
        </ul> */}
      </div>
    </section>
  );
}
