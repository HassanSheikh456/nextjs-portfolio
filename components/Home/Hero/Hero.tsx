"use client";
import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import ParticleHero from "./ParticleBackground";

const Hero = () => {
  return (
    <div className="relative h-screen flex text-white flex-col justify-center items-center overflow-hidden">
      <ParticleHero />
      <div className="relative z-10 flex flex-col items-center">
        <Image
          src="/images/asas.png"
          alt="Hero Image"
          width={150}
          height={150}
          className="rounded-full border-8 border-[#0c0c48aa]"
          data-aos="fade-up"
        />
        <h1 data-aos="fade-up" data-aos-delay="200" className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide">
          Creating web products, <br /> brands,
          <span className="text-cyan-200"> and experiences.</span>
        </h1>
        <h2  data-aos="fade-up" data-aos-delay="400" className="text-sm mt-5 px-2 text-center sm:text-2xl font-medium flex items-center">
          Hi ! I&apos;m Hassan - A Passionate
          <span className="text-cyan-200 font-bold">
            <Typewriter
              options={{
                strings: [
                  " Front end Developer",
                  " Back end Developer",
                  " Web Developer",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                wrapperClassName: "pl-2",
              }}
            />
          </span>
        </h2>
        <button  data-aos="fade-up" data-aos-delay="600" className="mt-6 px-10 py-4 hover:bg-blue-900 bg-blue-800 transition-all duration-500 cursor-pointer rounded-full ">
          <span >See my work</span>
          <BsArrowRight className="w-5 h-5 ml-2 inline-block" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
