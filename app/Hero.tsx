"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/HeroHighlight";
import { FlipWords } from "@/components/ui/FlipWords";
import Link from "next/link";

export function Hero() {
  const words = ["better", "cute", "beautiful", "modern"];
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-5 md:text-4xl lg:text-5xl  text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        With
        <FlipWords words={words} />, nothing&apos;s real. Everything is far
        away. Everything is a{" "}
        <Highlight className="text-black dark:text-white">
          copy, of a copy, of a copy.
        </Highlight>
        <br />
        <div className="">
          <Link href="/projects" className="text-center ">
            <button className="button " data-text="Awesome">
              <span className="actual-text ">&nbsp;Projects&nbsp;</span>
              <span aria-hidden="true" className="rounded-lg hover-text">
                &nbsp;projects&nbsp;
              </span>
            </button>
          </Link>
        </div>
      </motion.h1>
    </HeroHighlight>
  );
}
