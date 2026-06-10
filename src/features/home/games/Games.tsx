"use client";

import { Fragment, useRef } from "react";
import type { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

import Hero1 from "@/assets/Hero1.png";
import Hero2 from "@/assets/Hero2.png";
import Hero3 from "@/assets/Hero3.png";

type GameStore = {
  name: string;
  href: string;
};

type GameItem = {
  id: string;
  title: string;
  category: string;
  image: StaticImageData;
  description: string;
  stores: GameStore[];
};

const games: GameItem[] = [
  {
    id: "01",
    title: "Mission Midnight",
    category: "Narrative Mystery",
    image: Hero1,
    description:
      "A cinematic experience built around atmosphere, discovery, and controlled tension.",
    stores: [
      { name: "Steam", href: "#" },
      { name: "Epic Games", href: "#" },
    ],
  },
  {
    id: "02",
    title: "Ancient Anomaly",
    category: "Narrative Mystery",
    image: Hero2,
    description:
      "A disciplined challenge shaped by timing, pressure, and clean visual direction.",
    stores: [
      { name: "Google Play", href: "#" },
      { name: "App Store", href: "#" },
    ],
  },
  {
    id: "03",
    title: "Be Patient",
    category: "Precision Platformer",
    image: Hero3,
    description:
      "A darker world with a distinctive tone, focused on pacing, mood, and memorable identity.",
    stores: [
      { name: "Steam", href: "#" },
      { name: "Epic Games", href: "#" },
    ],
  },
];

export default function Games() {
  const heroRef = useRef<HTMLElement | null>(null);

  return (
    <div className="w-full overflow-hidden bg-[#0d0d0d] text-white">
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative h-[100svh] min-h-[760px] w-full overflow-hidden"
      >
        {/* Parallax Background */}
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: `url(${Hero1.src})` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Extra Gradient */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.18),rgba(0,0,0,0.72))]" />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1500px] items-end px-6 pb-16 sm:px-8 md:px-10 md:pb-20 lg:px-16 lg:pb-24">
          <div className="max-w-[950px]">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="mb-5 text-[11px] font-medium uppercase tracking-[0.34em] text-white/70 sm:text-[12px]"
            >
              Our Worlds
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05 }}
              viewport={{ once: true }}
              className="max-w-[900px] text-[40px] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-[54px] md:text-[72px] lg:text-[96px] xl:text-[112px]"
            >
              Discover our games.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12 }}
              viewport={{ once: true }}
              className="mt-6 max-w-[640px] text-[15px] leading-7 text-white/70 sm:text-[16px] md:text-[17px]"
            >
              Built with atmosphere, direction, and identity in mind. Explore the
              projects that define our creative vision.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18 }}
              viewport={{ once: true }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#games-showcase"
                className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#0d0d0d] transition-all duration-300 hover:scale-[1.02]"
              >
                Explore Games
                <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
              </a>

              <div className="text-[12px] uppercase tracking-[0.24em] text-white/45">
                3 Titles
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-t border-white/10">
        <div className="mx-auto grid w-full max-w-[1500px] grid-cols-1 gap-8 px-6 py-16 sm:px-8 md:px-10 lg:grid-cols-12 lg:px-16 lg:py-24">
          <div className="lg:col-span-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/40">
              Selected Projects
            </p>
          </div>

          <div className="lg:col-span-9">
            <p className="max-w-[900px] text-[20px] leading-[1.5] tracking-[-0.02em] text-white/82 sm:text-[24px] md:text-[28px]">
              Each title is shaped with a distinct tone, visual character, and
              deliberate sense of direction.
            </p>
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section
        id="games-showcase"
        className="mx-auto flex w-full max-w-[1500px] flex-col gap-16 px-6 pb-24 sm:px-8 md:px-10 md:gap-24 lg:px-16 lg:pb-32"
      >
        {games.map((game, index) => {
          const isReverse = index % 2 === 1;

          return (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-20 xl:gap-32"
            >
              <div
                className={`lg:col-span-7 ${
                  isReverse ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#121212]">
                  <div className="absolute inset-0 z-10 bg-[linear-gradient(to_top,rgba(0,0,0,0.45),rgba(0,0,0,0.05))]" />

                  <img
                    src={game.image.src}
                    alt={game.title}
                    className="h-[320px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] sm:h-[420px] md:h-[520px] lg:h-[640px]"
                    draggable={false}
                  />

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 translate-y-full bg-[linear-gradient(to_top,rgba(0,0,0,0.96),rgba(0,0,0,0.72),transparent)] px-6 py-8 transition-transform duration-500 ease-out group-hover:translate-y-0 sm:px-8 sm:py-10">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-white/75">
                      Coming Soon in 2026
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`lg:col-span-5 ${
                  isReverse ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="max-w-[560px]">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-white/38">
                    {game.id} / {game.category}
                  </p>

                  <h2 className="mt-5 text-[34px] font-semibold leading-[1.02] tracking-[-0.04em] sm:text-[42px] md:text-[56px]">
                    {game.title}
                  </h2>

                  <p className="mt-6 text-[15px] leading-7 text-white/64 sm:text-[16px]">
                    {game.description}
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2">
                    {game.stores.map((store, storeIndex) => (
                      <Fragment key={store.name}>
                        <a
                          href={store.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/store relative inline-flex items-center text-[12px] font-medium uppercase tracking-[0.18em] text-white/55 transition-colors duration-300 hover:text-[#ef4645]"
                        >
                          <span>{store.name}</span>
                          <span className="absolute left-0 -bottom-1 h-[1px] w-full origin-left scale-x-0 bg-[#ef4645] transition-transform duration-300 ease-out group-hover/store:scale-x-100" />
                        </a>

                        {storeIndex !== game.stores.length - 1 && (
                          <span className="text-white/20">|</span>
                        )}
                      </Fragment>
                    ))}
                  </div>

                  <div className="mt-8 h-px w-full max-w-[420px] bg-white/10" />

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      className="group inline-flex items-center gap-3 rounded-full border border-white/15 px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-[#0d0d0d] cursor-pointer"
                    >
                      View Project
                      <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
                    </button>

                    <span className="text-[12px] uppercase tracking-[0.24em] text-white/35">
                      In Development
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* END CTA */}
      <section>
        <div className="mx-auto flex w-full max-w-[1500px] flex-col items-start justify-between gap-8 px-6 py-18 sm:px-8 md:px-10 lg:flex-row lg:items-end lg:px-16 lg:py-24">
          <div className="max-w-[760px]">
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/38">
              More To Come
            </p>

            <h3 className="mt-5 text-[30px] font-semibold leading-[1.08] tracking-[-0.035em] sm:text-[40px] md:text-[52px]">
              New worlds are already taking shape.
            </h3>
          </div>

          <button
            type="button"
            className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#0d0d0d] transition-all duration-300 hover:scale-[1.02] cursor-pointer"
          >
            Stay Connected
            <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
          </button>
        </div>

        <div className="border-t border-white/10" />
      </section>
    </div>
  );
}