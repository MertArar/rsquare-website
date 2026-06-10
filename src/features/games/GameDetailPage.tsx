"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import { FaSteam, FaGooglePlay, FaApple } from "react-icons/fa";
import { SiEpicgames } from "react-icons/si";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

import { gamesData } from "@/hooks/gamesData";

type PlatformKey = "steam" | "epic" | "appstore" | "googleplay";

type MediaTab = "screenshots" | "artworks";

type ImageSource = StaticImageData | string;

type PlatformIconItem = {
  icon: ReactNode;
  label: string;
};

type GameDetailPageProps = {
  slug: string;
};

type BrushImageProps = {
  src: ImageSource;
  alt: string;
  className?: string;
};

const platformIcons: Record<PlatformKey, PlatformIconItem> = {
  steam: { icon: <FaSteam />, label: "Steam" },
  epic: { icon: <SiEpicgames />, label: "Epic Games" },
  appstore: { icon: <FaApple />, label: "App Store" },
  googleplay: { icon: <FaGooglePlay />, label: "Google Play" },
};

const getImageSrc = (image: ImageSource) => {
  return typeof image === "string" ? image : image.src;
};

const BrushDivider = () => (
  <div className="mx-auto mt-8 h-5 w-full max-w-xs">
    <svg
      viewBox="0 0 500 45"
      preserveAspectRatio="none"
      className="h-full w-full"
    >
      <path
        d="M12 26 C95 15, 150 34, 232 22 C310 9, 398 18, 488 24"
        fill="none"
        stroke="#d6a83a"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M50 31 C150 20, 255 35, 430 28"
        fill="none"
        stroke="#d6a83a"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  </div>
);

const BrushImage = ({ src, alt, className = "" }: BrushImageProps) => (
  <div className={`relative overflow-hidden rounded-xl ${className}`}>
    <img
      src={getImageSrc(src)}
      alt={alt}
      className="h-full w-full object-cover transition duration-700 hover:scale-105"
    />
  </div>
);

export default function GameDetailPage({ slug }: GameDetailPageProps) {
  const game = gamesData.find((item) => item.slug === slug) || gamesData[0];

  const [activeTab, setActiveTab] = useState<MediaTab>("screenshots");
  const [isTabChanging, setIsTabChanging] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const mediaItems = game.media?.[activeTab] || [];
  const maxCarouselIndex = Math.max(mediaItems.length - 3, 0);

  const isComputerOnlyGame =
    (game.platforms.includes("steam") || game.platforms.includes("epic")) &&
    !game.platforms.includes("googleplay") &&
    !game.platforms.includes("appstore");

  const handleTabChange = (tab: MediaTab) => {
    if (tab === activeTab) return;

    setIsTabChanging(true);

    window.setTimeout(() => {
      setActiveTab(tab);
      setCarouselIndex(0);
      setIsTabChanging(false);
    }, 180);
  };

  const carouselPrev = () => {
    setCarouselIndex((prev) => (prev === 0 ? maxCarouselIndex : prev - 1));
  };

  const carouselNext = () => {
    setCarouselIndex((prev) => (prev >= maxCarouselIndex ? 0 : prev + 1));
  };

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = () => {
    setLightboxIndex((prev) =>
      prev === null || prev === 0 ? mediaItems.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    setLightboxIndex((prev) =>
      prev === null || prev === mediaItems.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#0d0d0d] text-white">
      {/* HERO */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <img
          src={getImageSrc(game.heroImage)}
          alt={game.name}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-b from-transparent via-[#0d0d0d]/70 to-[#0d0d0d]" />

        <div className="relative z-10 flex min-h-screen items-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-28 md:px-10 lg:px-12">
            <Link
              href="/games"
              className="mb-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-white/65 transition hover:text-white"
            >
              <BsArrowLeft />
              Back to games
            </Link>

            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-yellow-400">
              {game.label}
            </p>

            {game.logo ? (
              <img
                src={getImageSrc(game.logo)}
                alt={`${game.name} logo`}
                className="mb-6 max-h-28 w-auto"
              />
            ) : (
              <h1 className="max-w-5xl text-5xl font-black uppercase leading-[0.9] tracking-tight md:text-7xl lg:text-8xl">
                {game.name}
              </h1>
            )}

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
              {game.intro.text}
            </p>
          </div>
        </div>
      </section>

      {/* PLATFORM SECTION */}
      <section className="relative bg-[#0d0d0d] py-24 md:py-32">
        <img
          src={getImageSrc(game.platformBgImage)}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40 saturate-110"
        />

        <div className="absolute inset-0 bg-[#0d0d0d]/55" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0d0d0d] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0d0d0d] to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center md:px-10 lg:px-12">
          <p className="text-sm uppercase tracking-[0.4em] text-white/50">
            Available / Planned Platforms
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            {game.platforms.map((platform) => {
              const item = platformIcons[platform as PlatformKey];
              if (!item) return null;

              return (
                <div
                  key={platform}
                  className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-6 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-yellow-400/50 hover:bg-white/[0.08]"
                >
                  <span className="text-2xl text-white/80 transition group-hover:text-yellow-400">
                    {item.icon}
                  </span>

                  <span className="text-sm uppercase tracking-[0.22em] text-white/75">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DETAILS SECTION */}
      <section className="relative overflow-hidden bg-[#0d0d0d] py-24 md:py-32">
        <div className="absolute inset-0">
          <img
            src={getImageSrc(game.backgroundImage)}
            alt=""
            className="h-full w-full object-cover opacity-40"
          />

          <div className="absolute inset-0 bg-[#0d0d0d]/65" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0d0d0d_60%)]" />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0d0d0d] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0d0d0d] to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.45em] text-[#d6a83a]">
              {game.intro.label || "About The Game"}
            </p>

            <h2 className="mt-5 font-black uppercase leading-[0.95] tracking-wide text-white text-4xl md:text-6xl lg:text-7xl">
              {game.intro.title}
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
              {game.intro.text}
            </p>

            <BrushDivider />
          </div>

          <div className="mt-20 space-y-24 md:mt-28 md:space-y-32">
            {game.sections.map((section, index) => {
              const reverse = index % 2 !== 0;

              return (
                <div
                  key={section.title}
                  className={`grid items-center gap-12 lg:gap-20 ${
                    reverse
                      ? "lg:grid-cols-[0.8fr_1.2fr] lg:[&>*:first-child]:order-2"
                      : "lg:grid-cols-[1.2fr_0.8fr]"
                  }`}
                >
                  <BrushImage
                    src={section.image}
                    alt={section.title}
                    className="h-[300px] md:h-[430px] lg:h-[470px]"
                  />

                  <div className={reverse ? "lg:pr-8" : "lg:pl-4"}>
                    <p className="text-sm font-bold uppercase tracking-[0.45em] text-[#d6a83a]">
                      {section.label}
                    </p>

                    <h3 className="mt-5 max-w-xl font-black leading-[1.1] tracking-wide text-white text-2xl md:text-3xl lg:text-4xl">
                      {section.title}
                    </h3>

                    <p className="mt-6 max-w-xl text-base leading-8 text-white/65 md:text-lg">
                      {section.text}
                    </p>

                    <Link
                      href="/games"
                      className="group mt-8 inline-flex items-center gap-4 text-xs font-black uppercase tracking-[0.35em] text-[#d6a83a] transition hover:text-white"
                    >
                      {index === 0
                        ? "Explore The World"
                        : "Learn The Mechanics"}
                      <BsArrowRight className="text-lg transition duration-300 group-hover:translate-x-2" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MEDIA SECTION */}
      <section className="relative bg-[#0d0d0d] py-24 md:py-32">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0d0d0d] to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.45em] text-[#d6a83a]">
                Media
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase leading-none md:text-5xl">
                Screenshots & Artworks
              </h2>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => handleTabChange("screenshots")}
                className={`rounded-full border px-5 py-3 text-xs font-bold uppercase tracking-[0.25em] transition cursor-pointer ${
                  activeTab === "screenshots"
                    ? "border-[#d6a83a] bg-[#d6a83a] text-black"
                    : "border-white/10 bg-white/[0.03] text-white/60 hover:border-white/30 hover:text-white"
                }`}
              >
                Screenshots
              </button>

              <button
                onClick={() => handleTabChange("artworks")}
                className={`rounded-full border px-5 py-3 text-xs font-bold uppercase tracking-[0.25em] transition cursor-pointer ${
                  activeTab === "artworks"
                    ? "border-[#d6a83a] bg-[#d6a83a] text-black"
                    : "border-white/10 bg-white/[0.03] text-white/60 hover:border-white/30 hover:text-white"
                }`}
              >
                Artworks
              </button>
            </div>
          </div>

          <div className="mt-14 flex items-center gap-4">
            <button
              onClick={carouselPrev}
              disabled={mediaItems.length <= 3}
              className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xl text-white/70 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-25 md:flex cursor-pointer"
            >
              <BsArrowLeft />
            </button>

            <div className="w-full overflow-hidden">
              <div
                className={`flex gap-5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isTabChanging
                    ? "translate-y-4 opacity-0 blur-sm"
                    : "translate-y-0 opacity-100 blur-0"
                }`}
                style={{
                  transform: `translateX(-${
                    carouselIndex * (100 / 3)
                  }%)`,
                }}
              >
                {mediaItems.map((image, index) => (
                  <div
                    key={`${activeTab}-${index}`}
                    className="w-full min-w-0 shrink-0 basis-full sm:basis-[calc((100%-20px)/2)] lg:basis-[calc((100%-40px)/3)]"
                  >
                    <button
                      onClick={() => openLightbox(index)}
                      className="group relative h-[240px] w-full overflow-hidden rounded-xl bg-white/[0.03] text-left md:h-[280px] cursor-pointer"
                    >
                      <img
                        src={getImageSrc(image)}
                        alt={`${game.name} ${activeTab} ${index + 1}`}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/25" />

                      <div className="absolute bottom-4 left-4 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/80">
                          View Image
                        </p>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={carouselNext}
              disabled={mediaItems.length <= 3}
              className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xl text-white/70 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-25 md:flex cursor-pointer"
            >
              <BsArrowRight />
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4 md:hidden">
            <button
              onClick={carouselPrev}
              disabled={mediaItems.length <= 3}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xl text-white/70 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-25 cursor-pointer"
            >
              <BsArrowLeft />
            </button>

            <button
              onClick={carouselNext}
              disabled={mediaItems.length <= 3}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xl text-white/70 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-25 cursor-pointer"
            >
              <BsArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* ADD WISHLIST SECTION */}
      {isComputerOnlyGame && (
        <section className="relative overflow-hidden bg-[#0d0d0d] py-24 md:py-32">
          <img
            src={getImageSrc(game.platformBgImage)}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-40 saturate-110"
          />

          <div className="absolute inset-0 bg-[#0d0d0d]/55" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0d0d0d] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0d0d0d] to-transparent" />

          <div className="relative z-10 mx-auto max-w-7xl px-6 text-center md:px-10 lg:px-12">
            <p className="text-sm uppercase tracking-[0.4em] text-white/50">
              Add Wishlist
            </p>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
              Follow {game.name} on your favorite PC platform and be ready when
              the game becomes available.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
              {game.platforms.includes("steam") && (
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-6 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-yellow-400/50 hover:bg-white/[0.08]"
                >
                  <span className="text-2xl text-white/80 transition group-hover:text-yellow-400">
                    <FaSteam />
                  </span>

                  <span className="text-sm uppercase tracking-[0.22em] text-white/75">
                    Steam
                  </span>
                </a>
              )}

              {game.platforms.includes("epic") && (
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-6 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-yellow-400/50 hover:bg-white/[0.08]"
                >
                  <span className="text-2xl text-white/80 transition group-hover:text-yellow-400">
                    <SiEpicgames />
                  </span>

                  <span className="text-sm uppercase tracking-[0.22em] text-white/75">
                    Epic Games
                  </span>
                </a>
              )}
            </div>
          </div>
        </section>
      )}

      {/* LIGHTBOX */}
      {lightboxIndex !== null && mediaItems.length > 0 && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 px-5">
          <button
            onClick={closeLightbox}
            className="absolute right-6 top-6 z-20 text-4xl text-white/70 transition hover:text-white cursor-pointer"
            aria-label="Close"
          >
            <IoClose />
          </button>

          <button
            onClick={goPrev}
            className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-2xl text-white/70 backdrop-blur-md transition hover:bg-white/10 hover:text-white md:left-8 cursor-pointer"
            aria-label="Previous image"
          >
            <BsArrowLeft />
          </button>

          <img
            src={getImageSrc(mediaItems[lightboxIndex])}
            alt={`${game.name} media ${lightboxIndex + 1}`}
            className="max-h-[82vh] max-w-[92vw] rounded-xl object-contain"
          />

          <button
            onClick={goNext}
            className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-2xl text-white/70 backdrop-blur-md transition hover:bg-white/10 hover:text-white md:right-8 cursor-pointer"
            aria-label="Next image"
          >
            <BsArrowRight />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-white/50">
            {lightboxIndex + 1} / {mediaItems.length}
          </div>
        </div>
      )}
    </main>
  );
}