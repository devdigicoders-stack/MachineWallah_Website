import React from "react";
import Link from "next/link";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "yellow"
  | "blue"
  | "green"
  | "orange"
  | "white";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  isExternal?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  isExternal,
  fullWidth = false,
  leftIcon,
  rightIcon,
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none disabled:active:scale-100 select-none";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5 font-semibold",
    md: "text-sm px-5 py-2.5 gap-2 font-semibold",
    lg: "text-base px-6 py-3.5 gap-2.5 font-bold shadow-sm",
  }[size];

  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      "bg-[#FFBE0B] text-[#141B29] hover:bg-[#E5A900] shadow-sm hover:shadow focus-visible:ring-[#FFBE0B]",
    secondary:
      "bg-[#141B29] text-white hover:bg-[#1E283D] shadow-sm hover:shadow focus-visible:ring-[#141B29]",
    outline:
      "border-2 border-[#141B29] text-[#141B29] hover:bg-[#141B29] hover:text-white focus-visible:ring-[#141B29]",
    ghost:
      "text-[#141B29] hover:bg-slate-100 focus-visible:ring-slate-300",
    yellow:
      "bg-[#FFBE0B] text-[#141B29] hover:bg-[#E5A900] shadow-sm hover:shadow focus-visible:ring-[#FFBE0B]",
    blue:
      "bg-[#0879D1] text-white hover:bg-[#0762A7] shadow-sm hover:shadow focus-visible:ring-[#0879D1]",
    green:
      "bg-[#36A43B] text-white hover:bg-[#2B8630] shadow-sm hover:shadow focus-visible:ring-[#36A43B]",
    orange:
      "bg-[#F4511E] text-white hover:bg-[#D83B0A] shadow-sm hover:shadow focus-visible:ring-[#F4511E]",
    white:
      "bg-white text-[#141B29] hover:bg-slate-50 shadow-sm hover:shadow focus-visible:ring-white border border-slate-200",
  };

  const widthStyle = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseStyles} ${sizeStyles} ${variantStyles[variant]} ${widthStyle} ${className}`.trim();

  const content = (
    <>
      {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} {...props}>
      {content}
    </button>
  );
}
