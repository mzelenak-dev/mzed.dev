"use client";

import { useState } from "react";

export default function HamburgerButton({ onClick }: { onClick?: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    if (onClick) onClick();
  };

  return (
    <button
      onClick={handleClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      className="
        lg:hidden
        flex items-center justify-center
        w-12 h-12
        p-2
        rounded-md
        focus:outline-none focus:ring-2 focus:ring-indigo-500
        hover:bg-slate-800/50
        transition-colors duration-200
      "
    >
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="white"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {isOpen ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M6 18L18 6M6 6l12 12"
          /> // "X" icon
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M4 6h16M4 12h16M4 18h16"
          /> // Hamburger icon
        )}
      </svg>
    </button>
  );
}