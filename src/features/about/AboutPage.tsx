"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { TbRocket } from "react-icons/tb";
import { FaSteam, FaGooglePlay, FaApple } from "react-icons/fa";
import { SiEpicgames } from "react-icons/si";

import Hero1 from "@/assets/cta.png";

type PlatformItem = {
  number: string;
  title: string;
  label: string;
  icon: ReactNode;
  text: string;
};

export default function AboutPage() {
  const platforms: PlatformItem[] = [
    {
      number: "01",
      title: "PC Games",
      label: "Immersive desktop experiences",
      icon: (
        <div className="flex items-center gap-3 text-3xl text-white">
          <FaSteam />
          <SiEpicgames />
        </div>
      ),
      text: "We design atmospheric PC games with strong worldbuilding, cinematic pacing and mechanics that reward focus.",
    },
    {
      number: "02",
      title: "Mobile Games",
      label: "Sharp and replayable loops",
      icon: (
        <div className="flex items-center gap-3 text-3xl text-white">
          <FaGooglePlay />
          <FaApple />
        </div>
      ),
      text: "We build mobile games around clean interaction, readable feedback and compact experiences players can return to.",
    },
    {
      number: "03",
      title: "Publishing",
      label: "From identity to release",
      icon: <TbRocket className="text-3xl text-white" />,
      text: "We help distinctive games reach the right audience through positioning, platform strategy and publishing support.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[82vh] px-5 sm:px-8 lg:px-16 flex items-center pt-24 sm:pt-28 lg:pt-36">
        <div className="absolute inset-0 pointer-events-none">
          <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-black tracking-[-0.12em] text-white/[0.025] whitespace-nowrap select-none">
            ABOUT US
          </h1>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1500px]">
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-7 text-sm sm:text-base uppercase tracking-[0.45em] text-[#ef4645]"
          >
            RSQUARE STUDIO
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 42 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08 }}
            className="max-w-6xl text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.88] tracking-[-0.08em]"
          >
            We craft games with mood, pressure and soul.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="mt-10 max-w-2xl border-l border-[#c12030] pl-6"
          >
            <p className="text-white/58 text-base sm:text-lg leading-relaxed">
              RSQUARE is an independent game studio focused on atmospheric
              worlds, sharp mechanics and experiences that stay with the player
              after the screen fades to black.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="relative px-5 sm:px-8 lg:px-16 pt-10 pb-32 sm:pt-12 sm:pb-40 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2" />
          <div className="absolute right-0 bottom-0 h-[380px] w-[380px] rounded-full bg-white/[0.04] blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1500px]">
          <div className="mb-14 mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <motion.p
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.65 }}
                className="mb-6 text-[12px] font-medium uppercase tracking-[0.42em] text-white/35"
              >
                What We Do
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.8 }}
                className="max-w-5xl text-[46px] font-black leading-[0.9] tracking-[-0.075em] sm:text-[68px] lg:text-[90px]"
              >
                Games built for different screens, same obsession.
              </motion.h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {platforms.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 44 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group relative min-h-[440px] overflow-hidden rounded-[34px] bg-[#121212] p-7 sm:p-8"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_34%)] opacity-70" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />

                <div className="absolute right-6 top-5 text-[92px] font-black leading-none tracking-[-0.12em] text-white/[0.035] transition-all duration-500 group-hover:scale-105 group-hover:text-white/[0.075] sm:text-[120px]">
                  {item.number}
                </div>

                <div className="relative z-10 flex h-full min-h-[380px] flex-col">
                  <div className="mb-10 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-white text-3xl">
                      {item.icon}
                    </div>

                    <span className="text-[11px] uppercase tracking-[0.28em] text-white/28 transition-all duration-500 group-hover:text-white/60">
                      {item.number}
                    </span>
                  </div>

                  <div className="mt-auto overflow-visible">
                    <p className="mb-4 text-[12px] uppercase tracking-[0.24em] text-[#ef4645] transition-all duration-500 group-hover:translate-x-2 group-hover:tracking-[0.32em] group-hover:text-white/80">
                      {item.label}
                    </p>

                    <h3 className="text-[38px] font-black leading-[0.92] tracking-[-0.06em] transition-all duration-500 group-hover:-translate-y-2 group-hover:text-[#ef4645] sm:text-[46px]">
                      {item.title}
                    </h3>

                    <p className="mt-6 max-w-[360px] translate-y-5 text-[15px] leading-7 text-white/45 opacity-80 transition-all duration-700 group-hover:translate-y-0 group-hover:text-white/70 group-hover:opacity-100">
                      {item.text}
                    </p>

                    <div className="mt-7 h-[1px] w-0 bg-[#ef4645] transition-all duration-700 group-hover:w-24" />
                  </div>
                </div>

                <div className="absolute inset-0 translate-y-full bg-white/[0.045] transition-transform duration-700 ease-out group-hover:translate-y-0" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* PARALLAX CTA */}
      <section className="relative w-full overflow-hidden bg-[#0d0d0d] text-white">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: `url(${Hero1.src})` }}
        />

        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(13,13,13,0.25),rgba(13,13,13,0.75))]" />

        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 py-20 sm:px-8 md:px-10 md:py-24 lg:px-16 lg:py-28">
          <div className="grid grid-cols-1 gap-12 border-t border-white/10 pt-10 lg:grid-cols-12 lg:gap-16 lg:pt-14">
            <div className="lg:col-span-8">
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65 }}
                viewport={{ once: true, amount: 0.35 }}
                className="text-[11px] font-medium uppercase tracking-[0.34em] text-white/45"
              >
                Our Games
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.05 }}
                viewport={{ once: true, amount: 0.35 }}
                className="mt-6 max-w-[850px] text-[38px] font-semibold leading-[0.96] tracking-[-0.045em] sm:text-[50px] md:text-[68px] lg:text-[82px] xl:text-[94px]"
              >
                Enter the worlds
                <br />
                we are building.
              </motion.h2>
            </div>

            <div className="lg:col-span-4 lg:flex lg:items-end">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.12 }}
                viewport={{ once: true, amount: 0.35 }}
              >
                <p className="max-w-[420px] text-[15px] leading-7 text-white/68 sm:text-[16px]">
                  Discover our current projects, upcoming releases and the
                  stories we are shaping for PC and mobile platforms.
                </p>

                <Link
                  href="/games"
                  className="group mt-10 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#0d0d0d] transition-all duration-300 hover:scale-[1.02]"
                >
                  Explore Games
                  <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}