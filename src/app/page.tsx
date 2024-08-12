import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import Image from "next/image";

export default function LandingPage() {
  return (
    <main>
      {/* Home Section */}
      {/* ==== mobile ==== */}
      <section>
        <div className="min-[630px]:hidden flex items-center pt-8 text-center justify-center">
          <div className="w-[600px] flex flex-col items-center px-16">
            <p className="border-2 mb-2 rounded-full border-[#6ECA31] p-2 text-xs font-medium">
              Clean. Sustainable. Powerful.
            </p>
            <h1 className="text-3xl font-bold">
              Innovative Cleaning{" "}
              <span className="text-[#6ECA31]">Solutions </span>for a
              Sustainable Future.
            </h1>
            <p className="pt-4 text-sm font-medium">
              We provide state-of-the-art cleaning solutions and equipment
              tailored to the demands of various industries.
            </p>
            <Button className="bg-[#6ECA31] mt-4 transition-all duration-500 ease-in-out group flex gap-2 px-8 rounded-lg hover:bg-[#4D4D4D] py-6 text-lg font-semibold">
              Explore Our Solutions
              <Sparkles
                className="group-hover:rotate-90 transition-all duration-500 ease-in-out"
                size={24}
              />
            </Button>
            <Image
              src="/images/hero-small.png"
              alt="Hero"
              width={1000}
              height={406}
              className="rounded-[16px] mt-6"
            />
          </div>
        </div>
        <div className="max-[630px]:hidden max-[1100px]:mx-6 mx-[70px] h-[430px] object-contain flex items-center rounded-[16px] bg-hero-background">
          <div className="w-[600px] px-16">
            <p className="pb-1 text-xs font-medium">
              Clean. Sustainable. Powerful.
            </p>
            <h1 className="text-5xl leading-[53px] font-bold">
              Innovative Cleaning{" "}
              <span className="text-[#6ECA31]">Solutions </span>for a
              Sustainable Future.
            </h1>
            <p className="pt-4 font-medium">
              We provide state-of-the-art cleaning solutions and equipment
              tailored to the demands of various industries.
            </p>
            <Button className="bg-[#6ECA31] mt-4 transition-all duration-500 ease-in-out group flex gap-2 px-8 rounded-lg hover:bg-[#4D4D4D] py-6 text-lg font-semibold">
              Explore Our Solutions
              <Sparkles
                className="group-hover:rotate-90 transition-all duration-500 ease-in-out"
                size={24}
              />
            </Button>
          </div>
        </div>
      </section>

      {/* About US */}
      <section></section>
    </main>
  );
}
