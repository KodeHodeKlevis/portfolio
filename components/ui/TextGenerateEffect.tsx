"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  let wordsArray = words.split(" ");

  const wordVariants = {
    hidden: { opacity: 0, filter: "blur(10px)", scale: 0.8 },
    visible: { opacity: 1, filter: filter ? "blur(0px)" : "none", scale: 1 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.5 } },
  };

  return (
    <motion.div
      className={cn("font-bold", className)}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="my-4">
        <div className="dark:text-white text-black text-2xl leading-snug tracking-wide">
          {wordsArray.map((word, idx) => (
            <motion.span
              key={word + idx}
              variants={wordVariants}
              className="inline-block mr-2" // Added margin-right for spacing
              style={{
                color: idx >= 3 ? "var(--custom-red)" : "var(--foreground)",
                textShadow:
                  idx >= 3 ? "0px 0px 5px rgba(255, 255, 255, 0.4)" : "0px 0px 5px rgba(0, 0, 0, 0.4)",
                textTransform: word.toLowerCase() === "portfolio" ? "uppercase" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
