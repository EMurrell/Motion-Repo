export default function Hero() {
  return (
    <>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl">Motion Repo</h1>
      <p className="text-sm sm:text-base mt-9 font-light">
        This app showcases a variety of animations built using Framer Motion. To
        get started, ensure you have{" "}
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
        installed and configured in your project. These animations leverage
        motion elements provided by Framer Motion (such as motion.div and
        motion.span), which are the backbone of these components.
      </p>
      <p className="text-sm sm:text-base mt-2 mb-9 font-light">
        Copy and paste the provided code into your own files. Then import them
        wherever you want to add an animation, and use them as their
        corresponding elements (e.g., div, span, etc.). Each animation component
        is designed to be accessible, and can be customized or styled as needed.
        They may also support (or require) additional props for easy
        customization, allowing you to control various parameters such as
        duration, delay, and other animation-specific settings.
      </p>
    </>
  );
}
