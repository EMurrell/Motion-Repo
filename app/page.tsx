// app/page.tsx

import FadeIn from "./animations/FadeIn";
import CodePreview from "./components/CodePreview";
import { fadeInCode } from "./code-strings/fadeIn";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-2 sm:p-6 lg:p-24">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl">Hello World</h1>
      <h2 className="text-xl sm:text-2xl lg:text-3xl mt-4">
        Description with delay
      </h2>
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
    </main>
  );
}
