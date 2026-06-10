import type { StaticImageData } from "next/image";

/* MISSION MIDNIGHT */
import hero1 from "@/assets/Hero1.png";
import hero4 from "@/assets/Hero4.png";
import hero7 from "@/assets/Hero7.png";
import hero8 from "@/assets/mimihero.png";
import gameImg1 from "@/assets/Hero1.png";

/* ANCIENT */
import hero2 from "@/assets/Hero2.png";
import hero5 from "@/assets/Hero5.png";
import gameImg2 from "@/assets/Hero2.png";
import bg2 from "@/assets/bg2.png";

/* BE PATIENT */
import hero3 from "@/assets/Hero3.png";
import hero6 from "@/assets/Hero6.png";
import gameImg3 from "@/assets/Hero3.png";

import detailImg1 from "@/assets/Hero4.png";
import detailImg2 from "@/assets/Hero4.png";

export type PlatformKey = "steam" | "epic" | "appstore" | "googleplay";

export type GameMedia = {
  screenshots: StaticImageData[];
  artworks: StaticImageData[];
};

export type GameSection = {
  image: StaticImageData;
  label: string;
  title: string;
  text: string;
};

export type GameIntro = {
  label: string;
  title: string;
  text: string;
};

export type GameDataItem = {
  slug: string;
  name: string;
  label: string;
  heroImage: StaticImageData;
  platformBgImage: StaticImageData;
  backgroundImage: StaticImageData;
  logo: StaticImageData | null;
  platforms: PlatformKey[];
  intro: GameIntro;
  sections: GameSection[];
  media: GameMedia;
};

export const gamesData: GameDataItem[] = [
  {
    slug: "mission-midnight",
    name: "Mission: Midnight",
    label: "Stealth Horror",
    heroImage: hero1,
    platformBgImage: hero4,
    backgroundImage: hero1,
    logo: null,
    platforms: ["steam", "epic"],
    intro: {
      label: "About the game",
      title: "A quiet night. A dangerous mission.",
      text: "Mission: Midnight blends atmospheric tension, mystery and stealth-driven gameplay into a cinematic experience built for players who love dark, immersive worlds.",
    },
    sections: [
      {
        image: hero8,
        label: "World",
        title: "Built around atmosphere",
        text: "Every corner of the environment is designed to feel silent, heavy and uncertain. Light, shadow and sound guide the player through the experience.",
      },
      {
        image: hero8,
        label: "Gameplay",
        title: "Move carefully, survive quietly",
        text: "The game rewards patience, observation and timing. Instead of rushing forward, players must read the environment and act with precision.",
      },
    ],
    media: {
      screenshots: [hero1, hero4, hero7, hero8, gameImg1, detailImg1],
      artworks: [hero8, hero7, hero4],
    },
  },

  {
    slug: "ancient-anomaly",
    name: "Ancient Anomaly",
    label: "Mystery Adventure",
    heroImage: hero2,
    platformBgImage: hero5,
    backgroundImage: bg2,
    logo: null,
    platforms: ["steam", "epic"],
    intro: {
      label: "About the game",
      title: "A museum where history refuses to stay still.",
      text: "Ancient Anomaly takes place inside a strange museum filled with mythological traces, forgotten artifacts and impossible architectural spaces.",
    },
    sections: [
      {
        image: gameImg2,
        label: "Setting",
        title: "A museum shaped by myth",
        text: "Inspired by ancient legends, the world combines classical forms with unsettling anomalies that slowly transform the player’s perception.",
      },
      {
        image: detailImg2,
        label: "Experience",
        title: "Explore, observe, question",
        text: "The experience focuses on discovery and visual storytelling, creating a mysterious journey through spaces that feel both historical and unreal.",
      },
    ],
    media: {
      screenshots: [hero2, hero5, gameImg2, detailImg2],
      artworks: [hero5, hero2, detailImg2],
    },
  },

  {
    slug: "be-patient",
    name: "Be Patient",
    label: "Trap Platformer",
    heroImage: hero3,
    platformBgImage: hero6,
    backgroundImage: hero3,
    logo: null,
    platforms: ["steam", "googleplay", "appstore"],
    intro: {
      label: "About the game",
      title: "Patience is not optional.",
      text: "Be Patient is a trap-focused game built around timing, frustration, surprise and persistence. Every mistake teaches something painful.",
    },
    sections: [
      {
        image: gameImg3,
        label: "Design",
        title: "Simple rules, cruel surprises",
        text: "The game uses readable environments and unexpected traps to create tension without relying on overly complex mechanics.",
      },
      {
        image: detailImg1,
        label: "Challenge",
        title: "Fail, learn, continue",
        text: "Each level is designed to punish impatience while rewarding careful movement, memory and control.",
      },
    ],
    media: {
      screenshots: [hero3, hero6, gameImg3, detailImg1],
      artworks: [hero6, hero3, detailImg1],
    },
  },
];