import React from "react";

const variants = {
  success: "bg-emerald-500/12 text-emerald-400 border-emerald-500/25",
  warning: "bg-amber-500/12 text-amber-400 border-amber-500/25",
  danger:  "bg-rose-500/12 text-rose-400 border-rose-500/25",
  info:    "bg-indigo-500/12 text-indigo-400 border-indigo-500/25",
  neutral: "bg-slate-500/12 text-slate-400 border-slate-500/25",
  violet:  "bg-violet-500/12 text-violet-400 border-violet-500/25",
};

const dotColors = {
  success: "bg-emerald-400",
  warning: "bg-amber-400",
  danger:  "bg-rose-400",
  info:    "bg-indigo-400",
  neutral: "bg-slate-400",
  violet:  "bg-violet-400",
};

const sizes = {
  sm: "text-[10px] px-2 py-0.5 gap-1",
  md: "text-xs px-2.5 py-1 gap-1.5",
  lg: "text-sm px-3 py-1 gap-2",
};

const Badge = ({
  children,
  variant = "neutral",
  size = "md",
  dot = false,
  pulse = false,
  className = "",
}) => {
  const variantClass = variants[variant] || variants.neutral;
  const sizeClass    = sizes[size] || sizes.md;
  const dotColor     = dotColors[variant] || dotColors.neutral;

  return (
    <span
      className={`
        inline-flex items-center font-semibold rounded-full border
        ${variantClass} ${sizeClass} ${className}
      `}
    >
      {dot && (
        <span className={`${dotColor} w-1.5 h-1.5 rounded-full shrink-0 ${pulse ? "animate-pulse" : ""}`} />
      )}
      {children}
    </span>
  );
};

export default Badge;
