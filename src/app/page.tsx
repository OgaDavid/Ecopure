import { EquipmentsTab } from "@/components/EquipmentsTab";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main>
      {/* Home Section */}
      {/* ==== Mobile ==== */}
      <section>
        <div className="min-[630px]:hidden object-cover object-left-bottom flex items-center pt-8 text-center justify-center">
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
            <Link href="#equipments">
              <Button className="bg-[#6ECA31] mt-4 transition-all duration-500 ease-in-out group flex gap-2 px-8 rounded-lg hover:bg-[#4D4D4D] py-6 text-lg font-semibold">
                Explore Our Solutions
                <Sparkles
                  className="group-hover:rotate-90 transition-all duration-500 ease-in-out"
                  size={24}
                />
              </Button>
            </Link>
            <Image
              src="/static/images/cleaning-services.png"
              alt="Hero"
              width={1000}
              height={406}
              className="rounded-[16px] mt-6 h-[300px] w-[500px] object-cover"
            />
          </div>
        </div>
        {/* Desktop */}
        <div className="max-[630px]:hidden max-[1100px]:mx-6 mx-[70px] h-[430px] flex items-center rounded-[16px] bg-hero-background">
          <div className="w-[600px] px-16">
            <p className="pb-1 text-xs font-medium">
              Clean. Sustainable. Powerful.
            </p>
            <h1 className="max-[1024px]:text-3xl text-5xl leading-[53px] font-bold">
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
          <Image
            src="/static/images/cleaning-services.png"
            alt="hero"
            width={2120}
            height={1192}
            className="rounded-[16px] object-cover w-[500px] h-[400px]"
          />
        </div>
      </section>

      {/* About US */}
      <section id="about" className="pt-36 px-9 md:px-16">
        <div className="flex items-center flex-col gap-2 text-center">
          <h2 className="text-4xl md:text-6xl font-bold">About us</h2>
          <p className="text-sm md:text-lg max-w-[500px] font-medium text-center">
            We deliver{" "}
            <span className="text-[#6ECA31]">high-quality products</span>{" "}
            designed to ensure cleanliness and safety in workplaces around the
            globe.
          </p>
        </div>
        <div className="mt-16">
          <div className="md:flex max-md:flex-col gap-y-3 items-center justify-between">
            <div className="text-left">
              <h2 className="text-3xl max-md:text-center md:text-5xl font-bold mb-6">
                Our Vision
              </h2>
              <p className="md:max-w-[500px] max-md:text-center font-medium text-base md:text-lg">
                Ecopure envisions a world where cleanliness and environmental
                consciousness go hand in hand. We are dedicated to making a
                positive impact on the environment, one clean space at a time.{" "}
              </p>
            </div>
            <Image
              src="/static/images/man-cleaning-table.jpg"
              alt="image"
              width={600}
              height={224}
              className="rounded-[5px] max-md:mt-6"
            />
          </div>
        </div>

        <div className="mt-16 md:mt-32">
          <div className="md:flex max-md:flex-col gap-3 items-center justify-between">
            <div className="text-left">
              <h2 className="text-3xl max-md:text-center md:text-5xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="md:max-w-[500px] max-md:text-center font-medium text-base md:text-lg">
                Our mission at Ecopure is to be a leader in the cleaning
                equipment industry by providing innovative, eco-friendly
                solutions that enhance hygiene standards while promoting
                sustainability.
              </p>
            </div>
            <Image
              src="/static/images/smiling-man.jpg"
              alt="image"
              width={600}
              height={224}
              className="rounded-[5px] max-md:mt-6"
            />
          </div>
        </div>
      </section>

      <section id="equipments" className="pt-36 px-6 md:px-16">
        <div className="flex items-center flex-col  gap-2 text-center">
          <h2 className="text-4xl md:text-6xl font-bold">
            Explore Our Equipments
          </h2>
          <p className="md:text-lg text-base pt-2 max-w-[500px] font-medium text-center">
            Explore our diverse range of cleaning equipments
          </p>
        </div>
        <div className="mt-16">
          <EquipmentsTab />
        </div>
      </section>

      <section id="contact" className="pt-40 px-16">
        <div className="flex items-center justify-center text-center">
          <h2 className="text-4xl flex items-center gap-1 justify-center md:text-6xl font-bold text-center">
            Contact Us <Sparkles size={28} className="text-[#6ECA31]" />
          </h2>
        </div>
        <div className="flex max-md:flex-col items-center justify-between">
          <div className="max-md:mt-10">
            <h3 className="text-2xl md:text-4xl font-bold">Get In Touch</h3>
            <p className="max-w-[450px] pt-4 md:pt-8">
              Have questions or need more information? Our dedicated team is
              here to help. Reach out to us via the contact form or directly
              through our email and phone.
            </p>
            <div className="mt-12 font-medium text-xl">
              <p className="flex gap-2 items-center">
                <Mail width={24} height={24} className="text-[#6ECA31]" />
                Email: <span className="text-[#6ECA31]">info@ecopure.com</span>
              </p>
              <br />
              <p className="flex gap-2 items-center">
                <Phone width={24} height={24} className="text-[#6ECA31]" />
                Phone: <span className="text-[#6ECA31]">+1 800 123 4567</span>
              </p>
            </div>
          </div>
          <Image
            src="/static/images/contact.jpeg"
            width={626}
            height={626}
            alt="contact"
            className="rounded-[16px] w-[500px] max-md:mt-6"
          />
        </div>
      </section>

      <footer className="mt-24">
        <Footer />
      </footer>
    </main>
  );
}
