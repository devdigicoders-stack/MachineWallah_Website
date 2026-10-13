import React from "react";

interface SectionHeadingProps {
  badge?: string;
  badgeColor?: "yellow" | "blue" | "green" | "orange" | "navy" | "default";
  title: string | React.ReactNode;
  highlightText?: string;
  description?: string | React.ReactNode;
  align?: "left" | "center" | "right";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  badge,
  badgeColor = "yellow",
  title,
  highlightText,
  description,
  align = "center",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  }[align];

  const badgeColorClasses = {
    yellow: "bg-[#FFBE0B]/15 text-[#8F6600] border-[#FFBE0B]/30",
    blue: "bg-[#0879D1]/10 text-[#0879D1] border-[#0879D1]/30",
    green: "bg-[#36A43B]/10 text-[#257328] border-[#36A43B]/30",
    orange: "bg-[#F4511E]/10 text-[#D83B0A] border-[#F4511E]/30",
    navy: "bg-slate-200 text-[#141B29] border-slate-300",
    default: "bg-slate-100 text-slate-700 border-slate-200",
  }[badgeColor];

  const titleColor =
    theme === "dark" ? "text-white" : "text-[#141B29]";
  const descColor =
    theme === "dark" ? "text-slate-300" : "text-slate-600";

  return (
    <div className={`flex flex-col max-w-3xl ${alignClasses} ${className}`}>
      {badge && (
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border mb-3.5 ${badgeColorClasses}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current" />
          {badge}
        </span>
      )}

      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight ${titleColor}`}
      >
        {title}
        {highlightText && (
          <span className="text-[#0879D1] ml-2 inline-block">
            {highlightText}
          </span>
        )}
      </h2>

      {description && (
        <p
          className={`mt-3.5 text-base sm:text-lg leading-relaxed font-normal ${descColor}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
