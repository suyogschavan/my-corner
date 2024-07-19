// import { HeroHighlightDemo } from "@/components/demo/HeroHighlightDemo";
// import { Hero } from "./Hero";
// import ProjectParalax from "@/components/ProjectParalax";
// // import Hero from "./Hero";

// export default function Home() {
//   return (
//     <>
//       {/* <section

//         id="landing"
//         className="h-[100vh] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center"
//       >
//         <Hero />
//         <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
//       </section>
//       <section></section> */}

//       <RealHero
//     </>
//   );
// }

import Hero from "@/components/RealHero";
import Intro from "@/components/Intro";
import { ScrollProvider } from "@/components/Providers/ScrollProvider";
import SectionContainer from "@/components/SectionContainer";
import { Suspense } from "react";
import Works from "@/components/work/Works";
import MainLayout from "@/components/layouts/MainLayout";

export default function Page() {
  return (
    // <MainLayout>
    <ScrollProvider>
      <Hero />
      <Intro />
      <Works />
      {/* <ResumeScroll /> */}
    </ScrollProvider>
    // </MainLayout>
  );
}
