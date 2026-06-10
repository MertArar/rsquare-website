"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="w-full bg-[#0d0d0d] text-white py-28 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1100px] mx-auto">
        {/* BIG STATEMENT */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-[34px] md:text-[52px] leading-[1.2] font-semibold tracking-tight"
        >
          We don’t just build games. <br />
          <span className="text-white/40">
            We craft controlled experiences.
          </span>
        </motion.h2>

        {/* SMALL LINE */}
        <div className="w-20 h-[2px] bg-[#c12030] mt-8" />

        {/* PARAGRAPH */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-10 max-w-[600px] text-white/60 text-[16px] leading-relaxed"
        >
          We are a small, focused team building PC and mobile games with a strong
          emphasis on gameplay clarity, system design, and performance. No
          unnecessary complexity. No noise.
        </motion.p>

        {/* HORIZONTAL DIVIDER */}
        <div className="w-full h-px bg-white/10 my-16" />

        {/* SPLIT CONTENT */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-medium mb-4">Focus</h3>
            <p className="text-white/60 leading-relaxed text-[15px]">
              Strategy, systems, and interaction. We design mechanics that feel
              intentional and responsive.
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-medium mb-4">Approach</h3>
            <p className="text-white/60 leading-relaxed text-[15px]">
              Lean production. Fast iteration. Every feature must justify its
              existence.
            </p>
          </motion.div>
        </div>

        {/* FOOT LINE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 flex items-center justify-between text-white/40 text-sm"
        >
          <span />
          <span>Based in Türkiye</span>
        </motion.div>
      </div>
    </section>
  );
}