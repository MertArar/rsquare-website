"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import type { StaticImageData } from "next/image";
import { FaSteam, FaPause, FaPlay } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

import Hero1 from "@/assets/Hero1.png";
import Hero2 from "@/assets/Hero2.png";
import Hero3 from "@/assets/Hero3.png";

import MimiLogo from "@/assets/mimi.png";
import GameLogo from "@/assets/AA.png";
import PatientLogo from "@/assets/bp.png";

type HeroSlide = {
  id: number;
  sectionClass: string;
  background: StaticImageData;
  logo: StaticImageData;
  title: ReactNode;
  description: string;
};

const slides: HeroSlide[] = [
  {
    id: 1,
    sectionClass: "hero1",
    background: Hero1,
    logo: MimiLogo,
    title: (
      <>
        Uncover the Truth{" "}
        <span className="text-[#ef4645]">Behind Midnight</span>
      </>
    ),
    description:
      "Step into a world of deception where every player has a hidden role and every decision matters. Form alliances, uncover lies, and outplay your opponents in a tense battle of strategy, trust, and survival.",
  },
  {
    id: 2,
    sectionClass: "hero2",
    background: Hero2,
    logo: GameLogo,
    title: (
      <>
        Solve the Mysteries{" "}
        <span className="text-[#ef4645]">Within the Museum</span>
      </>
    ),
    description:
      "Explore a mysterious museum filled with ancient artifacts, hidden clues, and unsolved puzzles. As you move through its halls, uncover secrets, solve intricate mysteries, and reveal the truth behind what lies within.",
  },
  {
    id: 3,
    sectionClass: "hero3",
    background: Hero3,
    logo: PatientLogo,
    title: (
      <>
        Stay Patient.{" "}
        <span className="text-[#ef4645]">Or end up a patient.</span>
      </>
    ),
    description:
      "Face your fears in a spine-chilling adventure through a gothic estate. As darkness falls, uncover the sinister secrets that lurk within its walls and fight to survive the night.",
  },
];

const SLIDE_DURATION = 10000;
const PROGRESS_INTERVAL = 100;
const PROGRESS_STEP = 100 / (SLIDE_DURATION / PROGRESS_INTERVAL);

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentSlideRef = useRef(0);
  const progressRef = useRef(0);

  const goToSlide = useCallback((index: number) => {
    currentSlideRef.current = index;
    progressRef.current = 0;

    setCurrentSlide(index);
    setProgress(0);
  }, []);

  const goToNextSlide = useCallback(() => {
    const nextIndex =
      currentSlideRef.current === slides.length - 1
        ? 0
        : currentSlideRef.current + 1;

    goToSlide(nextIndex);
  }, [goToSlide]);

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      const nextProgress = progressRef.current + PROGRESS_STEP;

      if (nextProgress >= 100) {
        goToNextSlide();
        return;
      }

      progressRef.current = nextProgress;
      setProgress(nextProgress);
    }, PROGRESS_INTERVAL);

    return () => window.clearInterval(interval);
  }, [isPaused, goToNextSlide]);

  const activeSlide = slides[currentSlide];

  return (
    <section
      className={`${activeSlide.sectionClass} relative w-full min-h-screen bg-[#0d0d0d] overflow-hidden`}
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.id}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
          >
            <img
              src={activeSlide.background.src}
              alt={`Hero Background ${activeSlide.id}`}
              className="w-full h-full object-cover"
              draggable={false}
            />

            {/* Main dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90" />

            {/* Bottom color transition */}
            <div className="absolute inset-x-0 bottom-0 h-[180px] sm:h-[220px] md:h-[260px] bg-gradient-to-b from-transparent via-[#0d0d0d]/70 to-[#0d0d0d]" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex min-h-screen items-center px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 pt-[120px] pb-[90px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mx-auto flex w-full max-w-[1400px] flex-col items-center justify-center gap-14 sm:gap-16 md:gap-20 lg:flex-row lg:gap-32 xl:gap-40 2xl:gap-48"
          >
            {/* LEFT */}
            <div className="flex w-full justify-center lg:w-auto lg:justify-end">
              <motion.img
                src={activeSlide.logo.src}
                alt="Hero Logo"
                className="w-[220px] sm:w-[280px] md:w-[340px] lg:w-[440px] xl:w-[500px] h-auto object-contain select-none"
                draggable={false}
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
              />
            </div>

            {/* RIGHT */}
            <div className="w-full max-w-xl text-center lg:max-w-2xl lg:text-left lg:pl-10 xl:pl-16 2xl:pl-20">
              <motion.h1
                className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {activeSlide.title}
              </motion.h1>

              <motion.p
                className="mb-8 text-sm text-gray-300 sm:text-base md:text-lg lg:max-w-lg"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.28 }}
              >
                {activeSlide.description}
              </motion.p>

              <motion.div
                className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.36 }}
              >
                <button className="rounded-lg bg-[#ef4645] px-6 py-3 font-medium text-white transition hover:opacity-90 cursor-pointer">
                  Discover
                </button>

                <button className="flex items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-white transition hover:bg-white/10 cursor-pointer">
                  Add Wishlist
                  <FaSteam className="text-lg" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* INDICATORS + PAUSE */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
        <div className="flex items-center gap-5 sm:gap-6">
          {/* DOTS / PROGRESS */}
          <div className="flex items-center gap-3 sm:gap-4">
            {slides.map((slide, index) => {
              const isActive = index === currentSlide;

              return (
                <motion.button
                  key={slide.id}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => goToSlide(index)}
                  initial={false}
                  animate={{
                    width: isActive ? 64 : 10,
                  }}
                  transition={{
                    duration: 0.38,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`relative h-[10px] overflow-hidden rounded-full cursor-pointer ${
                    isActive
                      ? "bg-white/20"
                      : "bg-white/40 hover:bg-white/55"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      key={`progress-${currentSlide}`}
                      className="absolute left-0 top-0 h-full rounded-full bg-[#ef4645]"
                      initial={{ width: 0, opacity: 0.95 }}
                      animate={{ width: `${progress}%`, opacity: 1 }}
                      transition={{ duration: 0.1, ease: "linear" }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* PAUSE / PLAY */}
          <button
            type="button"
            onClick={() => setIsPaused((prev) => !prev)}
            aria-label={isPaused ? "Play slider" : "Pause slider"}
            className="ml-2 sm:ml-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 cursor-pointer"
          >
            {isPaused ? (
              <FaPlay className="text-sm" />
            ) : (
              <FaPause className="text-sm" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}