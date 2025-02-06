import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href={"/"}>
      <h1
        className={twMerge(
          "text-2xl text-white flex border-none font-bold relative group overflow-hidden duration-300",
          className
        )}
      >
      <span>Food</span><span className="text-orange-500">tuck</span>
        <span className="absolute w-full h-px bg-orange-500 inline-block left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 duration-300" />
      </h1>
    </Link>
  );
};
