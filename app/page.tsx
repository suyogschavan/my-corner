import { HeroHighlightDemo } from "@/components/demo/HeroHighlightDemo";
import { Hero } from "./Hero";
import ProjectParalax from "@/components/ProjectParalax";
// import Hero from "./Hero";

export default function Home() {
  return (
    <>
      <section
        id="landing"
        className="relative h-[100vh]  w-full bg-black flex justify-center overflow-hidden  sm:px-1"
      >
        <div className="max-w-7xl w-full">
          <Hero />
        </div>
      </section>

      <section></section>
    </>
  );
}
