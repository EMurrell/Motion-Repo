import FadeIn from "./animations/FadeIn";
import CodePreview from "./components/CodePreview";
import { fadeInCode } from "./code-strings/fadeIn";
import { staggeredTextCode } from "./code-strings/staggeredText";
import StaggeredText from "./animations/StaggeredText";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-2 sm:p-6 lg:p-24">
      <div className="mx-auto max-w-5xl w-full">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl">Motion Repo</h1>
        <p>
          This app showcases a variety of animations built using Framer Motion.
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
          installed and configured in your project. Our animations leverage
          motion elements provided by Framer Motion, such as motion.div and
          motion.span, to create smooth and dynamic transitions. These elements
          are the backbone of our animation components.
        </p>
        <p>
          Copy and paste the provided code into your own files. Then, import
          these components into the desired component where you want to use the
          animations, and use them as their corresponding elements (e.g., div,
          span, etc.). Each animation component may have optional props that you
          can customize to suit your needs.
        </p>
        <p>
          our animation components are designed to be accessible and can be
          styled using Tailwind CSS just as you would style any other element.
          Explore the examples and copy the code snippets to bring engaging
          animations to your own applications effortlessly!
        </p>
        <CodePreview
          animationComponent={FadeIn}
          code={fadeInCode}
          animationProps={{
            delay: 0.4,
            up: true,
            className: "text-xl sm:text-2xl lg:text-3xl mt-4",
          }}
          text="Fade In"
        />
        <CodePreview
          animationComponent={StaggeredText}
          code={staggeredTextCode}
          animationProps={{
            text: "Staggered Text",
            className: "text-xl sm:text-2xl lg:text-3xl mt-4",
          }}
          text="Staggered Text"
        />
      </div>
    </main>
  );
}
