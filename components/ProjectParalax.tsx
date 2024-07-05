"use client";
import React from "react";
import { HeroParallax } from "./ui/HeroParallax";
import { projects } from "@/data/project";

const ProjectParalax = () => {
  return <HeroParallax products={projects} />;
};

export default ProjectParalax;
