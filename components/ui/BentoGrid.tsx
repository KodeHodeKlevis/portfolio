"use client";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import animationData from '@/data/confetti.json'
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import dynamic from "next/dynamic";
import {motion} from "framer-motion";

// BentoGrid Component
export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4",
        "md:auto-rows-[20rem]",
        className
      )}
    >
      {children}
    </div>
  );
};

// BentoGridItem Component
export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  imgName,
  titleClassName,
  img,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: number;
  imgName?: string;
  titleClassName?: string;
  img?: string;
  spareImg?: string;
}) => {
  const Lottie = dynamic(() => import("react-lottie"), { ssr: false });
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("klevis25sfj@gmail.com");
      setCopied(true);
    }
  };

  // Available Hours Component with Animation
  const AvailableHours = () => {
    const availableHoursData = [
      {
        id: 1,
        name: "9:00 AM - 6:00 PM",
        designation: "Monday - Friday",
        content: (
          <>
            <div className="font-bold text-white">9:00 AM - 10:00 PM</div>
            <div className="text-sm italic text-white">Monday - Friday</div>
            <div className="text-xs text-white italic">Available for quick consultations or calls.</div>
          </>
        ),
      },
      {
        id: 2,
        name: "10:00 AM - 4:00 PM",
        designation: "Saturday",
        content: (
          <>
            <div className="font-bold text-white">9:00 AM - 10:00 PM</div>
            <div className="text-sm italic text-white">Saturday</div>
            <div className="text-xs text-white italic">Flexible, but availability may vary.</div>
          </>
        ),
      },
      {
        id: 3,
        name: "Closed",
        designation: "Sunday",
        content: (
          <>
            <div className="font-bold text-white">Closed</div>
            <div className="text-sm italic text-white">Sunday</div>
            <div className="text-xs text-white italic">No work, but always free to contact.</div>
          </>
        ),
      },
    ];
  
    const [currentSlot, setCurrentSlot] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlot((prev) => (prev + 1) % availableHoursData.length); // Rotate to the next slot
      }, 3000); // Change every 3 seconds
  
      return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);
  
    return (
      <div className="relative flex justify-center items-center w-full h-[300px]"> {/* Center the available hours */}
        {availableHoursData.map((slot, index) => {
          const isActive = currentSlot === index;
          return (
            <motion.div
              key={slot.id}
              className="absolute w-full h-[100px] p-4 flex flex-col items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }} // Start off with smaller scale and hidden
              animate={{
                opacity: isActive ? 1 : 0, // Only show the active slot
                scale: isActive ? 1 : 0.9, // Add scale effect when slot becomes active
              }}
              transition={{
                duration: 0.5, // Duration of animation
                ease: "easeInOut",
              }}
            >
              <div className="font-bold text-white">{slot.content}</div>
            </motion.div>
          );
        })}
      </div>
    );
  };
  return (
    <div
      className={cn(
        "group/bento shadow-input flex flex-col justify-between space-y-2 rounded-xl border border-neutral-200 bg-gradient-to-r from-red-500 via-pink-500 to-yellow-500 p-3 transition duration-200 hover:shadow-xl dark:border-red-500/[0.2] dark:bg-background dark:shadow-2xl",
        "overflow-hidden",
        className
      )}
      style={{
        backgroundColor: "rgb(0,5,1)",
        backgroundImage: "linear-gradient(32deg, rgba(0,5,1,1) 46%, rgba(42,15,14,1) 63%)",
      }}
    >
      {/* Image or spare image */}
      {(img || spareImg) && (
        <div className="relative w-full h-[auto] sm:h-[200px] md:h-[250px] lg:h-[300px] rounded-lg overflow-hidden flex items-center justify-center">
          <img
            src={img || spareImg}
            alt={img ? "Bento Image" : "Spare Image"}
            className="object-cover w-full h-full max-w-full max-h-full"
          />
        </div>
      )}

      {/* Available hours section for id === 2 */}
      {id === 2 && <AvailableHours />}

      {/* Content */}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        <div className={`mt-2 font-sans font-bold ${titleClassName || "text-white"}`}>{title}</div>
        <div className="mt-2 mb-5 font-sans font-bold text-white overflow-hidden text-ellipsis whitespace-normal">
          {description}
        </div>

        {/* Skills section for id === 3 */}
        {id === 3 && (
          <div className="mt-4 w-full flex flex-wrap gap-3 justify-center lg:justify-start">
            <span className="py-4 px-3 rounded-lg text-center bg-rgba(0,5,1,1)" />
            {["React.js", "Next.js", "TypeScript", "JavaScript"].map((item, index) => (
              <span key={item} className="py-2 lg:py-4 px-3 text-xs lg:text-base font-bold opacity-50 lg:opacity-100 rounded-lg text-center text-foreground">
                {item}
              </span>
            ))}
          </div>
        )}

        {/* Additional Skills for id === 3 */}
        {id === 3 && (
          <div className="mt-4 w-full flex flex-wrap gap-3 justify-center lg:justify-start">
            {["HTML", "CSS", "Python", "C#"].map((item, index) => (
              <span key={item} className="py-2 lg:py-4 px-3 text-xs lg:text-base font-bold opacity-50 lg:opacity-100 rounded-lg text-center text-foreground">
                {item}
                <span className="py-4 px-3 rounded-lg text-center bg-rgba(0,5,1,1)" />
              </span>
              
            ))}
          </div>
        )}
         {/* Additional Skills for id === 3 */}
         {id === 3 && (
          <div className="mt-4 w-full flex flex-wrap gap-3 justify-center lg:justify-start">
            <span className="py-4 px-3 rounded-lg text-center bg-rgba(0,5,1,1)" />
            {["SQL", "MongoDB", "Sanity", "Tailwind"].map((item, index) => (
              <span key={item} className="py-2 lg:py-4 px-3 text-xs lg:text-base font-bold opacity-50 lg:opacity-100 rounded-lg text-center text-foreground">
                {item}
              </span>
            ))}
          </div>
        )}

         {/* Email Contact copy  */}
         {id === 4 && (
          <div className="mt-5 relative" >
            <div className="absolute -bottom-5 right-0 " > 
              <Lottie options={{
                loop: copied,
                autoplay: copied,
                animationData,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice'
                }
              }} />
            </div>
            <MagicButton
              title={copied ? 'Email copied' : 'Copy my email'}
              icon={<IoCopyOutline/>}
              position="left"
              handleClick={handleCopy}
              />
          </div>
        )}

        {/* Game Project */}
        {id === 5 && (
          <div className="relative flex items-center justify-center w-full h-full">
            {/* Game Image */}
            <img
              src="/game.svg"
              alt="Game Project Image"
              className="object-contain max-w-full max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[600px] z-0 transition-transform duration-300 ease-in-out hover:scale-90 hover:opacity-80 "
            />
            {/* Shop Image Positioned at the Bottom-Left Corner of the Game Image with Hover Effect */}
            <img
              src="/shop.svg"
              alt="Shop Image"
              className="absolute bottom-15 left-45 object-contain max-w-[150px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-[300px] z-10 transition-transform duration-300 ease-in-out hover:scale-110 hover:opacity-80"
            />
            {/* Shop Image Positioned at the Bottom-Right Corner of the Game Image with Hover Effect */}
            <img
              src="/shop-1.svg"
              alt="Shop Image"
              className="absolute bottom-15 right-45 object-contain max-w-[150px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-[300px] z-10 transition-transform duration-300 ease-in-out hover:scale-110 hover:opacity-80"
            />
          </div>
        )}

      </div>
    </div>
  );
};
