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
      <div className="timeline-element font-extrabold">{year}</div>
      <ul className="list-disc pl-7 pt-3 text-sm font-extralight">
        <li className="pb-1">{children}</li>
      </ul>
      <hr />
    </div>
  );
};

export default TimeLineElement;
