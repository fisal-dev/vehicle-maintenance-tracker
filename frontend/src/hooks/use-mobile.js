import { useState, useEffect } from "react";

export const useMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Initial check
    checkViewport();

    // Attach resize listener
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, [breakpoint]);

  return isMobile;
};
