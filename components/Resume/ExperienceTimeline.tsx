"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ResumeData } from "./types";
import Chip from "./Chip";

export default function ExperienceTimeline({
  items,
}: {
  items: NonNullable<ResumeData["experience"]>;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.2"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div ref={containerRef} className="relative">
      <div
        className="absolute left-5 top-0 h-full w-1 overflow-hidden rounded-full bg-border"
        aria-hidden
      >
        <motion.div
          style={{ height }}
          className="w-full bg-gradient-to-b from-primary-500 to-gradient-3-end"
        />
      </div>

      <ul className="space-y-8">
        {items.map((exp, idx) => (
          <li key={idx} className="relative pl-14">
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: idx * 0.05,
              }}
              className="absolute left-4 top-2 block h-3 w-3 -translate-x-1/2 rounded-full border-2 border-background bg-foreground"
            />

            <motion.div
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-2xl border p-4 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-base font-semibold">
                    {exp.position} • {exp.company}
                  </h3>
                  <p className="text-xs opacity-80">
                    {exp.location ? `${exp.location} • ` : ""}
                    {exp.startDate} – {exp.endDate}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.tech?.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
              </div>
              {exp.highlights && (
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="leading-snug opacity-90">
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          </li>
        ))}
      </ul>
    </div>
  );
}
