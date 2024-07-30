import FadeIn from "./animations/FadeIn";
import CodePreview from "./components/CodePreview";
import { fadeInCode } from "./code-strings/fadeIn";
import { staggeredTextCode } from "./code-strings/staggeredText";
import StaggeredText from "./animations/StaggeredText";
import Hero from "./components/Hero";
import Counter from "./animations/Counter";
import { counterCode } from "./code-strings/counter";
import { fadeUpInCode } from "./code-strings/fadeUpIn";
import WordCarousel from "./animations/WordCarousel";
import { wordCarouselCode } from "./code-strings/wordCarousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-2 sm:p-6 lg:p-24">
      <div className="mx-auto max-w-5xl w-full">
        <Hero />
        <CodePreview
          animationComponent={FadeIn}
          code={fadeInCode}
          animationProps={{
            up: false,
            className: "text-xl sm:text-2xl lg:text-3xl mt-4",
          }}
          text="Fade In"
        />
        <CodePreview
          animationComponent={FadeIn}
          code={fadeUpInCode}
          animationProps={{
            up: true,
            delay: 0.2,
            className: "text-xl sm:text-2xl lg:text-3xl mt-4",
          }}
          text="Fade Up and In"
        />
        <CodePreview
          animationComponent={StaggeredText}
          code={staggeredTextCode}
          animationProps={{
            className: "text-xl sm:text-2xl lg:text-3xl mt-4",
          }}
          text="Staggered Text"
        />
        <CodePreview
          animationComponent={WordCarousel}
          code={wordCarouselCode}
          animationProps={{
            words: ["Astounding", "Stunning", "Dramatic", "Word Carousel"],
            className: "text-xl sm:text-2xl lg:text-3xl mt-4",
            loop: false,
          }}
        />
        <CodePreview
          animationComponent={Counter}
          code={counterCode}
          animationProps={{
            from: 0,
            to: 100,
            duration: 2,
            className: "text-xl sm:text-2xl lg:text-3xl mt-4",
          }}
          text="Counter Animation"
        />
      </div>
    </main>
  );
}
