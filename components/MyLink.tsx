import Link from "next/link";
import React from "react";

const MyLink = ({ href, children }: { href: string; children: string }) => {
  return (
    <Link
      href={href}
      className="underline-magical text-md w-max cursor-pointer sm:text-lg md:text xl:text-xl"
    >
      {children}
    </Link>
  );
};

export default MyLink;
