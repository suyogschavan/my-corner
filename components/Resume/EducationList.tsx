"use client";
import React from "react";
import { motion } from "framer-motion";
import { ResumeData } from "./types";

export default function EducationList({
  items,
}: {
  items: NonNullable<ResumeData["education"]>;
}) {
  return (
    <ul className="space-y-4">
      {items.map((ed, i) => (
        <motion.li
          key={i}
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.35 }}
            className="rounded-2xl border border-border 
  bg-white dark:bg-gray-800/60 p-4 shadow-sm"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h4 className="text-sm font-semibold">{ed.institution}</h4>
              <p className="text-xs opacity-80">{ed.area}</p>
            </div>
            <div className="text-xs opacity-80">
              {ed.startDate} – {ed.endDate}
              {ed.score ? ` • ${ed.score}` : ""}
            </div>
          </div>
        </motion.li>
      ))}
    </ul>
  );
}
