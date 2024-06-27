"use client";
import { HeroHighlight, Highlight } from "@/components/ui/HeroHighlight";

export function HeroHighlightDemo() {
  return (
    <HeroHighlight className="justify-center">
      Another thing is that is a {""}
      <Highlight>copy</Highlight>
    </HeroHighlight>
  );
}
