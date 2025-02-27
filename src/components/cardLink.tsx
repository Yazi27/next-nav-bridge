// app/components/CardLink.tsx
"use client";

import { startCardNavigation } from "@/lib/navigationState";
import Link from "next/link";

import { ReactNode } from "react";

interface CardLinkProps {
  href: string;
  children: ReactNode;
}

export default function CardLink({ href, children }: CardLinkProps) {
  const handleClick = async () => {
    await new Promise((resolve) => setTimeout(resolve, 50));
    startCardNavigation();
  };

  return (
    <Link href={href} onClick={handleClick}>
      {children}
    </Link>
  );
}
