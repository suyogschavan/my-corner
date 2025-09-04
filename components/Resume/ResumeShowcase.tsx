"use client";
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, FolderGit2, GraduationCap, Award, Cpu } from "lucide-react";
import Header from "./Header";
import ExperienceTimeline from "./ExperienceTimeline";
import ProjectsGrid from "./ProjectsGrid";
import SkillsGrid from "./SkillsGrid";
import EducationList from "./EducationList";
import CertificationsList from "./CertificationsList";
import SectionHeader from "./SectionHeader";
import { ResumeData } from "./types";
import { demoData } from "./demoData";

export default function ResumeShowcase({
  data = demoData,
  onDownload,
}: {
  data?: ResumeData;
  onDownload?: () => void;
}) {
  const hasExperience = data.experience && data.experience.length > 0;
  const hasProjects = data.projects && data.projects.length > 0;
  const hasSkills = data.skills && data.skills.length > 0;
  const hasEducation = data.education && data.education.length > 0;
  const hasCerts = data.certifications && data.certifications.length > 0;
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="mx-auto max-w-5xl space-y-10 p-4 md:p-8 bg-white text-black dark:bg-black dark:text-white"
    >
      <Header data={data.basics} onDownload={onDownload} />

      {hasExperience && (
        <div>
          <SectionHeader title="Experience" icon={<Briefcase className="h-5 w-5" />} />
          <ExperienceTimeline items={data.experience!} />
        </div>
      )}

      {hasProjects && (
        <div>
          <SectionHeader title="Projects" icon={<FolderGit2 className="h-5 w-5" />}/>
          <ProjectsGrid items={data.projects!} />
        </div>
      )}

      {hasSkills && (
        <div>
          <SectionHeader title="Technical Skills"  icon={<Cpu className="h-5 w-5" />} />
          <SkillsGrid items={data.skills!} />
        </div>
      )}

      {hasEducation && (
        <div>
          <SectionHeader title="Education"  icon={<GraduationCap className="h-5 w-5" />}/>
          <EducationList items={data.education!} />
        </div>
      )}

      {hasCerts && (
        <div>
          <SectionHeader title="Certifications" icon={<Award className="h-5 w-5" />}/>
          <CertificationsList items={data.certifications!} />
        </div>
      )}

      <div className="pb-6 text-center text-xs opacity-60">
        Last updated automatically when data changes ✨
      </div>
    </motion.section>
  );
}
