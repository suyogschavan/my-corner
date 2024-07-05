import ProjectParalax from "@/components/ProjectParalax";
import { ScrollProvider } from "@/components/Providers/ScrollProvider";
import React from "react";

const page = () => {
  return (
    <div>
      <ScrollProvider>
        <ProjectParalax />
      </ScrollProvider>
    </div>
  );
};

export default page;
