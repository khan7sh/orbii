"use client";

import React, { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type TColorProp = string | string[];

interface ShineBorderProps {
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
  color?: TColorProp;
  className?: string;
  children: React.ReactNode;
}

/**
 * @name Shine Border
 * @description It is an animated background border effect component with easy to use and configurable props.
 * @param borderRadius defines the radius of the border.
 * @param borderWidth defines the width of the border.
 * @param duration defines the animation duration to be applied on the shining border
 * @param color a string or string array to define border color.
 * @param className defines the class name to be applied to the component
 * @param children contains react node elements.
 */
export default function ShineBorder({
  borderRadius = 8,
  borderWidth = 1,
  duration = 14,
  color = "#000000",
  className,
  children,
}: ShineBorderProps) {
  return (
    <div
      style={
        {
          "--border-radius": `${borderRadius}px`,
          "--border-width": `${borderWidth}px`,
          "--shine-pulse-duration": `${duration}s`,
          "--mask-linear-gradient": `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          "--background-radial-gradient": `radial-gradient(transparent,transparent, ${color instanceof Array ? color.join(",") : color},transparent,transparent)`,
        } as CSSProperties
      }
      className={cn(
        "relative grid place-items-center rounded-[--border-radius] bg-transparent p-[--border-width]",
        "before:absolute before:inset-0 before:rounded-[--border-radius] before:p-[--border-width] before:bg-[length:300%_300%] before:bg-[image:var(--background-radial-gradient)] before:[mask:var(--mask-linear-gradient)] before:[mask-composite:exclude] before:animate-[shine-pulse_var(--shine-pulse-duration)_infinite_linear]",
        className
      )}
    >
      {children}
    </div>
  );
}
