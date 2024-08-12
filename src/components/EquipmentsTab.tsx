"use client";

import Image from "next/image";
import { Tabs } from "../components/ui/tabs";

export function EquipmentsTab() {
  const tabs = [
    {
      title: "Industrial Vacuum Cleaners",
      value: "industrial Vacuum Cleaners",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-[#6ECA31]">
          <p>
            High-efficiency vacuums designed for heavy-duty use in various
            environments.{" "}
          </p>
          <DummyContent img="/images/industrial-vacuum.jpeg" />
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
          <DummyContent img="/images/floor-scrubbers.png" />
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
          <DummyContent img="/images/pressure-washer.jpg" />
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
          <DummyContent img="/images/disinfecting-solutions.jpeg" />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start">
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
