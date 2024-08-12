import Image from "next/image";
import React from "react";
import NavList from "./NavList";
import { Button } from "../ui/button";
import { Sparkles } from "lucide-react";

const Navbar = () => {
  return (
    <div className="bg-white py-5 px-[100px]">
      <div className="flex items-center justify-between">
        <Image
          className="w-[230px]"
          src="/images/logo.svg"
          alt="logo"
          width={164}
          height={47}
        />
        <NavList />
        <Button className="bg-[#6ECA31] flex gap-2 px-8 rounded-lg hover:bg-[#4D4D4D] py-6 text-lg font-semibold">
          Lets Talk
          <Sparkles size={24} />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
