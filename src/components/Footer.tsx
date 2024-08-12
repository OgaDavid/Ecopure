"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";

export default function Footer() {
  return (
    <div className="flex flex-col items-end w-fit">
      <div className="relative w-full h-px mb-5">
        <div className="relative z-10 h-10 w-full top-[-40px]"></div>
        <svg className="absolute w-full h-[500px] top-[-250px]">
          <path className="stroke-current text-[#6ECA31] stroke-[1px] fill-none"></path>
        </svg>
      </div>
      <div className="flex flex-col items-end">
        <div className="flex items-center text-center flex-col justify-between">
          <Image
            className="max-sm:hidden w-[230px]"
            src="/images/logo.svg"
            alt="logo"
            width={164}
            height={47}
          />
          <p className="text-2xl w-3/4 ml-8">
            Trust Ecopure to provide innovative cleaning solutions that meet
            your needs and align. Together, we can create cleaner, safer
            environments while preserving our planet. with your values.
          </p>
        </div>
      </div>
    </div>
  );
}
