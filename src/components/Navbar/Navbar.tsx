import Image from "next/image";
import React from "react";
import NavList from "./NavList";
import { Button } from "../ui/button";
import { Sparkles } from "lucide-react";
import MobileNav from "./MobileNav/";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-white py-5 max-[1100px]:px-6 px-[100px]">
      <div className="relative flex items-center justify-between">
        <Image
          className="w-32 md:w-[230px]"
          src="https://res.cloudinary.com/dvsazgp6m/image/upload/v1723802452/Logo_wpvxug.svg"
          alt="logo"
          width={164}
          height={47}
        />
        {/* <Image
          src={"/images/logo-small.svg"}
          alt="logo"
          width={85}
          height={26}
          className="sm:hidden w-32"
        /> */}
        <div className="max-[1000px]:hidden">
          <NavList />
        </div>
        <Link href="#contact">
          <Button className="bg-[#6ECA31] max-[1000px]:hidden transition-all duration-500 ease-in-out group flex gap-2 px-8 rounded-lg hover:bg-[#4D4D4D] py-6 text-lg font-semibold">
            Lets Talk
            <Sparkles
              className="group-hover:rotate-90 transition-all duration-500 ease-in-out"
              size={24}
            />
          </Button>
        </Link>
        <div className="min-[1000px]:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
