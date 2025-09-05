import React from "react";

const SectionHeader: React.FC<{ title: string; icon?: React.ReactNode }> = ({
  title,
  icon,
}) => (
  <div className="mb-6 flex items-center gap-3">
    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border">
      {icon}
    </div>
    <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
  </div>
);

export default SectionHeader;
