"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
  description?: string;
}

interface TimelineProps {
  data: TimelineEntry[];
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  hideHeader?: boolean;
  className?: string;
}

export const Timeline = ({
  data,
  title = (
    <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
      Changelog from my journey
    </h2>
  ),
  subtitle = (
    <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
      I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s a timeline of my journey.
    </p>
  ),
  hideHeader = false,
  className,
}: TimelineProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 60%", "end 20%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className={`w-full bg-white dark:bg-neutral-950 font-sans md:px-10 ${className ?? ""}`}
      ref={containerRef}
    >
      {!hideHeader && (
        <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
          {title}
          {subtitle}
        </div>
      )}

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20" data-testid="timeline">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ 
              opacity: 0, 
              x: index % 2 === 0 ? -100 : 100, 
              y: 30 
            }}
            whileInView={{ 
              opacity: 1, 
              x: 0, 
              y: 0 
            }}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.15,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex items-center pt-10 md:pt-20 md:gap-10 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Timeline Dot - Always in center */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-600 rounded-full border-4 border-white shadow-lg z-20 hidden md:block timeline-dot"></div>
            
            {/* Content Card */}
            <div className={`w-full md:w-6/12 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
              <Card className="hover:shadow-lg transition-shadow duration-300 timeline-card">
                <CardContent className="p-6">
                  <motion.div 
                    initial={{ 
                      opacity: 0, 
                      y: 20,
                      scale: 0.95 
                    }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0,
                      scale: 1 
                    }}
                    transition={{ 
                      duration: 0.7, 
                      delay: index * 0.15 + 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex items-start space-x-4"
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      {item.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      {/* Badge */}
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="outline" className="text-red-600 border-red-600">
                          {item.title.split(' — ')[0]}
                        </Badge>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        {item.title.split(' — ')[1] || item.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-slate-600 leading-normal text-sm">
                        {item.description || item.content}
                      </p>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </div>

            {/* Empty space for the other side */}
            <div className="hidden md:block w-4/12"></div>
          </motion.div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-1/2 transform -translate-x-1/2 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-red-200 dark:via-red-800 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] hidden md:block z-10"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-red-600 via-red-400 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

