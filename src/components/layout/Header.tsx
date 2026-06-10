"use client";

import { useEffect, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiArrowUpRight,
  FiSend,
  FiChevronDown,
  FiGlobe,
} from "react-icons/fi";

import LogoLight from "@/assets/logotype1.png";
import LogoDark from "@/assets/l2.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [gamesOpen, setGamesOpen] = useState(false);
  const [mobileGamesOpen, setMobileGamesOpen] = useState(false);
  const [activeLang, setActiveLang] = useState("EN");
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  const langRef = useRef<HTMLDivElement | null>(null);
  const gamesRef = useRef<HTMLDivElement | null>(null);

  const navItems = [
    { name: "ABOUT US", to: "/about" },
    { name: "GAMES", to: "/games", hasDropdown: true },
    { name: "CONTACT", to: "/contact" },
    { name: "CAREER", to: "/career" },
  ];

  const gameItems = [
    { name: "Mission: Midnight", to: "/games/mission-midnight" },
    { name: "Ancient Anomaly", to: "/games/ancient-anomaly" },
    { name: "Be Patient", to: "/games/be-patient" },
  ];

  const actionItems = [
    {
      name: "Share Your Game",
      to: "/share-your-game",
      icon: <FiSend className="text-[17px]" />,
    },
  ];

  const languages = ["EN", "TR"];

  useEffect(() => {
    setMenuOpen(false);
    setLangOpen(false);
    setGamesOpen(false);
    setMobileGamesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;

      if (langRef.current && !langRef.current.contains(target)) {
        setLangOpen(false);
      }

      if (gamesRef.current && !gamesRef.current.contains(target)) {
        setGamesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentLogo: StaticImageData = scrolled ? LogoDark : LogoLight;

  const mobileMenuVariants: Variants = {
    hidden: { opacity: 0, y: -14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.28, ease: "easeOut", staggerChildren: 0.05 },
    },
    exit: {
      opacity: 0,
      y: -12,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.24, ease: "easeOut" },
    },
  };

  const dropdownVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 14,
      scale: 0.96,
      filter: "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.24,
        ease: "easeOut",
        staggerChildren: 0.045,
      },
    },
    exit: {
      opacity: 0,
      y: 10,
      scale: 0.97,
      filter: "blur(5px)",
      transition: { duration: 0.18, ease: "easeInOut" },
    },
  };

  const dropdownItemVariants: Variants = {
    hidden: { opacity: 0, x: -8 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  const mobileGamesVariants: Variants = {
    hidden: {
      opacity: 0,
      height: 0,
      y: -8,
    },
    visible: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: {
        duration: 0.26,
        ease: "easeOut",
        staggerChildren: 0.04,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      y: -8,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  const textColor = scrolled ? "text-[#231f20]" : "text-[#fff]";

  const linkBase = `group relative inline-flex items-center cursor-pointer text-[16px] xl:text-[17px] font-medium transition-all duration-300 ${textColor}`;

  const underline =
    "after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#c12030] after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100";

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/75 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
          : "bg-transparent backdrop-blur-0"
      }`}
    >
      <div className="mx-auto flex h-[80px] w-full max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex shrink-0 items-center">
          <Link href="/" className="hidden lg:flex items-center cursor-pointer">
            <Image
              src={currentLogo}
              alt="RSQUARE Logo"
              className="h-[56px] xl:h-[64px] w-auto object-contain select-none transition-all duration-300"
              draggable={false}
              priority
            />
          </Link>

          <Link href="/" className="flex lg:hidden items-center cursor-pointer">
            <Image
              src={currentLogo}
              alt="RSQUARE Logo"
              className="h-[40px] sm:h-[46px] w-auto object-contain select-none transition-all duration-300"
              draggable={false}
              priority
            />
          </Link>
        </div>

        <nav className="hidden xl:flex items-center gap-9 2xl:gap-11 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => {
            if (item.hasDropdown) {
              return (
                <div
                  key={item.name}
                  ref={gamesRef}
                  className="relative"
                  onMouseEnter={() => setGamesOpen(true)}
                  onMouseLeave={() => setGamesOpen(false)}
                >
                  <Link href={item.to} className={`${linkBase} ${underline} gap-1.5`}>
                    <span>{item.name}</span>
                    <motion.span
                      animate={{ rotate: gamesOpen ? 180 : 0 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="flex items-center justify-center"
                    >
                      <FiChevronDown className="text-[15px]" />
                    </motion.span>
                  </Link>

                  <AnimatePresence>
                    {gamesOpen && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute left-1/2 top-[calc(100%+18px)] w-[260px] -translate-x-1/2 overflow-hidden rounded-[24px] border border-white/40 bg-white/90 p-2 shadow-[0_24px_70px_rgba(0,0,0,0.16)] backdrop-blur-2xl"
                      >
                        <div className="px-4 py-3 border-b border-black/5">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-black/40">
                            Our Games
                          </p>
                        </div>

                        <div className="pt-2">
                          {gameItems.map((game) => (
                            <motion.div
                              key={game.name}
                              variants={dropdownItemVariants}
                            >
                              <Link
                                href={game.to}
                                className="group flex items-center justify-between rounded-[18px] px-4 py-3 text-[14px] font-medium text-[#231f20] transition-all duration-300 hover:bg-[#231f20] hover:text-white"
                              >
                                <span>{game.name}</span>
                                <FiArrowUpRight className="text-[15px] opacity-0 transition-all duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:opacity-100" />
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.to}
                className={`${linkBase} ${underline}`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden xl:flex items-center gap-6 2xl:gap-7">
          {actionItems.map((item) => (
            <Link
              key={item.name}
              href={item.to}
              className={`${linkBase} gap-2 ${underline}`}
            >
              <span>{item.name}</span>
              <span className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]">
                {item.icon}
              </span>
            </Link>
          ))}

          <div ref={langRef} className="relative ml-1 cursor-pointer">
            <button
              type="button"
              onClick={() => setLangOpen((prev) => !prev)}
              className={`flex items-center gap-2 px-2 py-1 text-[15px] cursor-pointer transition-all duration-300 ${linkBase}`}
            >
              <FiGlobe className="text-[16px]" />
              <span className="font-semibold">{activeLang}</span>
              <motion.span
                animate={{ rotate: langOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
              >
                <FiChevronDown className="text-[15px]" />
              </motion.span>
            </button>

            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="absolute right-0 top-[calc(100%+14px)] min-w-[180px] overflow-hidden rounded-[22px] border border-white/40 bg-white/85 shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur-2xl"
                >
                  <div className="border-b border-black/5 px-4 py-3">
                    <div className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-black/45">
                      <FiGlobe className="text-[13px]" />
                      Language
                    </div>
                  </div>

                  <div className="p-2">
                    {languages.map((lang) => {
                      const isActiveLang = activeLang === lang;

                      return (
                        <button
                          key={lang}
                          type="button"
                          onClick={() => {
                            setActiveLang(lang);
                            setLangOpen(false);
                          }}
                          className={`flex w-full cursor-pointer items-center justify-between rounded-2xl px-4 py-3 text-[14px] font-medium transition-all duration-200 ${
                            isActiveLang
                              ? "bg-[#231f20] text-white shadow-[0_10px_24px_rgba(35,31,32,0.18)]"
                              : "text-[#231f20] hover:bg-black/5"
                          }`}
                        >
                          <span>{lang}</span>
                          {isActiveLang && (
                            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/75">
                              Selected
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
          className={`xl:hidden relative z-[70] flex cursor-pointer items-center justify-center transition-colors duration-300 ${
            scrolled ? "text-[#231f20]" : "text-white"
          }`}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={menuOpen ? "close" : "menu"}
              initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className={`flex items-center justify-center transition-colors duration-300 ${
                scrolled ? "text-[#231f20]" : "text-white"
              }`}
            >
              {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="xl:hidden"
          >
            <div className="mx-4 sm:mx-6 mt-1 overflow-hidden rounded-[28px] border border-white/10 bg-[#231f20] text-white shadow-[0_25px_70px_rgba(0,0,0,0.2)]">
              <div className="px-6 sm:px-7 py-7 sm:py-8">
                <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/45">
                    Navigation
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/35">
                    Menu
                  </span>
                </div>

                <div className="flex flex-col gap-5">
                  {navItems.map((item) => {
                    if (item.hasDropdown) {
                      return (
                        <motion.div key={item.name} variants={itemVariants}>
                          <button
                            type="button"
                            onClick={() => setMobileGamesOpen((prev) => !prev)}
                            className="group flex w-full cursor-pointer items-center justify-between"
                          >
                            <span className="relative inline-flex items-center gap-2 text-[22px] font-medium text-white">
                              {item.name}
                              <motion.span
                                animate={{
                                  rotate: mobileGamesOpen ? 180 : 0,
                                }}
                                transition={{
                                  duration: 0.22,
                                  ease: "easeOut",
                                }}
                              >
                                <FiChevronDown className="text-[18px]" />
                              </motion.span>
                              <span className="absolute left-0 -bottom-1.5 h-[2px] w-full origin-left scale-x-0 bg-[#c12030] transition-transform duration-300 ease-out group-hover:scale-x-100" />
                            </span>
                            <FiArrowUpRight className="text-white transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
                          </button>

                          <AnimatePresence>
                            {mobileGamesOpen && (
                              <motion.div
                                variants={mobileGamesVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="overflow-hidden"
                              >
                                <div className="mt-4 ml-3 rounded-[22px] border border-white/10 bg-white/[0.04] p-2">
                                  {gameItems.map((game) => (
                                    <motion.div
                                      key={game.name}
                                      variants={dropdownItemVariants}
                                    >
                                      <Link
                                        href={game.to}
                                        className="group flex items-center justify-between rounded-[16px] px-4 py-3 text-[15px] font-medium text-white/78 transition-all duration-300 hover:bg-white/8 hover:text-white"
                                      >
                                        <span>{game.name}</span>
                                        <FiArrowUpRight className="text-[15px] opacity-50 transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:opacity-100" />
                                      </Link>
                                    </motion.div>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    }

                    return (
                      <motion.div key={item.name} variants={itemVariants}>
                        <Link
                          href={item.to}
                          className="group flex cursor-pointer items-center justify-between"
                        >
                          <span className="relative inline-block text-[22px] font-medium text-white">
                            {item.name}
                            <span className="absolute left-0 -bottom-1.5 h-[2px] w-full origin-left scale-x-0 bg-[#c12030] transition-transform duration-300 ease-out group-hover:scale-x-100" />
                          </span>
                          <FiArrowUpRight className="text-white transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="my-7 h-px w-full bg-white/10" />

                <div className="mb-4">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/45">
                    Quick Access
                  </span>
                </div>

                <div className="flex flex-col gap-4">
                  {actionItems.map((item) => (
                    <motion.div key={item.name} variants={itemVariants}>
                      <Link
                        href={item.to}
                        className="group flex cursor-pointer items-center justify-between"
                      >
                        <span className="relative inline-flex items-center gap-2 text-[17px] font-medium text-white">
                          {item.name}
                          <span className="absolute left-0 -bottom-1.5 h-[2px] w-full origin-left scale-x-0 bg-[#c12030] transition-transform duration-300 ease-out group-hover:scale-x-100" />
                        </span>
                        <span className="text-white transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]">
                          {item.icon}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="my-7 h-px w-full bg-white/10" />

                <motion.div variants={itemVariants}>
                  <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
                    <FiGlobe />
                    <span>Language</span>
                  </div>

                  <div className="flex items-center gap-3">
                    {languages.map((lang) => {
                      const isActiveLang = activeLang === lang;

                      return (
                        <button
                          key={lang}
                          type="button"
                          onClick={() => setActiveLang(lang)}
                          className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-300 ${
                            isActiveLang
                              ? "border-[#c12030] bg-[#c12030] text-white"
                              : "border-white/15 bg-white/5 text-white hover:border-[#c12030]"
                          }`}
                        >
                          {lang}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}