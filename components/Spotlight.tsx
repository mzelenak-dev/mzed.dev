"use client";

import { useEffect } from "react";

export default function Spotlight() {
  useEffect(() => {
    const overlay = document.getElementById("spotlight-overlay");
    if (!overlay) return;

    const handleMouseMove = (e: MouseEvent) => {
      overlay.style.setProperty("--mouse-x", `${e.clientX}px`);
      overlay.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null; // no UI rendered, purely behavior
}