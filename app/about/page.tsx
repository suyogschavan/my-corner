import Link from "@/components/Link";
import AuthorLayout from "@/components/MDX/AuthorLayout";
import TimeLine from "@/components/TimeLine";
import MainLayout from "@/layouts/MainLayout";

export const metadata = {
  title: "About - Suyog Chavan",
  description: "About me - Suyog Chavan",
};

export default function About() {
  return (
    <MainLayout>
      <AuthorLayout
        author="Suyog Chavan"
        avatar="/static/images/about/pro.gif"
        company="twentyNineth"
        occupation="Full stack developer Intern"
      >
        I am currently a Fullstack Developer intern at
        <Link href="#"> TwentyNineth</Link>. I was previously a Software
        Developer Intern at CodixLabs where I mostly used Node.js to create
        back-end APIs for the front-ends to consume. Now I am more focused on
        building fully functional browser extensions and web automations.
      </AuthorLayout>
      <TimeLine></TimeLine>
    </MainLayout>
  );
}
