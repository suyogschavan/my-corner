"use client";

import { LinkButton } from "@dlarroder/playground";
import Link from "next/link";
import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

const CustomLink = ({
  href,
  download,
  ...rest
}: DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>) => {
  const isInternalLink = href && href.startsWith("/");
  const isAnchorLink = href && href.startsWith("#");

  const isFileDownload = download || (href && href.endsWith(".pdf"));

  // If it's a file download, skip Next.js <Link>
  if (isFileDownload) {
    return (
      <LinkButton href={href} download={download} {...rest} />
    );
  }

  if (isInternalLink) {
    return (
      <Link href={href} legacyBehavior>
        <LinkButton {...rest} />
      </Link>
    );
  }

  if (isAnchorLink) {
    return <LinkButton href={href} {...rest} />;
  }

  return (
    <LinkButton
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      download={download}   
      {...rest}
    />
  );
};

export default CustomLink;
