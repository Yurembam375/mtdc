import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold rounded tracking-wide transition-all cursor-pointer";

  const variants = {
    primary:
      "bg-[#D85C3A] hover:bg-[#C04E2E] text-white shadow-xs",
    secondary:
      "bg-[#0D2A3A]/70 hover:bg-[#0D2A3A] border border-white/20 text-white backdrop-blur-xs",
    outline:
      "border border-[#D9DEE2] hover:border-[#102B3C] text-[#102B3C] bg-white",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}
