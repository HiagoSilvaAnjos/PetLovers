"use client";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const AosInit = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: false,
      easing: "ease-out",
      mirror: true,
    });
  }, []);

  return null;
};

export default AosInit;
