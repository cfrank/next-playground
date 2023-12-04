import React from "react";

import { cn } from "@/lib/utils";

const Label = ({
  children,
  animateRerendering,
  color,
}: {
  children: React.ReactNode;
  animateRerendering?: boolean;
  color?: "default" | "pink" | "blue" | "violet" | "cyan" | "orange";
}) => {
  return (
    <div
      className={cn("rounded-full px-1.5 shadow-[0_0_1px_3px_black]", {
        "bg-gray-800 text-gray-300": color === "default",
        "bg-pink-800 text-white": color === "pink",
        "bg-blue-800 text-white": color === "blue",
        "bg-cyan-800 text-white": color === "cyan",
        "bg-violet-800 text-violet-100": color === "violet",
        "bg-orange-800 text-white": color === "orange",
        "animate-[highlight_1s_ease-in-out_1]": animateRerendering,
      })}
    >
      {children}
    </div>
  );
};
export const Boundary = ({
  children,
  labels = ["children"],
  size = "default",
  color = "default",
  animateRerendering = true,
}: {
  children: React.ReactNode;
  labels?: string[];
  size?: "small" | "default";
  color?: "default" | "pink" | "blue" | "violet" | "cyan" | "orange";
  animateRerendering?: boolean;
}) => {
  return (
    <div
      className={cn("relative rounded-lg border border-dashed", {
        "p-3 lg:p-5": size === "small",
        "p-4 lg:p-9": size === "default",
        "border-gray-700": color === "default",
        "border-vercel-pink": color === "pink",
        "border-vercel-blue": color === "blue",
        "border-vercel-cyan": color === "cyan",
        "border-vercel-violet": color === "violet",
        "border-vercel-orange": color === "orange",
        "text-vercel-pink animate-[rerender_1s_ease-in-out_1]":
          animateRerendering,
      })}
    >
      <div
        className={cn(
          "absolute -top-2.5 flex gap-x-1 text-[9px] uppercase leading-4 tracking-widest",
          {
            "left-3 lg:left-5": size === "small",
            "left-4 lg:left-9": size === "default",
          },
        )}
      >
        {labels.map((label) => {
          return (
            <Label
              key={label}
              color={color}
              animateRerendering={animateRerendering}
            >
              {label}
            </Label>
          );
        })}
      </div>

      {children}
    </div>
  );
};
