import { BreakpointConfig } from "@/types/types";
import { useEffect, useState } from "react";

export const useBreakpoint = (breakpoints: BreakpointConfig) => {
  const [currentGradientWidth, setCurrentGradientWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      
      const sortedBreakpoints = Object.entries(breakpoints).sort(
        (a, b) => a[1].width - b[1].width
      );

      const matchingBreakpoint = sortedBreakpoints.find(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, value]) => width <= value.width
      );

      if (matchingBreakpoint) {
        setCurrentGradientWidth(matchingBreakpoint[1].gradientWidth);
      } else {
        const lastBreakpoint = sortedBreakpoints[sortedBreakpoints.length - 1];
        setCurrentGradientWidth(lastBreakpoint[1].gradientWidth);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoints]);

  return currentGradientWidth;
};