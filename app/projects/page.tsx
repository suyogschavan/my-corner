import MainLayout from "@/components/layouts/MainLayout";
import ProjectParalax from "@/components/ProjectParalax";
import { ScrollProvider } from "@/components/Providers/ScrollProvider";
import React from "react";

const page = () => {
  return (
    <div>
      <MainLayout>
        <ProjectParalax />
      </MainLayout>
    </div>
  );
};

export default page;
