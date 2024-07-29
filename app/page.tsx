import Image from "next/image";
import TextUnderline from "./animations/TextUnderline";
import FadeIn from "./animations/FadeIn";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-2 sm:p-6 lg:p-24">
      <FadeIn up={true} className="text-3xl sm:text-4xl lg:text-5xl">
        Hello World
      </FadeIn>
      <FadeIn delay={0.4} className="text-xl sm:text-2xl lg:text-3xl mt-4">
        Description with delay
      </FadeIn>
      {/* <TextUnderline
        text="Hover me to animate"
        className="text-4xl sm:text-6xl"
      /> */}
    </main>
  );
}
