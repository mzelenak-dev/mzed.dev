import { useEffect } from "react";

export default function useSpotlight(overlayId: string = "spotlight-overlay") {
  useEffect(() => {
  const spotlight = document.getElementById(overlayId) as HTMLElement | null;
  if (!spotlight) return;

  const handleMouse = (e: MouseEvent) => {
    spotlight.style.setProperty("--mouse-x", `${e.clientX}px`);
    spotlight.style.setProperty("--mouse-y", `${e.clientY}px`);
  };

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      document.addEventListener("mousemove", handleMouse);
    } else {
      document.removeEventListener("mousemove", handleMouse);
    }
  };

  window.addEventListener("resize", handleResize);
  handleResize(); // initial check

  return () => {
    document.removeEventListener("mousemove", handleMouse);
    window.removeEventListener("resize", handleResize);
  };
}, [overlayId]);
}