"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { QRCodeCanvas } from "qrcode.react";
import Image from "next/image";

const MEMBERS = [
  { name: "Andy Li", qr: "https://www.linkedin.com/in/guanhui-li-855299a0/" },
  { name: "Gerazel Castro", qr: "https://www.linkedin.com/in/gerazel-castro/" },
  {
    name: "Cassandra Crawford",
    qr: "https://www.linkedin.com/in/cassandra-crawford/",
  },
  {
    name: "Anandjit Kaur",
    qr: "https://www.linkedin.com/in/anandjit-kaur-30a513286/",
  },
];

// Respect user reduced motion
const shouldAutoPlay = () =>
  typeof window !== "undefined" &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function Home() {
  const [isLarge, setIsLarge] = useState(false); // md breakpoint
  const [showTech, setShowTech] = useState(false);
  const [showNonTech, setShowNonTech] = useState(false);
  const [autoPlayVideo, setAutoPlayVideo] = useState(true);

  useEffect(() => {
    const checkSize = () => setIsLarge(window.innerWidth >= 768);
    checkSize();
    setAutoPlayVideo(shouldAutoPlay());
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  // ---------------- Sections ----------------
  const Hero = () => (
    <section className="relative flex items-center justify-center min-h-[100svh] md:min-h-screen snap-start bg-[#333652] overflow-hidden pt-[env(safe-area-inset-top)]">
      <video
        src="/video/test.mp4"
        autoPlay={autoPlayVideo}
        loop={autoPlayVideo}
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden
      />
      <div className="absolute inset-x-0 bottom-0 h-28 md:h-40 bg-gradient-to-b from-black/0 to-[#201d3e]" />
      <div className="relative z-10 text-center px-4">
        <h1 className="font-bold text-white glow-purple text-[clamp(2rem,7vw,5rem)] leading-tight">
          Unleash Your Creativity
        </h1>
        <h2 className="mt-2 font-semibold text-yellow-300 glow-yellow text-[clamp(1.25rem,6vw,3.5rem)] leading-tight">
          with AI-Driven Story Game
        </h2>
      </div>
    </section>
  );

  const LogoStrip = () => (
    <section className="min-h-[100svh] md:min-h-screen snap-start flex flex-col justify-center items-center bg-[#201d3e] p-8 md:p-20 gap-6">
      <div className="mx-auto w-28 h-28 sm:w-36 sm:h-36 md:w-80 md:h-80 rounded-full overflow-hidden ring-2 ring-white/10 shadow-xl shadow-purple-500/20">
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
        initial={{ x: -60, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, amount: 0.6 }}
        className="text-white text-center mt-2 font-semibold text-[clamp(1rem,3.5vw,1.75rem)]"
      >
        Blending imagination and intelligence into endless adventures.
      </motion.h1>
    </section>
  );

  const Intro = () => (
    <section className="bg-[#201d3e] min-h-[100svh] snap-start flex flex-col items-center justify-center gap-6 px-4">
      <h2 className="text-white font-extrabold text-[clamp(1.25rem,6vw,2.5rem)] text-center">
        A Game That Never Repeats.
      </h2>
      <p className="text-white/90 max-w-xl text-center text-[clamp(0.9rem,3.5vw,1.1rem)]">
        Most story-driven games repeat after one playthrough. Our project uses
        AI to generate new text and visuals every time you play — creating
        endless unique adventures.
      </p>
    </section>
  );

  const StepCard = ({ title, desc }) => (
    <div className="relative flex flex-col justify-center items-center bg-white rounded-2xl h-36 sm:h-40 w-[220px] sm:w-[260px] md:w-[300px] p-4 drop-shadow-[0_0_28px_rgba(168,85,247,0.35)]">
      <p className="text-[#333652] font-extrabold text-sm sm:text-base md:text-2xl tracking-wide">
        {title}
      </p>
      <p className="text-[#333652] text-xs sm:text-sm md:text-lg text-center">
        {desc}
      </p>
    </div>
  );

  const Steps = () => (
    <section className="bg-[#201d3e] min-h-[100svh] snap-start flex flex-col items-center justify-center gap-6 px-4">
      <h3 className="text-white font-extrabold text-[clamp(1.125rem,5vw,2rem)]">
        How it works?
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <StepCard title="CHOOSE" desc="Make a decision." />
        <StepCard title="NARRATE" desc="AI writes the story beats." />
        <StepCard title="VISUALIZE" desc="See the scene come to life." />
        <StepCard title="BRANCH" desc="Your choice opens new paths." />
      </div>
    </section>
  );

  const WhySection = () => (
    <section className="min-h-[100svh] md:min-h-screen snap-start flex flex-col justify-center items-center p-6 md:p-8 gap-4">
      <h1 className="text-white text-center glow-purple font-extrabold text-[clamp(1.25rem,6vw,3.5rem)]">
        Why This Project Matters?
      </h1>
      <p className="text-white text-center mt-2 max-w-4xl text-[clamp(0.95rem,3.5vw,1.25rem)]">
        This project explores both technical and cultural shifts in gaming and
        AI.
      </p>

      <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-4">
        <div className="w-full max-w-xs sm:max-w-sm">
          <motion.button
            onClick={() => setShowTech(!showTech)}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-[#dbb501] text-white font-semibold py-2 px-4 rounded"
          >
            Technical
          </motion.button>
          <AnimatePresence initial={false}>
            {showTech && (
              <motion.ul
                key="tech"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="mt-3 text-white space-y-1 text-center"
              >
                <li>LLMs powering interactive narratives</li>
                <li>AI-generated visuals in games</li>
                <li>Real-time pipelines for story + art</li>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        <div className="w-full max-w-xs sm:max-w-sm">
          <motion.button
            onClick={() => setShowNonTech(!showNonTech)}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-[#dbb501] text-white font-semibold py-2 px-4 rounded"
          >
            Non-Technical
          </motion.button>
          <AnimatePresence initial={false}>
            {showNonTech && (
              <motion.ul
                key="nontech"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="mt-3 text-white space-y-1 text-center"
              >
                <li>Players as co-authors</li>
                <li>New storytelling mediums</li>
                <li>Ethics in AI creativity</li>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );

  const VisionSection = () => (
    <section className="min-h-[100svh] md:min-h-screen snap-start flex flex-col justify-center items-center p-6 md:p-8 gap-4">
      <h1 className="text-white text-center glow-purple font-extrabold text-[clamp(1.25rem,6vw,3.5rem)]">
        Our Vision
      </h1>
      <p className="text-white text-center max-w-4xl text-[clamp(0.95rem,3.5vw,1.25rem)]">
        We’re building a framework for AI-powered games that feel alive — where
        visuals and stories adapt endlessly to players. In the long term, this
        could open a new storytelling medium where AI and humans co-create
        together.
      </p>
    </section>
  );

  const TeamSection = () => (
    <section className="min-h-[100svh] md:min-h-screen snap-start flex flex-col">
      <div className="flex-1 overflow-y-auto flex flex-col justify-center items-center p-6 md:p-8 gap-4">
        <h1 className="text-white text-center glow-purple font-extrabold text-[clamp(1.25rem,6vw,3.5rem)]">
          Meet Our Team
        </h1>
        <p className="text-[#facc15] font-bold text-base sm:text-lg md:text-2xl text-center">
          Connect with us on LinkedIn by scanning the QR codes below
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-6 text-[#333652]">
          {MEMBERS.map((m) => (
            <div
              key={m.name}
              className="bg-white p-4 rounded-xl shadow-md flex flex-col justify-center items-center gap-2 hover:scale-[1.02] transition"
            >
              <a href={m.qr} aria-label={`Open LinkedIn profile of ${m.name}`}>
                <QRCodeCanvas
                  value={m.qr}
                  size={isLarge ? 200 : 140}
                  bgColor="#ffffff"
                  fgColor="#333652"
                  level="H"
                  marginSize={2}
                />
              </a>
              <h2 className="text-lg md:text-xl font-bold text-center">
                {m.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const CTASection = () => (
    <section className="min-h-[100svh] md:min-h-screen snap-start flex flex-col justify-center items-center p-6 md:p-8 gap-4 pb-[env(safe-area-inset-bottom)]">
      <h1 className="text-white text-center glow-purple font-extrabold text-[clamp(1.1rem,6vw,3rem)]">
        Ready to co-create your own AI-driven adventure?
      </h1>
      <p className="text-[#facc15] font-bold text-center text-[clamp(0.95rem,3.5vw,1.25rem)] mt-2 max-w-3xl">
        Visit our booth to experience{" "}
        <span className="text-white text-center glow-purple font-extrabold">AIVENTURE</span> in action! Discover how
        we’re bringing AI-driven storytelling to life and explore the creativity
        behind our interactive demo.
      </p>
    </section>
  );

  // ---------------- Mobile (scroll-snap) ----------------
  if (!isLarge) {
    return (
      <div
        className="
          bg-[#201d3e]
          h-[100svh]
          overflow-y-auto
          snap-y snap-mandatory
          md:h-auto md:overflow-visible md:snap-none
        "
      >
        <Hero />
        <LogoStrip />
        <Intro />
        <Steps />
        <WhySection />
        <VisionSection />
        <TeamSection />
        <CTASection />
      </div>
    );
  }

  // ---------------- Desktop/Tablet (parallax) ----------------
  const alignCenter = { display: "flex", alignItems: "center", width: "100%" };

  return (
    <div className="bg-[#201d3e] overflow-hidden">
      <Hero />
      <LogoStrip />

      <Parallax pages={7} className="scrollbar-hide">
        {/* Title */}
        <ParallaxLayer offset={0} factor={1} speed={0.5}>
          <div className="min-h-screen flex flex-col justify-center items-center bg-[#201d3e] p-8 md:p-20 gap-4">
            <motion.h1
              initial={{ x: -120, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-white font-extrabold text-center text-[clamp(1.25rem,5vw,3.5rem)]"
            >
              A Game That Never Repeats.
            </motion.h1>
            <motion.p
              initial={{ x: 120, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-white/90 text-center max-w-4xl text-[clamp(1rem,2.5vw,1.25rem)]"
            >
              Most story-driven games repeat after one playthrough. Our project
              uses AI to generate new text and visuals every time you play —
              creating endless unique adventures.
            </motion.p>
          </div>
        </ParallaxLayer>

        {/* Sticky heading */}
        <ParallaxLayer
          sticky={{ start: 1, end: 2.8 }}
          style={{ ...alignCenter, justifyContent: "flex-start" }}
        >
          <div className="ml-[12%] md:ml-[18%]">
            <p className="text-white glow-purple font-extrabold text-[clamp(1.25rem,5vw,3.5rem)]">
              How it works?
            </p>
          </div>
        </ParallaxLayer>

        {/* Steps */}
        <ParallaxLayer
          offset={1.2}
          speed={0.7}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className="mr-[12%] md:mr-[22%]">
            <StepCard title="CHOOSE" desc="Make a decision." />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.8}
          speed={0.7}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className="mr-[12%] md:mr-[22%]">
            <StepCard title="NARRATE" desc="AI writes the story beats." />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.0}
          speed={0.7}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className="mr-[12%] md:mr-[22%]">
            <StepCard title="VISUALIZE" desc="See the scene come to life." />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.7}
          speed={0.7}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className="mr-[12%] md:mr-[22%]">
            <StepCard title="BRANCH" desc="Your choice opens new paths." />
          </div>
        </ParallaxLayer>

        {/* Why / Vision / Team / CTA */}
        <ParallaxLayer
          offset={3.8}
          factor={1}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <WhySection />
        </ParallaxLayer>

        <ParallaxLayer
          offset={4.3}
          factor={1}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <VisionSection />
        </ParallaxLayer>

        <ParallaxLayer
          offset={5}
          factor={1}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <TeamSection />
        </ParallaxLayer>

        <ParallaxLayer
          offset={6}
          factor={1}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <CTASection />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
