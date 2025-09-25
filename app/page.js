"use client";

import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <div className="relative flex items-center justify-center min-h-screen bg-[#333652] overflow-hidden">
        {/* Background video */}
        <video
          src="/video/test.mp4" // make sure it's in /public/video/test.mp4
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#333652]"></div>

        {/* Overlay text */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-white glow-purple">
            Unleash Your Creativity
          </h1>
          <h2 className="mt-2 text-2xl md:text-6xl font-semibold text-yellow-300 glow-yellow">
            with AI-Driven Story Game
          </h2>
        </div>
      </div>
      <div className="min-h-screen flex justify-center items-center bg-[#333652] ">
        <motion.h1
          initial={{ x: -500, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: false, amount: 0.7 }}
          className="text-6xl md:text-8xl font-bold text-white"
        >
          Coming Soon...
        </motion.h1>
      </div>
    </div>
  );
}
