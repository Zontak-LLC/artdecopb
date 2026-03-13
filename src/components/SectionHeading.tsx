"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  title,
  subtitle,
  light = false,
}: {
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      {/* Deco ornament */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <div
          className={`h-px w-16 ${light ? "bg-gold/40" : "bg-gold/30"}`}
        />
        <div
          className={`w-3 h-3 rotate-45 border ${
            light ? "border-gold/60" : "border-gold/40"
          }`}
        />
        <div
          className={`h-px w-16 ${light ? "bg-gold/40" : "bg-gold/30"}`}
        />
      </div>
      <h2
        className={`font-display text-3xl sm:text-4xl lg:text-5xl tracking-wide ${
          light ? "text-cream" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg max-w-2xl mx-auto ${
            light ? "text-cream/70" : "text-charcoal/60"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
