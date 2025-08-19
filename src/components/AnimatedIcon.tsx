"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function AnimatedIcon() {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch("/whitelabel.json") // file inside /public/
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load Lottie JSON", err));
  }, []);

  if (!animationData) {
    return (
      <div className="relative flex items-center justify-center w-40 h-40 rounded-full bg-blue-100">
        <div className="absolute w-32 h-32 rounded-full bg-blue-200 animate-pulse" />
      </div>
    );
  }

  return (
    <div className="relative flex items-center justify-center w-40 h-40 rounded-full bg-blue-100">
      <div className="absolute w-32 h-32 rounded-full bg-blue-200" />
      <Lottie
        animationData={animationData}
        loop
        autoplay
        style={{ width: "80px", height: "80px", zIndex: 10 }}
      />
    </div>
  );
}
