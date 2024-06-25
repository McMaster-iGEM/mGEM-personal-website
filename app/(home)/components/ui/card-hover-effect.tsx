/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

// Utility function to check if a URL is external
const isExternalLink = (url: string) => {
  return /^https?:\/\//.test(url);
};

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    link: string;
    icon: string;
    description: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-5",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          {...(isExternalLink(item?.link) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full maroon block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card
            icon={item.icon}
            title={item.title}
            description={item.description}
            isHovered={hoveredIndex === idx}
          />
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  title,
  icon,
  description,
  isHovered,
}: {
  className?: string;
  title: string;
  icon: string;
  description: string;
  isHovered: boolean;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-white border border-slate-300 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">
          {isHovered ? (
            <p className="text-left text-base whitespace-pre-wrap">{description}</p>
          ) : (
            <>
              <CardTitle>{title}</CardTitle>
              <CardDescription icon={icon} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h1 className={cn("text-zinc-700 text-xl font-bold tracking-wide mt-4", className)}>
      {children}
    </h1>
  );
};

export const CardDescription = ({
  className,
  icon,
}: {
  className?: string;
  icon?: string;
}) => {
  return (
    <div className="flex items-center justify-center h-full mt-2">
      <img src={icon} alt="Logo" className={cn("h-32 w-32 object-contain", className)} />
    </div>
  );
};
