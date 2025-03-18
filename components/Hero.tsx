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
    <section className="pb-24 pt-36 bg-background relative flex items-center justify-center h-screen">
  <div className="absolute inset-0 flex items-center justify-center w-full h-full">
    {/* Left Spotlight (Red) */}
    <Spotlight
      className={cn(
        "absolute top-[30%] left-[18%] w-[450px] h-[450px] transform rotate-[30deg] z-10 filter opacity-90",
        isVisible ? "transition-all duration-500" : "opacity-0",
        "block sm:w-[100px] sm:h-[100px]" // Hidden on small screens, visible on large (lg) screens
      )}
      fill="red"
    />
    {/* Left Spotlight (White) */}
    <Spotlight
      className={cn(
        "absolute top-[35%] right-[13%] w-[24vw] h-[50vh] transform rotate-[90deg] z-10 filter opacity-10",
        isVisible ? "transition-all duration-500" : "opacity-0",
        "hidden lg:block sm:w-[35vw] sm:h-[40vh]" // Hidden on small screens, visible on large (lg) screens
      )}
      fill="pink"
    />
    
    <Spotlight
      className={cn(
        "absolute top-[32%] right-[20%] w-[24vw] h-[50vh] transform rotate-[85deg] z-10 filter opacity-10",
        isVisible ? "transition-all duration-500" : "opacity-0",
        "hidden lg:block sm:w-[35vw] sm:h-[40vh]" // Hidden on small screens, visible on large (lg) screens
      )}
      fill="white"
    />
    <Spotlight
      className={cn(
        "absolute top-[30%] left-[25%] w-[24vw] h-[50vh] transform rotate-[40deg] z-10 filter opacity-10",
        isVisible ? "transition-all duration-500" : "opacity-0",
        "hidden lg:block sm:w-[35vw] sm:h-[40vh]" // Hidden on small screens, visible on large (lg) screens
      )}
      fill="blue"
    />
      </div>

      {/* Background grid */}
      <div className="absolute top-0 left-0 flex w-full h-full items-center justify-center bg-white dark:bg-background">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
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
          <p className="text-center md:tracking-wider mb-5 text-sm md:text-lg lg:text-1xl" > Hello, I&apos;m Klevis. <br></br> An up and coming Full-Stack Developer based in Norway.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
