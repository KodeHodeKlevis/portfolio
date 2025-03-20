import { cn } from "@/lib/utils";

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
        "mx-auto grid max-w-6xl grid-cols-1 gap-4 md:auto-rows-[15rem] md:grid-cols-3",
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
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-2 rounded-xl border border-neutral-200 bg-white p-3 transition duration-200 hover:shadow-xl dark:border-red-500/[0.2] dark:bg-background dark:shadow-2xl",
        className
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
            src={img || spareImg} // Ensure this points to the correct image file
            alt={img ? "Bento Image" : "Spare Image"}
            className="object-cover w-full h-full max-w-full max-h-full"
          />
        </div>
      )}

      {/* Content */}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        <div className={`mt-2 font-sans font-bold ${titleClassName || "text-neutral-600 dark:text-neutral-200"}`}>
          {title}
        </div>
        <div className="mt-2 mb-5 font-sans font-bold text-neutral-600 dark:text-neutral-200 overflow-hidden text-ellipsis whitespace-nowrap">
          {description}
        </div>
      </div>
    </div>
  );
};
