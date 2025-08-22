"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function AnimatedIcon() {
  const [animationData, setAnimationData] = useState<unknown>(null);

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
    <div className="relative flex items-center justify-center rounded-full bg-blue-100"
      style={{
        height: `calc(var(--spacing) * 40 * ${process.env.NEXT_PUBLIC_ANIMATED_RING_OUTER_SCALE ?? 1.3})`,
        width: `calc(var(--spacing) * 40 *${process.env.NEXT_PUBLIC_ANIMATED_RING_OUTER_SCALE ?? 1.3})`
      }}
    >
      <div className="absolute rounded-full bg-blue-200"
        style={{
          height: `calc(var(--spacing) * 32 * ${process.env.NEXT_PUBLIC_ANIMATED_RING_INNER_SCALE ?? 1.3})`,
          width: `calc(var(--spacing) * 32 *${process.env.NEXT_PUBLIC_ANIMATED_RING_INNER_SCALE ?? 1.3})`
        }}
      />
      <Lottie
        animationData={animationData}
        loop
        autoplay
        style={{ width: "80px", height: "80px", zIndex: 10, scale: process.env.NEXT_PUBLIC_ANIMATED_ICON_SCALE ?? 2.6 }}
      />
    </div>
  );
}
