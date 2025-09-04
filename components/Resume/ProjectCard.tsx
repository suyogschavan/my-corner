"use client";
import React from "react";
import { motion } from "framer-motion";
import { Link as LinkIcon } from "lucide-react";
import { ResumeData } from "./types";
import Chip from "./Chip";

export default function ProjectCard({
  p,
}: {
  p: NonNullable<ResumeData["projects"]>[number];
}) {
  return (
    <motion.a
      href={p.url || p.repo || "#"}
      target="_blank"
      rel="noreferrer noopener"
      initial={{ y: 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35 }}
      className="group block rounded-2xl border border-border 
    bg-white dark:bg-gray-800/70 
    backdrop-blur-sm p-5 shadow-sm hover:shadow-md"

    >
      <div className="mb-2 flex items-center justify-between gap-2">
        <h3 className="text-base font-semibold leading-tight">{p.name}</h3>
        <LinkIcon className="h-4 w-4 opacity-60 group-hover:opacity-100" />
      </div>
      {p.description && <p className="text-sm opacity-80">{p.description}</p>}
      {p.highlights && (
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
          {p.highlights.map((h, i) => (
            <li key={i} className="leading-snug opacity-90">
              {h}
            </li>
          ))}
        </ul>
      )}
      {p.tech && (
        <div className="mt-3 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>
      )}
    </motion.a>
  );
}
