"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Logo1 from "@/assets/Logo2.png";

type FooterLink = {
  label: string;
  href: string;
};

type FooterGroupProps = {
  title: string;
  titleHref?: string;
  links: FooterLink[];
};

const brandText = "#RSQUARE";

const letterVariants: Variants = {
  initial: {
    color: "#ffffff",
  },
  hover: (i: number) => ({
    color: "#c12030",
    transition: {
      duration: 0.2,
      delay: i * 0.018,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  rest: (i: number) => ({
    color: "#ffffff",
    transition: {
      duration: 0.16,
      delay: i * 0.01,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Footer() {
  const [isBrandHovered, setIsBrandHovered] = useState(false);

  return (
    <footer className="w-full overflow-hidden bg-[#0d0d0d] text-white">
      <div className="mx-auto w-full max-w-[1500px] px-6 py-14 sm:px-8 md:px-10 lg:px-16 lg:py-16">
        {/* TOP CONTACT AREA */}
        <div className="grid grid-cols-1 gap-12 border-t border-white/10 pt-10 lg:grid-cols-12 lg:gap-10 lg:pt-14">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-[11px] uppercase tracking-[0.32em] text-white/38"
            >
              Contact
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              viewport={{ once: true }}
              className="mt-6 max-w-[880px] text-[44px] font-semibold leading-[1.04] tracking-[-0.04em] sm:text-[24px] md:text-[34px] lg:text-[44px]"
            >
              Get in touch for collaborations.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-6 max-w-[560px] text-[15px] leading-7 text-white/58 sm:text-[16px]"
            >
              Whether you want to work with us or simply start a conversation,
              we’re always open to hearing from you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.14 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-[#0d0d0d]"
              >
                Contact Us
                <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-3">
            <FooterGroup
              title="Corporate"
              links={[{ label: "About Us", href: "/about" }]}
            />

            <FooterGroup
              title="Games"
              titleHref="/games"
              links={[
                { label: "Mission: Midnight", href: "/games/mission-midnight" },
                { label: "Ancient Anomaly", href: "/games/ancient-anomaly" },
                { label: "Be Patient", href: "/games/be-patient" },
              ]}
            />

            <FooterGroup
              title="More"
              links={[
                { label: "Career", href: "/career" },
                { label: "Contact", href: "/contact" },
                { label: "Share Your Game", href: "/share-your-game" },
              ]}
            />
          </div>
        </div>

        {/* BRAND AREA */}
        {/* Reesponsive Fixed */}
        <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end lg:gap-6 xl:gap-8">
          <div className="lg:col-span-2 xl:col-span-2 2xl:col-span-3">
            <motion.img
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              viewport={{ once: true }}
              src={Logo1.src}
              alt="RSQUARE Logo"
              className="h-10 w-auto sm:h-12 md:h-14"
              draggable={false}
            />
          </div>

          <div className="min-w-0 lg:col-span-8 xl:col-span-7 2xl:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              viewport={{ once: true }}
              onMouseEnter={() => setIsBrandHovered(true)}
              onMouseLeave={() => setIsBrandHovered(false)}
              className="inline-block max-w-full cursor-default"
            >
              <h2 className="whitespace-nowrap text-[clamp(52px,8.8vw,138px)] font-semibold leading-[0.9] tracking-[-0.09em]">
                {brandText.split("").map((char, index) => (
                  <motion.span
                    key={`${char}-${index}`}
                    custom={index}
                    variants={letterVariants}
                    initial="initial"
                    animate={isBrandHovered ? "hover" : "rest"}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </h2>
            </motion.div>
          </div>

          <div className="lg:col-span-2 lg:justify-self-end xl:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center gap-5 lg:justify-end"
            >
              <a
                href="https://www.linkedin.com/company/rsquare-studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.18em] text-white/60 transition-colors duration-300 hover:text-[#c12030]"
              >
                <FaLinkedinIn className="text-[18px] transition-transform duration-300 group-hover:-translate-y-[1px]" />
              </a>

              <a
                href="https://www.instagram.com/rsquaregamestudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.18em] text-white/60 transition-colors duration-300 hover:text-[#c12030]"
              >
                <FaInstagram className="text-[18px] transition-transform duration-300 group-hover:-translate-y-[1px]" />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.18em] text-white/60 transition-colors duration-300 hover:text-[#c12030]"
              >
                <FaXTwitter className="text-[18px] transition-transform duration-300 group-hover:-translate-y-[1px]" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div className="mt-8 border-t border-white/10 pt-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-[12px] uppercase tracking-[0.18em] text-white/34">
              Copyright RSQUARE 2026. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-[12px] uppercase tracking-[0.18em] text-white/24">
              <span>RSQUARE STUDIO</span>
              <span className="hidden md:inline-block">•</span>
              <span>Independent Game Studio & Publisher</span>

              <span className="hidden md:inline-block">•</span>

              <Link
                href="/privacy-policy"
                className="transition-colors duration-300 hover:text-[#c12030]"
              >
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterGroup({ title, titleHref, links }: FooterGroupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65 }}
      viewport={{ once: true }}
    >
      <div className="flex h-[14px] items-center">
        {titleHref ? (
          <Link
            href={titleHref}
            className="group/title relative inline-flex w-fit items-center text-[11px] leading-none uppercase tracking-[0.3em] text-white/34 transition-colors duration-300 hover:text-white"
          >
            <span>{title}</span>
            <span className="absolute left-0 -bottom-1 h-[1px] w-full origin-left scale-x-0 bg-white transition-transform duration-300 ease-out group-hover/title:scale-x-100" />
          </Link>
        ) : (
          <p className="text-[11px] leading-none uppercase tracking-[0.3em] text-white/34">
            {title}
          </p>
        )}
      </div>

      <div className="mt-5 flex flex-col gap-3">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="group relative inline-flex w-fit text-[14px] leading-6 text-white/68 transition-colors duration-300 hover:text-[#c12030]"
          >
            <span>{link.label}</span>
            <span className="absolute left-0 -bottom-1 h-[1px] w-full origin-left scale-x-0 bg-[#c12030] transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </Link>
        ))}
      </div>
    </motion.div>
  );
}