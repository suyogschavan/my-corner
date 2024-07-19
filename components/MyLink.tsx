import React from "react";
import { LinkPreview } from "./ui/LinkPreview";
import Link from "./Link";

const MyLink = ({ href, children }: { href: string; children: string }) => {
  return (
    <LinkPreview url={href}>
      <Link href={href}>{children}</Link>
    </LinkPreview>
  );
};

export default MyLink;
