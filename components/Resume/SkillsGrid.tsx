"use client";
import React from "react";
import { motion } from "framer-motion";
import { ResumeData } from "./types";
import Chip from "./Chip";

const SkillGroup: React.FC<{ title: string; items: string[] }> = ({
  title,
  items,
}) => (
  <motion.div
    initial={{ y: 24, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.35 }}
className="rounded-2xl border border-border 
  bg-white dark:bg-gray-800/60 p-4 shadow-sm"
  >
    <h4 className="mb-2 text-sm font-semibold opacity-90">{title}</h4>
    <div className="flex flex-wrap gap-2">
      {items.map((t) => (
        <Chip key={t}>{t}</Chip>
      ))}
    </div>
  </motion.div>
);

export default function SkillsGrid({
  items,
}: {
  items: NonNullable<ResumeData["skills"]>;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((g) => (
        <SkillGroup key={g.category} title={g.category} items={g.items} />
      ))}
    </div>
  );
}
