"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function Spotlight() {

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    damping: 25,
    stiffness: 150,
  });

  const smoothY = useSpring(mouseY, {
    damping: 25,
    stiffness: 150,
  });

  useEffect(() => {

    function handleMouseMove(e: MouseEvent) {

      mouseX.set(e.clientX - 200);

      mouseY.set(e.clientY - 200);
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };

  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-100 h-100 rounded-full pointer-events-none z-0"
      style={{
        x: smoothX,
        y: smoothY,
        background:
          "radial-gradient(circle, rgba(168,85,247,0.18) 0%, rgba(168,85,247,0) 70%)",
        filter: "blur(40px)",
      }}
    />
  );
}