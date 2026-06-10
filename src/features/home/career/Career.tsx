"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

import CareerBackground from "@/assets/cta.png";

export default function Career() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0d0d0d] text-white">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${CareerBackground.src})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2),rgba(0,0,0,0.6))]" />

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 py-20 sm:px-8 md:px-10 md:py-24 lg:px-16 lg:py-28">
        <div className="grid grid-cols-1 gap-12 border-t border-white/10 pt-10 lg:grid-cols-12 lg:gap-16 lg:pt-14">
          {/* LEFT */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              viewport={{ once: true, amount: 0.35 }}
              className="text-[11px] font-medium uppercase tracking-[0.34em] text-white/40"
            >
              Career
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05 }}
              viewport={{ once: true, amount: 0.35 }}
              className="mt-6 max-w-[820px] text-[38px] font-semibold leading-[0.96] tracking-[-0.045em] sm:text-[50px] md:text-[68px] lg:text-[82px] xl:text-[94px]"
            >
              Build with people
              <br />
              who care about
              <br />
              doing it right.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1 }}
              viewport={{ once: true, amount: 0.35 }}
              className="mt-7 max-w-[620px] text-[15px] leading-7 text-white/68 sm:text-[16px] md:text-[17px]"
            >
              We value thoughtful people, sharp execution, and a mindset built on
              growth, responsibility, and creative ambition.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15 }}
              viewport={{ once: true, amount: 0.35 }}
              className="mt-10"
            >
              <Link
                href="/career"
                className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#0d0d0d] transition-all duration-300 hover:scale-[1.02]"
              >
                Explore Careers
                <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
              </Link>
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex h-full flex-col justify-between rounded-[28px] border border-white/10 bg-black/30 p-6 backdrop-blur-[2px] sm:p-8 md:p-10"
            >
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/38">
                  What matters here
                </p>
              </div>

              <div className="mt-10 space-y-8">
                <div className="border-b border-white/10 pb-6">
                  <p className="text-[22px] font-semibold tracking-[-0.03em] text-white sm:text-[26px]">
                    Craft
                  </p>
                  <p className="mt-3 max-w-[360px] text-[15px] leading-7 text-white/62">
                    Care for detail, quality, and clear execution.
                  </p>
                </div>

                <div className="border-b border-white/10 pb-6">
                  <p className="text-[22px] font-semibold tracking-[-0.03em] text-white sm:text-[26px]">
                    Ownership
                  </p>
                  <p className="mt-3 max-w-[360px] text-[15px] leading-7 text-white/62">
                    People who think deeply and take responsibility.
                  </p>
                </div>

                <div>
                  <p className="text-[22px] font-semibold tracking-[-0.03em] text-white sm:text-[26px]">
                    Growth
                  </p>
                  <p className="mt-3 max-w-[360px] text-[15px] leading-7 text-white/62">
                    A place to improve, contribute, and build with purpose.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}