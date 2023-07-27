"use client";
import { useEffect } from "react";

const TawkTo = () => {
  useEffect(() => {
    const tawkToScript = document.createElement("script");
    tawkToScript.src = "https://embed.tawk.to/64c2a4c1cc26a871b02ba12d/default";
    tawkToScript.async = true;
    document.body.appendChild(tawkToScript);

    return () => {
      document.body.removeChild(tawkToScript);
    };
  }, []);

  return null;
};

export default TawkTo;
