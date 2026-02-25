"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const progressTransform = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans" ref={containerRef}>
      <div className="relative mx-auto max-w-6xl pb-4 md:pb-8">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:gap-10 md:pt-20">
            <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:max-w-sm md:flex-row">
              <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#02040a] md:left-3">
                <div className="h-4 w-4 rounded-full border border-blue-300/60 bg-blue-300/30" />
              </div>
              <h3 className="hidden text-xl font-bold text-slate-400 md:block md:pl-20 md:text-4xl">{item.title}</h3>
            </div>

            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <h3 className="mb-4 block text-left text-2xl font-bold text-slate-400 md:hidden">{item.title}</h3>
              {item.content}
            </div>
          </div>
        ))}

        <div className="absolute bottom-0 left-8 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-white/20 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]">
          <motion.div
            style={{
              scaleY: progressTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-0 origin-top rounded-full bg-gradient-to-b from-blue-500 via-cyan-400 to-transparent"
          />
        </div>
      </div>
    </div>
  );
};
