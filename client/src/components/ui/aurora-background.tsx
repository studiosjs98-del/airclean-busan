import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

/**
 * 21st.dev · Aceternity "Aurora Background" (https://21st.dev/r/aceternity/aurora-background)
 * Re-themed to 강철에어클린's clean-air cyan/teal tokens. The gradient color
 * vars are set locally so the original class strings stay intact. The animation
 * (`animate-aurora`, keyframes in index.css) freezes under prefers-reduced-motion.
 *
 * Adapted from the upstream component: removed the forced full-height `<main>`
 * wrapper + zinc background so it can act as a positioned hero background layer.
 */

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  showRadialGradient?: boolean;
}

const auroraVars = {
  "--white": "#ffffff",
  "--transparent": "transparent",
  "--blue-500": "#2e8be6", // azure
  "--indigo-300": "#5b4bd6", // iris
  "--blue-300": "#14b6d6", // aqua
  "--violet-200": "#8aa2ff", // periwinkle
  "--blue-400": "#1e45ab", // cobalt
} as React.CSSProperties;

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      style={auroraVars}
      className={cn("relative flex flex-col items-center justify-center", className)}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className={cn(
            `
            [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
            [background-image:var(--white-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[12px]
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)]
            after:[background-size:200%,_100%]
            after:animate-aurora after:[background-attachment:fixed]
            pointer-events-none
            absolute -inset-[10px] opacity-30 will-change-transform`,
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_60%_0%,black_10%,var(--transparent)_70%)]`,
          )}
        />
      </div>
      {children}
    </div>
  );
};
