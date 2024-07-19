import React from "react";
import TimeLineElement from "./TimeLineElement";
import MyLink from "./MyLink";

const TimeLine = () => {
  return (
    <>
      <h1 className="font-extrabold text-3xl pb-5">Timeline</h1>
      <TimeLineElement year="2024">
        <li className="pb-1">
          Started working as a full stack intern at{" "}
          <MyLink href="https://www.linkedin.com/in/suyogchavan">
            TwentyNineth
          </MyLink>{" "}
          solutions pvt ltd
        </li>
        <li className="pb-1">
          Leared how to create web-extensions using vanilla javascript
        </li>
        {/* <li className="pb-1">Started learning react</li> */}
        <li className="pb-1">
          Solved 200 problems on{" "}
          <MyLink href="https://leetcode.com/u/Suyog8/">Leetcode</MyLink>{" "}
        </li>
        <li className="pb-1">
          Participated in{" "}
          <MyLink href="https://gssoc.girlscript.tech/">GSSoC</MyLink>{" "}
        </li>
        <li className="pb-1">
          Worked on owesome projects such as{" "}
          <MyLink href="https://github.com/suyogschavan/G-Insight">
            G-insight
          </MyLink>{" "}
          and{" "}
          <MyLink href="https://github.com/suyogschavan/my-corner">
            corner
          </MyLink>
        </li>
      </TimeLineElement>
      <TimeLineElement year="2023">
        <li className="pb-1">
          Started doing{" "}
          <MyLink href="https://leetcode.com/u/Suyog8/">Leetcode</MyLink>{" "}
        </li>
        <li className="pb-1">Started learning Next.js </li>
        <li className="pb-1">
          Participated in some national level hackathons such as{" "}
          <MyLink href="https://www.sih.gov.in/">SIH</MyLink> and{" "}
          <MyLink href="https://kavach.mic.gov.in/">Kavach</MyLink>{" "}
        </li>
        <li className="pb-1">
          Did some open-source contributions in{" "}
          <MyLink href="https://hacktoberfest.com/">hacktoberfest23</MyLink>{" "}
        </li>
        <li className="pb-1">Build some FullStack Projects</li>
      </TimeLineElement>
      <TimeLineElement year="2022">
        <li className="pb-1">
          Secured direct second year addmission in{" "}
          <MyLink href="http://www.sinhgad.edu/#images">SCOE </MyLink> for BE in
          Computer Science & Eng.
        </li>
        <li className="pb-1">
          Completed software developer internship from CodixLabs
        </li>
        <li className="pb-1">
          Secured 91% in final year of Computer engineering Diploma from{" "}
          <MyLink href="https://mitwpu.edu.in/schools/faculty-of-engineering-and-technology/school-of-engineering-and-technology/department-of-polytechnic-skill-development">
            MIT Polytechnic
          </MyLink>
        </li>
        <li className="pb-1">Started learning Node.js and React</li>
        <li className="pb-1">Build my first portfolio website</li>
      </TimeLineElement>
      <TimeLineElement year="2021">
        <li className="pb-1">
          Started learning about Git and{" "}
          <MyLink href="https://github.com/suyogschavan">GitHub </MyLink>
        </li>
        <li className="pb-1">
          Started learning about python and machine learning
        </li>
        <li className="pb-1">
          Successfully completed Diploma{" "}
          <MyLink href="https://github.com/suyogschavan/Caps-Project-Emotion-Classification-using-EEG">
            capstone project
          </MyLink>
        </li>
        <li className="pb-1">Started learning Node.js and React</li>
        <li className="pb-1">
          Build my first{" "}
          <MyLink href="https://suyogschavan.github.io/">
            portfolio website
          </MyLink>{" "}
        </li>
      </TimeLineElement>
      <TimeLineElement year="2020">
        <li className="pb-1">Started learning Java</li>
        <li className="pb-1">
          Started learning about web development from youtube
        </li>
        <li className="pb-1">
          Started android development with{" "}
          <MyLink href="https://developer.android.com/studio">
            android studio
          </MyLink>
        </li>
        <li className="pb-1">
          Secured rank 2 in (Dist level) Bug Hunting and Fixing challange
        </li>
      </TimeLineElement>
      <TimeLineElement year="2019">
        <li className="pb-1">Completed 10th with 81%</li>
        <li className="pb-1">
          Secured admission in{" "}
          <MyLink href="https://mitwpu.edu.in/schools/faculty-of-engineering-and-technology/school-of-engineering-and-technology/department-of-polytechnic-skill-development">
            MIT Polytechnic
          </MyLink>
          , Pune
        </li>
      </TimeLineElement>
    </>
  );
};

export default TimeLine;
