"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrolToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const ScrolToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="right-4 fixed animate-pulse bottom-4">
      {isVisible && (
        <button
          onClick={ScrolToTop}
          className="text-white bg-blue-950/60 cursor-pointer w-12 h-12 
            flex items-center justify-center rounded-full"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrolToTop;
