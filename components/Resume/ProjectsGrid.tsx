"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import { ResumeData } from "./types";
import { CometCard } from "../ui/CometCard";

export default function ProjectsGrid({
  items,
}: {
  items: NonNullable<ResumeData["projects"]>;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((p, i) => (
        <>
        <CometCard>
        <ProjectCard key={i} p={p} />
        </CometCard>
        </>
      ))}
    </div>
  );
}
