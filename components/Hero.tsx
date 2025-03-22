"use client";
import React, { useEffect, useState } from "react";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { Link } from "react-scroll";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); 
  }, []);

  return (
    <section id="/hero"  className=" py-10 pb-0 pt-0 bg-background relative flex items-center justify-center min-h-screen overflow-hidden"> 
      <div className="absolute py-10 inset-0 flex items-center justify-center w-full h-full">
        {/* Group 1: Red and White Spotlights Together */}
        <Spotlight
          className={cn(
            "absolute top-[-10%] left-[50%] transform -translate-x-1/2 rotate-[30deg] z-10 filter opacity-90",
            isVisible ? "transition-all duration-500" : "opacity-0",
            "w-[400px] h-[800px] sm:w-[250px] sm:h-[500px] md:w-[300px] md:h-[600px] lg:w-[400px] lg:h-[800px]"
          )}
          fill="red"
        />
        <Spotlight
          className={cn(
            "absolute top-[-10%] left-[50%] transform -translate-x-1/2 rotate-[50deg] z-10 filter opacity-80",
            isVisible ? "transition-all duration-500" : "opacity-0",
            "w-[400px] h-[800px] sm:w-[250px] sm:h-[500px] md:w-[300px] md:h-[600px] lg:w-[400px] lg:h-[800px]"
          )}
          fill="white"
        />

        {/* Group 2: Red and White Spotlights Together */}
        <Spotlight
          className={cn(
            "absolute top-[-10%] left-[50%] transform -translate-x-1/2 rotate-[70deg] z-10 filter opacity-70",
            isVisible ? "transition-all duration-500" : "opacity-0",
            "w-[400px] h-[800px] sm:w-[250px] sm:h-[500px] md:w-[300px] md:h-[600px] lg:w-[400px] lg:h-[800px]"
          )}
          fill="red"
        />
        <Spotlight
          className={cn(
            "absolute top-[-10%] left-[50%] transform -translate-x-1/2 rotate-[90deg] z-10 filter opacity-60",
            isVisible ? "transition-all duration-500" : "opacity-0",
            "w-[400px] h-[800px] sm:w-[250px] sm:h-[500px] md:w-[300px] md:h-[600px] lg:w-[400px] lg:h-[800px]"
          )}
          fill="white"
        />

        {/* Group 3: Red and White Spotlights Together */}
        <Spotlight
          className={cn(
            "absolute top-[-10%] left-[50%] transform -translate-x-1/2 rotate-[110deg] z-10 filter opacity-50",
            isVisible ? "transition-all duration-500" : "opacity-0",
            "w-[400px] h-[800px] sm:w-[250px] sm:h-[500px] md:w-[300px] md:h-[600px] lg:w-[400px] lg:h-[800px]"
          )}
          fill="red"
        />
        <Spotlight
          className={cn(
            "absolute top-[-10%] left-[50%] transform -translate-x-1/2 rotate-[130deg] z-10 filter opacity-40",
            isVisible ? "transition-all duration-500" : "opacity-0",
            "w-[400px] h-[800px] sm:w-[250px] sm:h-[500px] md:w-[300px] md:h-[600px] lg:w-[400px] lg:h-[800px]"
          )}
          fill="white"
        />
      </div>

      {/* Background grid */}
      <div className="absolute top-0 left-0 flex w-full h-full items-center justify-center bg-white dark:bg-background">
        <div
            className={cn(
            "absolute inset-0",
            "[background-size:30px_30px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_0.1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_0.1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_0.1px),linear-gradient(to_bottom,#262626_1px,transparent_0.1px)]",
            "opacity-30" 
            )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_15%,black)] dark:bg-background" />
      </div>

      {/* Text content */}
      <div className="flex justify-center relative z-10">
        <div className="flex flex-col items-center justify-center text-center px-4 sm:px-0">
          <h2 className="uppercase tracking-widest text-xs sm:text-sm md:text-xl text-foreground">
            A Portfolio made with Next.js, Tailwind and Framer-Motion
          </h2>
          <TextGenerateEffect
            className="text-center text-[30px] sm:text-4xl md:text-5xl lg:text-7xl"
            words="Welcome to my Portfolio"
          />
          <p className="text-center md:tracking-wider mb-5 text-sm md:text-lg lg:text-1xl p-1">
            Hello, I&apos;m Klevis. <br/> An up and coming Full-Stack Developer based in Norway.
          </p>
          <Link
            to="/recprojects" 
            smooth
            >
          <MagicButton 
            title="Show my work"
            icon={<FaLocationArrow />}
            position="right"
          />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
