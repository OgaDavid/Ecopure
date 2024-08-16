"use client";

import Image from "next/image";
import { Tabs } from "../components/ui/tabs";

export function EquipmentsTab() {
  const tabs = [
    {
      title: "Vacuum Cleaners",
      value: "Vacuum Cleaners",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#6ECA31]">
          <p>
            High-efficiency vacuums designed for heavy-duty use in various
            environments.{" "}
          </p>
          <DummyContent img="https://res.cloudinary.com/dvsazgp6m/image/upload/v1723803745/industrial-vacuum_v65qhb.jpg" />
        </div>
      ),
    },
    {
      title: "Floor Scrubbers",
      value: "floor Scrubbers",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#6ECA31]">
          <p>
            Innovative scrubbing systems that leave floors spotless and
            sanitized.
          </p>
          <DummyContent img="https://res.cloudinary.com/dvsazgp6m/image/upload/v1723803771/floor-scrubbers_xbxrgi.png" />
        </div>
      ),
    },
    {
      title: "Pressure Washers",
      value: "pressure Washers",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#6ECA31]">
          <p>
            Powerful machines for deep cleaning outdoor areas and surfaces.{" "}
          </p>
          <DummyContent img="https://res.cloudinary.com/dvsazgp6m/image/upload/v1723803834/pressure-washer_fhl4mt.jpg" />
        </div>
      ),
    },
    {
      title: "Disinfecting Solutions",
      value: "Disinfecting Solutions",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#6ECA31]">
          <p>
            Equipment specifically designed for thorough disinfecting in
            healthcare and commercial settings.{" "}
          </p>
          <DummyContent img="https://res.cloudinary.com/dvsazgp6m/image/upload/v1723803859/disinfecting-solutions_jusnqj.jpg" />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[30rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = ({ img }: { img: string }) => {
  return (
    <Image
      src={img}
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-bottom h-[60%]  md:h-[80%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
