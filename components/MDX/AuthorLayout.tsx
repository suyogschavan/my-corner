import Image from "@/components/Image";
import { ReactNode } from "react";

// interface Props {
//   children: ReactNode;
//   author: string;
//   occupation: string;
//   company: string;
//   //   content:
// }

export default function AuthorLayout({
  author,
  occupation,
  company,
  children,
  avatar,
}: {
  author: string;
  occupation: string;
  company: string;
  children: React.ReactNode;
  avatar: string;
}) {
  return (
    <div className="pt-8">
      <div className="mb-8 flex flex-col-reverse items-center justify-between sm:flex-row sm:items-center">
        <div className="text-center sm:text-left">
          <h1 className="text-xl font-bold md:text-3xl lg:text-4xl">
            Suyog Chavan
          </h1>
          <h2 className="text-sm font-normal md:text-base">
            {occupation} <span className="font-semibold">{company}</span>
          </h2>
        </div>
        <div>
          <Image
            alt="Suyog Chavan"
            height={130}
            width={130}
            src={avatar || ""}
            className="rounded-full object-scale-down grayscale animate-animated animate__rollIn"
          />
        </div>
      </div>
      <div className="prose max-w-none pb-8 text-justify text-sm dark:prose-dark md:text-lg xl:col-span-2">
        {children}
      </div>
    </div>
  );
}
