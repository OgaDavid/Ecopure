import Link from "next/link";
import React from "react";

const NavItem = ({ label, link }: { label: string; link: string }) => {
  return (
    <Link
      className={`text-[#4D4D4D] text-base font-medium active:text-[#6ECA31]`}
      href={link}
    >
      {label}
    </Link>
  );
};

const NavList = () => {
  return (
    <ul className="flex items-center gap-7">
      <li>
        <NavItem label="Home" link="/" />
      </li>
      <li>
        <NavItem label="About us" link="#about" />
      </li>
      <li>
        <NavItem label="Equipments" link="#equipments" />
      </li>
      {/* <li>
        <NavItem label="Initiatives" link="#initiatives" />
      </li> */}
      <li>
        <NavItem label="Contact us" link="#contact" />
      </li>
    </ul>
  );
};

export default NavList;
