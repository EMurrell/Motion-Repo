import FadeIn from "./animations/FadeIn";
import Toggle from "./components/Toggle";
import { fadeInCode } from "./code-strings/fadeIn";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-2 sm:p-6 lg:p-24">
      <FadeIn up={true} className="text-3xl sm:text-4xl lg:text-5xl">
        Hello World
      </FadeIn>
      <FadeIn delay={0.4} className="text-xl sm:text-2xl lg:text-3xl mt-4">
        Description with delay
      </FadeIn>
      <Toggle animationComponent={FadeIn} code={fadeInCode} />
    </main>
  );
}
