"use client";

import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { QRCodeCanvas } from "qrcode.react";
import Image from "next/image";

const alignCenter = { display: "flex", alignItems: "center", width: "100%" };

const MEMBERS = [
  {
    name: "Andy Li",
    qr: "https://www.linkedin.com/in/guanhui-li-855299a0/",
  },
  {
    name: "Gerazel Castro",
    qr: "https://www.linkedin.com/in/gerazel-castro/",
  },
  {
    name: "Cassandra Crawford",
    qr: "https://www.linkedin.com/in/cassandra-crawford/",
  },
  {
    name: "Anandjit Kaur",
    qr: "https://www.linkedin.com/in/anandjit-kaur-30a513286/",
  },
];

export default function Home() {
  const [isLarge, setIsLarge] = useState(false);
  const [showTech, setShowTech] = useState(false);
  const [showNonTech, setShowNonTech] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsLarge(window.innerWidth >= 768); // md breakpoint
    checkSize(); // run once on mount
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return (
    <div className=" overflow-hidden">
      <div className="relative flex items-center justify-center min-h-screen bg-[#333652] overflow-hidden">
        {/* Background video */}
        <video
          src="/video/test.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-black/0 to-[#201d3e]"></div>

        {/* Overlay text */}
        <div className="relative z-10 text-center px-4 scrollbar-hide">
          <h1 className="text-6xl md:text-8xl font-bold text-white glow-purple">
            Unleash Your Creativity
          </h1>
          <h2 className="mt-2 text-2xl md:text-6xl font-semibold text-yellow-300 glow-yellow">
            with AI-Driven Story Game
          </h2>
        </div>
      </div>
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#201d3e] p-36 gap-6 scrollbar-hide">
        <div className="mx-auto w-28 h-28 md:w-[400px] md:h-[400px] rounded-full overflow-hidden ring-2 ring-white/10 shadow-xl shadow-purple-500/20">
          <Image
            src="/img/aiventure-logo.png"
            alt="AIVENTURE logo"
            width={400}
            height={400}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <motion.h1
          initial={{ x: -500, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: false, amount: 0.7 }}
          className="text-2xl md:text-4xl font-bold text-white text-center mt-6"
        >
          Blending imagination and intelligence into endless adventures.
        </motion.h1>
      </div>
      <Parallax pages={7} className="scrollbar-hide">
        <ParallaxLayer offset={0} factor={1} speed={0.5}>
          {isLarge ? (
            <div className="min-h-screen flex flex-col justify-center items-center bg-[#201d3e] p-36 gap-4 scrollbar-hide">
              <motion.h1
                initial={{ x: -500, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: false, amount: 0.7 }}
                className="text-2xl md:text-6xl font-bold text-white"
              >
                A Game That Never Repeats.
              </motion.h1>
              <motion.h1
                initial={{ x: 500, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: false, amount: 0.8 }}
                className="text-xl md:text-2xl font-bold text-white text-center w-5xl"
              >
                Most story-driven games repeat after one playthrough. Our
                project uses AI to generate new text and visuals every time you
                play — creating endless unique adventures.
              </motion.h1>
            </div>
          ) : (
            <div className="min-h-screen flex flex-col justify-center items-center bg-[#201d3e] p-8 gap-4">
              <h1 className="text-2xl md:text-4xl font-bold text-white text-center">
                A Game That Never Repeats.
              </h1>
              <p className="text-sm md:text-xl font-bold text-white text-center">
                Most story-driven games repeat after one playthrough. Our
                project uses AI to generate new text and visuals every time you
                play — creating endless unique adventures.
              </p>
            </div>
          )}
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 1, end: 2.8 }}
          style={{ ...alignCenter, justifyContent: "flex-start" }}
        >
          <div className="ml-[10%] md:ml-[20%]">
            <p className="text-lg md:text-6xl font-bold text-white glow-purple">
              How it works?
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.2}
          speed={0.7}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className="relative mr-[10%] flex flex-col justify-center items-center width-[25%] bg-white rounded-2xl h-40 w-[200px] p-4 md:w-[300px] md:mr-[30%] drop-shadow-[0_0_28px_rgba(168,85,247,0.35)]">
            <p className="text-sm md:text-2xl font-bold text-[#333652] text-center">
              CHOOSE
            </p>
            <p className="text-xs md:text-lg text-[#333652] text-center">
              Make a decision.
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.8}
          speed={0.7}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className="mr-[10%] flex flex-col justify-center items-center width-[25%] w-[200px] p-4  bg-white rounded-2xl h-40 md:w-[300px] md:mr-[30%] drop-shadow-[0_0_28px_rgba(168,85,247,0.35)]">
            <p className="text-sm md:text-2xl font-bold text-[#333652] text-center">
              NARRATE
            </p>
            <p className="text-xs md:text-lg text-[#333652] text-center">
              AI writes the story beats.
            </p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.0}
          speed={0.7}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className="mr-[10%] flex flex-col justify-center items-center width-[25%] w-[200px] p-4  bg-white rounded-2xl h-40 md:w-[300px] md:mr-[30%] drop-shadow-[0_0_28px_rgba(168,85,247,0.35)]">
            <p className="text-sm md:text-2xl font-bold text-[#333652] text-center">
              VISUALIZE
            </p>
            <p className="text-xs md:text-lg text-[#333652] text-center">
              See the scene come to life.
            </p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.7}
          speed={0.7}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className="mr-[10%] flex flex-col justify-center items-center width-[25%] w-[200px] p-4  bg-white rounded-2xl h-40 md:w-[300px] md:mr-[30%] drop-shadow-[0_0_28px_rgba(168,85,247,0.35)]">
            <p className="text-sm md:text-2xl font-bold text-[#333652] text-center">
              BRANCH
            </p>
            <p className="text-xs md:text-lg text-[#333652] text-center">
              Your choice opens new paths.
            </p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3.8}
          factor={1}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <div className="min-h-screen flex flex-col justify-center items-center p-8 gap-4">
            <h1 className="text-lg md:text-6xl font-bold text-white text-center glow-purple">
              Why This Project Matters?
            </h1>
            {isLarge ? (
              <motion.h1
                initial={{ x: -500, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: false, amount: 0.7 }}
                className="text-2xl font-bold text-white mt-4"
              >
                This project explores both technical and cultural shifts in
                gaming and AI.
              </motion.h1>
            ) : (
              <p className="text-white text-sm md:text-2xl text-center mt-4">
                This project explores both technical and cultural shifts in
                gaming and AI.
              </p>
            )}

            <div className="p-6 flex gap-6">
              {/* Technical */}
              <div className="w-full max-w-md">
                <motion.button
                  onClick={() => setShowTech(!showTech)}
                  whileTap={{ scale: 0.95 }}
                  className="w-[300px] bg-[#dbb501] text-white font-semibold py-2 px-4 rounded"
                >
                  Technical
                </motion.button>

                <AnimatePresence initial={false}>
                  {showTech && (
                    <motion.ul
                      key="tech"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 text-white space-y-1 text-center list-none"
                    >
                      <li>LLMs powering interactive narratives</li>
                      <li>AI-generated visuals in games</li>
                      <li>Real-time pipelines for story + art</li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>

              {/* Non-Technical */}
              <div className="w-full max-w-md">
                <motion.button
                  onClick={() => setShowNonTech(!showNonTech)}
                  whileTap={{ scale: 0.95 }}
                  className="w-[300px] bg-[#dbb501] text-white font-semibold py-2 px-4 rounded"
                >
                  Non-Technical
                </motion.button>

                <AnimatePresence initial={false}>
                  {showNonTech && (
                    <motion.ul
                      key="nontech"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 list-none text-white space-y-1 text-center"
                    >
                      <li>Players as co-authors</li>
                      <li>New storytelling mediums</li>
                      <li>Ethics in AI creativity</li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={4.3}
          factor={1}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <div className="min-h-screen flex flex-col justify-center items-center p-8 gap-4">
            <h1 className="text-lg md:text-6xl font-bold text-white text-center glow-purple">
              Our Vision
            </h1>

            {isLarge ? (
              <motion.h1
                initial={{ x: 500, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: false, amount: 0.7 }}
                className="text-xl md:text-2xl font-bold text-white text-center w-5xl"
              >
                We’re building a framework for AI-powered games that feel alive
                — where visuals and stories adapt endlessly to players. In the
                long term, this could open a new storytelling medium where AI
                and humans co-create together.
              </motion.h1>
            ) : (
              <p className="text-sm md:text-xl font-bold text-white text-center">
                We’re building a framework for AI-powered games that feel alive
                — where visuals and stories adapt endlessly to players. In the
                long term, this could open a new storytelling medium where AI
                and humans co-create together.
              </p>
            )}
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={5}
          factor={1}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <div className="min-h-screen flex flex-col justify-center items-center p-8 gap-4">
            <h1 className="text-lg md:text-6xl font-bold text-white text-center glow-purple">
              Meet Our Team
            </h1>
            <p className="text-[#facc15] font-bold text-2xl">
              Connect with us on linkedIn by scanning the QR codes below
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-[50px] text-[#333652]">
              {MEMBERS.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-xl shadow-md flex flex-col justify-center items-center gap-2 hover:scale-105 transition"
                >
                  <a href={member.qr}>
                    <QRCodeCanvas
                      value={member.qr}
                      size={200}
                      bgColor="#ffffff"
                      fgColor="#333652"
                      level="H"
                      marginSize={4}
                    />
                  </a>
                  <h2 className="text-xl font-bold text-center">
                    {member.name}
                  </h2>
                  <p className="text-center">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={6}
          factor={1}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <div className="min-h-screen flex flex-col justify-center items-center p-8 gap-4">
            <h1 className="text-lg md:text-6xl font-bold text-white text-center glow-purple">
              Ready to co-create your own AI-driven adventure?
            </h1>
            <p className="text-[#facc15] font-bold text-lg mt-5">
              Next sprint, we’ll release a prototype where you can shape your
              own adventure in real time. Follow our journey as we bring
              AI-driven storytelling to life!
            </p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
