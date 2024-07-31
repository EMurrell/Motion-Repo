export default function Hero() {
  return (
    <section className="text-balance">
      <h1 className="text-5xl lg:text-6xl">Motion Repo</h1>
      <div className=" flex flex-col lg:flex-row justify-between w-full">
        <div className="lg:w-3/4 lg:pr-8 text-sm sm:text-base mt-4 lg:mt-9 font-light space-y-2">
          <p>
            This project features a variety of animations built using Framer
            Motion.
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

        <ul className="text-xs sm:text-sm font-light my-6 lg:w-1/4 lg:p-4 space-y-2">
          <li>
            <span className="font-semibold">Customizable: </span>Adjust
            parameters like duration and delay via props.
          </li>
          <li>
            <span className="font-semibold">Accessible: </span>Designed with
            accessibility in mind.
          </li>
          <li>
            <span className="font-semibold">Flexible: </span>Style and customize
            as needed.
          </li>
        </ul>
      </div>
    </section>
  );
}
