"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Particle = {
  id: number;
  x: number;
  y: number;
};

export default function CursorTrail() {

  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {

    function handleMouseMove(e: MouseEvent) {

      const newParticle = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };

      setParticles((prev) => [...prev.slice(-15), newParticle]);
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };

  }, []);

  return (
    <>
      {particles.map((particle) => (

        <motion.div
          key={particle.id}
          initial={{
            opacity: 0.8,
            scale: 1,
          }}
          animate={{
            opacity: 0,
            scale: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="fixed w-4 h-4 rounded-full pointer-events-none z-999"
          style={{
            left: particle.x - 8,
            top: particle.y - 8,
            background:
              "radial-gradient(circle, rgba(168,85,247,0.9) 0%, rgba(168,85,247,0) 70%)",
            filter: "blur(2px)",
          }}
        />

      ))}
    </>
  );
}