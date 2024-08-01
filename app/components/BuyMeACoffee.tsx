"use client";

import { useEffect, useRef } from "react";

export default function BuyMeACoffeeButton() {
  const buttonRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Get the current reference of the buttonRef
    const currentButtonRef = buttonRef.current;

    // Dynamically load the Buy Me a Coffee button script
    const script = document.createElement("script");
    script.src = "https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js";
    script.type = "text/javascript";
    script.setAttribute("data-name", "bmc-button");
    script.setAttribute("data-slug", "emurrell");
    script.setAttribute("data-color", "#2a2a2a");
    script.setAttribute("data-emoji", "☕");
    script.setAttribute("data-font", "Poppins");
    script.setAttribute("data-text", "Buy me a coffee");
    script.setAttribute("data-outline-color", "#ffffff");
    script.setAttribute("data-font-color", "#ffffff");
    script.setAttribute("data-coffee-color", "#FFDD00");
    script.async = true;

    // Append the script to the current button container
    if (currentButtonRef) {
      currentButtonRef.appendChild(script);
    }

    return () => {
      // Clean up the script on component unmount
      if (currentButtonRef) {
        currentButtonRef.removeChild(script);
      }
    };
  }, []);

  return <div ref={buttonRef}></div>;
}
