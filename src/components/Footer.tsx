"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";

export default function Footer() {
  return (
    <div className="flex flex-col items-end w-fit">
      <div className="flex flex-col items-end">
        <div className="flex items-center text-center flex-col justify-between">
          <Image
            className="w-[230px]"
            src="/images/logo.svg"
            alt="logo"
            width={164}
            height={47}
          />
          <p className="text-sm md:text-2xl w-3/4 ml-8">
            Trust Ecopure to provide innovative cleaning solutions that meet
            your needs and align together, we can create cleaner, safer
            environments while preserving our planet with your values.
          </p>
        </div>
      </div>
    </div>
  );
}
