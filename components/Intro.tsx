"use client";

import { useLenis } from "@studio-freight/react-lenis";
import { useRef, useState } from "react";
import MyLink from "./MyLink";
import Link from "next/link";

function opacityForBlock(sectionProgress: number, blockNumber: number) {
  const progress = sectionProgress - blockNumber;

  if (progress >= 0 && progress < 1) {
    return 1;
  }

  return 0.2;
}

export default function Intro() {
  const [scrollY, setScrollY] = useState(0);

  useLenis(({ scroll }: any) => {
    setScrollY(scroll);
  });

  const refContainer = useRef<HTMLDivElement>(null);
  const numOfPages = 3;
  let progress = 0;
  const { current: elContainer } = refContainer;

  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;

    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;

    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }

  return (
    <div
      ref={refContainer}
      className="relative z-10 bg-black text-white dark:bg-white  dark:text-black"
      id="intro"
    >
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-10 py-24 text-4xl font-semibold tracking-tight md:py-28 md:text-6xl lg:px-20 lg:py-3 lg:text-7xl">
        <div className="leading-[1.15]">
          <div
            className="introText"
            style={{ opacity: opacityForBlock(progress, 0) }}
          >
            I love coding.
          </div>
          <span
            className="introText inline-block after:content-['_']"
            style={{ opacity: opacityForBlock(progress, 1) }}
          >
            I&apos;m a tech enthusiast who loves crafting sleek, scalable web solutions using Node.js, MongoDB, and the MERN stack. 
          </span>
          <span
            className="introText inline-block"
            style={{ opacity: opacityForBlock(progress, 2) }}
          >
            I thrive on turning complex challenges into seamless user experiences.

          </span>
          <div className="text-black">
          {/* <MyLink href="https://suyog.tech/projects"  >See some of my projects</MyLink> */}
          <Link
                href="/about"
                className="underline-magical text-black text-md w-max cursor-pointer sm:text-lg md:text-xl xl:text-2xl"
              >
                see my work &rarr;
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
