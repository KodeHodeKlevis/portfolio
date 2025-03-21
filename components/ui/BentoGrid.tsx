import { cn } from "@/lib/utils";
import { CardStack } from "./CardStack"; // Import the CardStack component

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-6xl grid-cols-1 gap-4 md:auto-rows-[15rem] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", // Adjust grid columns for different screen sizes
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  imgName,
  titleClassName,
  img,
  spareImg,
  showAvailableHours = false, // Default prop for showing Available Hours
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: number;
  imgName?: string;
  titleClassName?: string;
  img?: string;
  spareImg?: string;
  showAvailableHours?: boolean; // Trigger for Available Hours card
}) => {
  const availableHoursData = [
    {
      id: 1,
      name: "9:00 AM - 6:00 PM",
      designation: "Monday - Friday",
      content: (
        <>
          <div className="font-bold text-white">9:00 AM - 6:00 PM</div>
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
          <div className="font-bold text-white">10:00 AM - 4:00 PM</div>
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
          <div className="text-xs text-white italic">
            No work, but always free to contact.
          </div>
        </>
      ),
    },
  ];

  return (
    <div
      className={cn(
        "group/bento shadow-input flex flex-col justify-between space-y-2 rounded-xl border border-neutral-200 bg-white p-3 transition duration-200 hover:shadow-xl dark:border-red-500/[0.2] dark:bg-background dark:shadow-2xl",
        className,
        "overflow-hidden"
      )}
      style={{
        backgroundColor: 'rgb(0,5,1)',
        backgroundImage: 'linear-gradient(32deg, rgba(0,5,1,1) 46%, rgba(42,15,14,1) 63%)',
      }}
    >
      {/* Image or spare image */}
      {(img || spareImg) && (
        <div className="relative w-full h-[auto] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px] rounded-lg overflow-hidden flex items-center justify-center">
          <img
            src={img || spareImg}
            alt={img ? "Bento Image" : "Spare Image"}
            className="object-cover w-full h-full max-w-full max-h-full"
          />
        </div>
      )}

      {/* Conditionally render AvailableHoursCardStack */}
      {showAvailableHours && (
        <div className="overflow-hidden h-auto">
          <CardStack
            items={availableHoursData} // Pass the available hours data to CardStack
            offset={10}
            scaleFactor={0.06}
          />
        </div>
      )}

      {/* Content */}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        <div className={`mt-2 font-sans font-bold ${titleClassName || "text-white"}`}>
          {title}
        </div>
        <div className="mt-2 mb-5 font-sans font-bold text-white overflow-hidden text-ellipsis whitespace-normal">
          {description}
        </div>
      </div>
    </div>
  );
};
