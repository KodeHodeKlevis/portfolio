"use client";

import React, { useEffect, useState } from "react";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Ensure animation runs after the component is mounted
  }, []);

  return (
    <section className="pb-24 pt-36 bg-background relative flex items-center justify-center h-screen overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center w-full h-full">
        {/* Left Spotlight (Red) */}
        <Spotlight
        className={cn(
            "absolute top-[30%] left-0 lg:left-[450px] md:left-[40px] transform rotate-[30deg] z-10 filter opacity-90",
            isVisible ? "transition-all duration-500" : "opacity-0",
            "w-[400px] h-[400px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]" // Increased size for larger spotlights
        )}
        fill="white"
        />

        {/* Right Spotlight (Blue, on the right of Red) */}
        <Spotlight
        className={cn(
            "absolute top-[30%] right-[30px] lg:right-[500px] md:right-[50px] transform rotate-[40deg] z-10 filter opacity-90",
            isVisible ? "transition-all duration-500" : "opacity-0",
            "w-[400px] h-[400px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]" // Increased size for larger spotlights
        )}
        fill="white"
        />

        <div className="overflow-hidden">
        {/* Right Spotlight (White) */}
        <Spotlight
            className={cn(
            "absolute top-[30%] right-0 lg:right-[459px] md:right-[40px] transform rotate-[75deg] z-10 filter opacity-90",
            isVisible ? "transition-all duration-500" : "opacity-0",
            "w-[400px] h-[400px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]",
            "sm:max-w-[calc(100%-20px)]"
            )}
            fill="white"
        />
        </div>

        {/* Left Spotlight (Yellow, on the left of White) */}
        <Spotlight
        className={cn(
            "absolute top-[32%] left-[10px] lg:left-[500px] md:left-[50px] transform rotate-[80deg] z-10 filter opacity-10",
            isVisible ? "transition-all duration-500" : "opacity-0",
            "w-[400px] h-[400px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]" // Increased size for larger spotlights
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
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_0.1px),linear-gradient(to_bottom,#262626_1px,transparent_0.1px)]"
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-background" />
      </div>

      {/* Centered text content */}
      <div className="flex justify-center relative z-10">
        <div className="flex flex-col items-center justify-center text-center px-4 sm:px-0">
          <h2 className="uppercase tracking-widest text-xs sm:text-sm md:text-xl text-foreground">
            A Portfolio made with Next.js, Tailwind and FramerMotion
          </h2>
          <TextGenerateEffect
            className="text-center text-[30px] sm:text-4xl md:text-5xl lg:text-7xl"
            words="Welcome to my Portfolio"
          />
          <p className="text-center md:tracking-wider mb-5 text-sm md:text-lg lg:text-1xl">
            Hello, I&apos;m Klevis. <br /> An up and coming Full-Stack Developer based in Norway.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
