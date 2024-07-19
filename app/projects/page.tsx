import MainLayout from "@/components/layouts/MainLayout";
import ProjectParalax from "@/components/ProjectParalax";
import Projects from "@/components/Projects/Projects";
import { ScrollProvider } from "@/components/Providers/ScrollProvider";
import React from "react";

const page = () => {
  return (
    <div>
      <MainLayout>
        <ProjectParalax />
        {/* <hr />
        <hr />
        <hr />
        <hr /> */}
        <Projects />
      </MainLayout>
    </div>
  );
};

export default page;
