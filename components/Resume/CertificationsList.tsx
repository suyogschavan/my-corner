"use client";
import React from "react";
import { motion } from "framer-motion";
import { ResumeData } from "./types";

export default function CertificationsList({
  items,
}: {
  items: NonNullable<ResumeData["certifications"]>;
}) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {items.map((c, i) => (
        <motion.li
          key={i}
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.35 }}
          className="rounded-2xl border border-border 
 bg-white dark:bg-[rgb(18,22,26)] p-4 shadow-sm
"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <h4 className="text-sm font-semibold">{c.name}</h4>
              <p className="text-xs opacity-80">
                {[c.issuer, c.date].filter(Boolean).join(" • ")}
              </p>
            </div>
            {c.url && (
              <a
                href={c.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border px-2 py-1 text-xs"
              >
                Verify
              </a>
            )}
          </div>
        </motion.li>
      ))}
    </ul>
  );
}
