"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);
  const [currentCard, setCurrentCard] = useState<number>(0);

  useEffect(() => {
    startFlipping();
    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCurrentCard((prevCard) => (prevCard + 1) % items.length); // Move to the next card
    }, 4000); // Rotate every 4 seconds
  };

  return (
    <div className="relative h-auto w-full sm:h-auto md:h-[300px]">
      {items.map((card, index) => {
        const isVisible = index === currentCard;
        return (
          <motion.div
            key={card.id}
            className="absolute w-full sm:w-full md:w-96 lg:w-96 h-[300px] rounded-xl p-6 flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
              backgroundColor: "rgba(0, 5, 1, 1)",
              backgroundImage: "linear-gradient(31deg, rgba(0, 5, 1) 40%, rgba(42, 15, 14) 60%)",
            }}
            initial={{ opacity: 0, y: -60 }}
            animate={{
              opacity: isVisible ? 1 : 0,
              y: isVisible ? 0 : -80,
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            <div className="font-normal text-white">{card.content}</div>
            <div>
              <p className="text-white font-medium">{card.name}</p>
              <p className="text-white font-normal">{card.designation}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
