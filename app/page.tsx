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
import TextUnderline from "./animations/TextUnderline";
import { textUnderlineCode } from "./code-strings/textUnderline";
import TickerTape from "./animations/TickerTape";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-2 sm:p-6 lg:p-24 pt-16 sm:pt-20 lg:pt-36">
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
            words: ["Build", "Deploy", "Scale", "Word Carousel"],
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
        <CodePreview
          animationComponent={TextUnderline}
          code={textUnderlineCode}
          animationProps={{
            className: "",
          }}
          text="Underline (hover)"
        />
        {/* THIS ANIMATION NEEDS TO BE FIXED
        <CodePreview
          animationComponent={TickerTape}
          code={textUnderlineCode} // Update this to tickerTapeCode once ready
          animationProps={{
            text: "Breaking News: Live Update Alert - Latest Headlines.",
            className: "text-xl font-bold",
          }}
        /> */}
      </div>
    </main>
  );
}
