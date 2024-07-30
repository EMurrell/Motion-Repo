// app/page.tsx

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
