import { useEffect, useState } from "react";

export const useDementions = () => {
  const [sizes, setSizes] = useState({ x: undefined, y: undefined });
  useEffect(() => {
    function onResize() {
      setSizes({
        x: window.document.documentElement.clientWidth,
        y: window.document.documentElement.clientHeight,
      });
    }
    onResize();
    console.log("adding");
    window.addEventListener("resize", onResize);
    return () => {
      console.log("removing");
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return sizes;
};
