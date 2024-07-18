import React from "react";
import TimeLineElement from "./TimeLineElement";

const TimeLine = () => {
  return (
    <>
      <h1 className="font-extrabold text-xl pb-5">Timeline</h1>
      <TimeLineElement year="2020">
        Started a job as a Software Developer at Aphex Hi
      </TimeLineElement>
    </>
  );
};

export default TimeLine;
