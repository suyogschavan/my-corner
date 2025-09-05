import Link from "@/components/Link";
import AuthorLayout from "@/components/MDX/AuthorLayout";
import MouseImageTrail from "@/components/MouseImageTrail";
import MyLink from "@/components/MyLink";
import TimeLine from "@/components/TimeLine";
import { LinkPreview } from "@/components/ui/LinkPreview";
import MainLayout from "@/layouts/MainLayout";
import { FiMousePointer } from "react-icons/fi";

export const metadata = {
  title: "About - Suyog Chavan",
  description: "About me - Suyog Chavan",
};

export default function About() {
  return (
    <>
      <MainLayout>
        <AuthorLayout
          author="Suyog Chavan"
          avatar="/static/images/about/pro.gif"
          company="twentyNineth"
          occupation="Full stack developer Intern"
        >
          I am a final year BE in Computer Engineering student at{" "}
          <MyLink href="http://www.sinhgad.edu/#images">SCOE.</MyLink> {" "}
          {/* I am */}
          {/* also a Fullstack developer Intern intern at{" "}
          <MyLink href="https://www.linkedin.com/in/suyogchavan/">
            TwentyNineth. */}
          {/* </MyLink>{" "} */}
          I was previously a Software Developer Intern at{" "}
          {/* <MyLink href="https://www.youtube.com/channel/UCmOvBRxKRCDpYBSKwvFd-Ug/videos"> */}
          <MyLink href="https://www.linkedin.com/in/suyogchavan">
          TwentyNineth
          </MyLink>{" "}
          where I mostly used Node.js to create back-end APIs for the front-ends
          to consume. Now I am more focused on building fully functional browser
          extensions and web automations.
        </AuthorLayout>
        <TimeLine></TimeLine>
      </MainLayout>
      <MouseImageTrail
        renderImageBuffer={50}
        rotationRange={25}
        images={[
          "/static/images/anime.gif",
          "/static/images/swim.jpg",
          "/static/images/chess.webp",
          "/static/images/tracking.jpg",
          "/static/images/music.webp",
          "/static/images/reading.gif",
          "/static/images/cricket.webp",
          "/static/images/gamer.jpg",
          "/static/images/running.jpg",
          "/static/images/biking.jpg",
        ]}
      >
        <section className="grid h-screen place-content-center">
          <p className="flex items-center gap-2 text-3xl font-bold uppercase">
            <FiMousePointer />
            <span>My Hobbies</span>
          </p>
        </section>
      </MouseImageTrail>
    </>
  );
}
