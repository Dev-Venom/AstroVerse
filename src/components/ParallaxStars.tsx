"use client";

import { useScroll, useTransform, motion } from "framer-motion";

export default function ParallaxStars() {

  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 2000], [0, -400]);

  return (
    <motion.div
      style={{ y }}
      className="fixed inset-0 pointer-events-none z-0 opacity-30"
    >

      <div className="absolute top-40 left-20 w-2 h-2 bg-white rounded-full"></div>

      <div className="absolute top-96 left-[30%] w-3 h-3 bg-cyan-300 rounded-full"></div>

      <div className="absolute top-175 right-40 w-2 h-2 bg-purple-400 rounded-full"></div>

      <div className="absolute top-300 left-[60%] w-4 h-4 bg-blue-300 rounded-full"></div>

      <div className="absolute top-400 left-32 w-2 h-2 bg-white rounded-full"></div>

      <div className="absolute top-500 right-[20%] w-3 h-3 bg-cyan-200 rounded-full"></div>

    </motion.div>
  );
}