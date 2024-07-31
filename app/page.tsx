import FadeIn from "./animations/FadeIn";
import CodePreview from "./components/CodePreview";
import { fadeInCode } from "./code-strings/fadeIn";
import { staggeredTextCode } from "./code-strings/staggeredText";
import StaggeredText from "./animations/StaggeredText";
import Hero from "./components/Hero";
import Counter from "./animations/Counter";
import { counterCode } from "./code-strings/counter";
import { fadeUpCode } from "./code-strings/fadeUp";
import WordCarousel from "./animations/WordCarousel";
import { wordCarouselCode } from "./code-strings/wordCarousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-2 sm:p-6 lg:p-24 pt-36 sm:pt-40 lg:pt-44">
      <div className="mx-auto max-w-5xl w-full">
        <Hero />
        <CodePreview
          animationComponent={FadeIn}
          code={fadeInCode}
          animationProps={{
            up: false,
            className: "",
            delay: 0.2,
            duration: 1,
          }}
          text="Fade In"
        />
        <CodePreview
          animationComponent={FadeIn}
          code={fadeUpCode}
          animationProps={{
            up: true,
            delay: 0.2,
            className: "",
          }}
          text="Fade Up"
        />
        <CodePreview
          animationComponent={StaggeredText}
          code={staggeredTextCode}
          animationProps={{
            className: "",
          }}
          text="Staggered Text"
        />
        <CodePreview
          animationComponent={WordCarousel}
          code={wordCarouselCode}
          animationProps={{
            words: ["Astounding", "Stunning", "Dramatic", "Word Carousel"],
            className: "",
            loop: false,
          }}
        />
        <CodePreview
          animationComponent={Counter}
          code={counterCode}
          animationProps={{
            from: 0,
            to: 100,
            duration: 3,
            delay: 0.4,
            className: "",
            amount: "all",
          }}
          label="Counter"
        />
      </div>
    </main>
  );
}
