import React from "react";

const TimeLineElement = ({
  year,
  children,
}: {
  year: string;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <div className="timeline-element font-extrabold text-2xl pt-5">
        {year}
      </div>
      <ul className="list-disc pl-7 pt-4 pb-6 md:text-lg sm:text-sm  ">
        {children}
      </ul>
      <hr className="" />
    </div>
  );
};

export default TimeLineElement;
