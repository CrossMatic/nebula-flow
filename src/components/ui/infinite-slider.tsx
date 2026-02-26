'use client';

import { cn } from '@/lib/utils';
import { useMotionValue, animate, motion } from 'framer-motion';
import { Children, useState, useEffect, type ReactNode } from 'react';
import useMeasure from 'react-use-measure';

type InfiniteSliderProps = {
  children: ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  direction?: 'horizontal' | 'vertical';
  reverse?: boolean;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = 'horizontal',
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [currentDuration, setCurrentDuration] = useState(duration);
  const [measureRef, { width, height }] = useMeasure();
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);
  const items = Children.toArray(children);

  useEffect(() => {
    let controls;
    const size = direction === 'horizontal' ? width : height;
    const contentSize = size + gap;
    if (size === 0) return;
    const from = reverse ? -contentSize : 0;
    const to = reverse ? 0 : -contentSize;

    if (isTransitioning) {
      controls = animate(translation, [translation.get(), to], {
        ease: 'linear',
        duration:
          currentDuration * Math.abs((translation.get() - to) / contentSize),
        onComplete: () => {
          setIsTransitioning(false);
          setKey((prevKey) => prevKey + 1);
        },
      });
    } else {
      controls = animate(translation, [from, to], {
        ease: 'linear',
        duration: currentDuration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [
    key,
    translation,
    currentDuration,
    width,
    height,
    gap,
    isTransitioning,
    direction,
    reverse,
  ]);

  const hoverProps = durationOnHover
    ? {
        onHoverStart: () => {
          setIsTransitioning(true);
          setCurrentDuration(durationOnHover);
        },
        onHoverEnd: () => {
          setIsTransitioning(true);
          setCurrentDuration(duration);
        },
      }
    : {};

  return (
    <div className={cn('overflow-hidden', className)}>
      <motion.div
        className={cn(
          'flex w-max',
          direction === 'horizontal' ? 'items-center' : 'items-start',
        )}
        style={{
          ...(direction === 'horizontal'
            ? { x: translation }
            : { y: translation }),
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
          willChange: 'transform',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
        }}
        {...hoverProps}
      >
        <div
          ref={measureRef}
          className={cn(
            'flex shrink-0',
            direction === 'horizontal' ? 'flex-row items-center' : 'flex-col items-start',
          )}
          style={{ gap: `${gap}px` }}
        >
          {items}
        </div>
        <div
          aria-hidden='true'
          className={cn(
            'flex shrink-0',
            direction === 'horizontal' ? 'flex-row items-center' : 'flex-col items-start',
          )}
          style={{
            gap: `${gap}px`,
            ...(direction === 'horizontal'
              ? { marginLeft: `${gap}px` }
              : { marginTop: `${gap}px` }),
          }}
        >
          {items}
        </div>
      </motion.div>
    </div>
  );
}

