import Image from "next/image";
import React from "react";
import NavList from "./NavList";
import { Button } from "../ui/button";
import { Sparkles } from "lucide-react";
import MobileNav from "./MobileNav/";

const Navbar = () => {
  return (
    <div className="bg-white py-5 max-[1100px]:px-6 px-[100px]">
      <div className="relative flex items-center justify-between">
        <Image
          className="max-sm:hidden w-[230px]"
          src="/images/logo.svg"
          alt="logo"
          width={164}
          height={47}
        />
        <Image
          src={"/images/logo-small.svg"}
          alt="logo"
          width={85}
          height={26}
          className="sm:hidden w-32"
        />
        <div className="max-[1000px]:hidden">
          <NavList />
        </div>
        <Button className="bg-[#6ECA31] max-[1000px]:hidden transition-all duration-500 ease-in-out group flex gap-2 px-8 rounded-lg hover:bg-[#4D4D4D] py-6 text-lg font-semibold">
          Lets Talk
          <Sparkles
            className="group-hover:rotate-90 transition-all duration-500 ease-in-out"
            size={24}
          />
        </Button>
        <div className="min-[1000px]:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
