import { FlipWords } from "@/components/ui/FlipWords";
import { HeroHighlight } from "@/components/ui/HeroHighlight";
import React from "react";
import page from "./(home)/page";
import FirstPage from "./FirstPage";

let words = ["Suyog", "Another", "This"];

const Hero = () => {
  return (
    <div>
      <h6>
        HI{" "}
        <FlipWords words={words} className="align-baseline" duration={1000} />
        {/* <HeroHighlight children={FirstPage}></HeroHighlight> */}
      </h6>
    </div>
  );
};

export default Hero;
