"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";

const lines = ["Ideas are easy.", "The right ones", "deserve more."];

const letterVariants: Variants = {
  initial: {
    color: "#ffffff",
  },
  hover: (i: number) => ({
    color: "#c12030",
    transition: {
      duration: 0.22,
      delay: i * 0.015,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  rest: (i: number) => ({
    color: "#ffffff",
    transition: {
      duration: 0.18,
      delay: i * 0.008,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Publish() {
  const [isTitleHovered, setIsTitleHovered] = useState(false);

  let globalIndex = 0;

  return (
    <section className="relative w-full overflow-hidden bg-[#0d0d0d] text-white">
      <div className="pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1500px] flex-col justify-center px-6 py-20 sm:px-8 md:px-10 lg:px-16">
        <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true, amount: 0.4 }}
            className="text-[11px] font-medium uppercase tracking-[0.34em] text-white/36"
          >
            Publish With Us
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            viewport={{ once: true, amount: 0.35 }}
            onMouseEnter={() => setIsTitleHovered(true)}
            onMouseLeave={() => setIsTitleHovered(false)}
            className="mt-6 cursor-default text-[44px] font-semibold leading-[0.92] tracking-[-0.055em] sm:text-[58px] md:text-[78px] lg:text-[102px] xl:text-[120px]"
          >
            {lines.map((line, lineIndex) => (
              <span key={lineIndex} className="block">
                {line.split("").map((char, charIndex) => {
                  const currentIndex = globalIndex++;

                  return (
                    <motion.span
                      key={`${lineIndex}-${charIndex}`}
                      custom={currentIndex}
                      variants={letterVariants}
                      initial="initial"
                      animate={isTitleHovered ? "hover" : "rest"}
                      className="inline-block whitespace-pre"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  );
                })}
              </span>
            ))}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true, amount: 0.35 }}
            className="mt-8 max-w-[650px] text-[15px] leading-7 text-white/60 sm:text-[16px] md:text-[17px]"
          >
            We build our own games, and we also help strong concepts become
            focused, refined, and publishable with the right direction.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16 }}
            viewport={{ once: true, amount: 0.35 }}
            className="mt-10"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#0d0d0d] transition-all duration-300 hover:scale-[1.02]"
            >
              Share Your Project
              <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.12 }}
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto mt-20 w-full max-w-[1100px] border-t border-white/10 pt-10"
        >
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            {[
              { title: "Vision", text: "Bring the idea." },
              { title: "Direction", text: "Shape it properly." },
              { title: "Publishing", text: "Launch with intent." },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center justify-center"
              >
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/34">
                  {item.title}
                </p>
                <p className="mt-3 text-[18px] font-medium tracking-[-0.02em] text-white/88">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}