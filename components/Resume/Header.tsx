"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Phone,
  Globe,
  Github,
  Linkedin,
  MapPin,
  Download,
} from "lucide-react";
import { ResumeData } from "./types";
import DownloadButton from "./DownloadButton";

export default function Header({
  data,
  onDownload,
}: {
  data: ResumeData["basics"];
  onDownload?: () => void;
}) {
  const isInViewRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(isInViewRef, { amount: 0.8, once: true });
  return (
    <div
      ref={isInViewRef}
      className="rounded-3xl border border-border 
  bg-gradient-to-br from-gradient-1-start to-gradient-1-end 
  dark:from-gray-900 dark:to-gray-800 p-6 shadow-sm text-gray-100"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <motion.h1
            initial={{ y: 24, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold tracking-tight"
          >
            {data.name}
          </motion.h1>
          <motion.p
            initial={{ y: 24, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="opacity-80"
          >
            {data.label}
          </motion.p>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm">
          {data.email && (
            <a
              className="inline-flex items-center gap-1 rounded-full border px-3 py-1"
              href={`mailto:${data.email}`}
            >
              <Mail className="h-4 w-4" /> {data.email}
            </a>
          )}
          {data.phone && (
            <span className="inline-flex items-center gap-1 rounded-full border px-3 py-1">
              <Phone className="h-4 w-4" /> {data.phone}
            </span>
          )}
          {data.url && (
            <a
              className="inline-flex items-center gap-1 rounded-full border px-3 py-1"
              href={data.url}
              target="_blank"
              rel="noreferrer"
            >
              <Globe className="h-4 w-4" /> Portfolio
            </a>
          )}
          {data.location && (
            <span className="inline-flex items-center gap-1 rounded-full border px-3 py-1">
              <MapPin className="h-4 w-4" /> {data.location}
            </span>
          )}
          {onDownload && <DownloadButton href="/suyog_cv_sept.pdf" />}
        </div>
      </div>

      {(data.summary || data.profiles?.length) && (
        <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          {data.summary && (
            <p className="max-w-3xl text-sm opacity-90">{data.summary}</p>
          )}
          {data.profiles && (
            <div className="flex flex-wrap gap-2 text-sm">
              {data.profiles.map((p) => (
                <a
                  key={p.url}
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border px-3 py-1"
                >
                  {p.network.toLowerCase() === "github" && (
                    <Github className="h-4 w-4" />
                  )}
                  {p.network.toLowerCase() === "linkedin" && (
                    <Linkedin className="h-4 w-4" />
                  )}
                  {p.network}
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
