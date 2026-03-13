"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Animated background pattern */}
      <div className="absolute inset-0">
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-charcoal/80 via-charcoal to-charcoal" />

        {/* Art Deco sunburst — pure static SVG to avoid hydration issues */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="#C8A951" strokeWidth="0.5" fill="none">
            <line x1="500" y1="500" x2="1100" y2="500" />
            <line x1="500" y1="500" x2="1091" y2="604" />
            <line x1="500" y1="500" x2="1064" y2="704" />
            <line x1="500" y1="500" x2="1020" y2="796" />
            <line x1="500" y1="500" x2="960" y2="876" />
            <line x1="500" y1="500" x2="887" y2="940" />
            <line x1="500" y1="500" x2="800" y2="985" />
            <line x1="500" y1="500" x2="704" y2="1009" />
            <line x1="500" y1="500" x2="604" y2="1010" />
            <line x1="500" y1="500" x2="500" y2="1100" />
            <line x1="500" y1="500" x2="396" y2="1010" />
            <line x1="500" y1="500" x2="296" y2="1009" />
            <line x1="500" y1="500" x2="200" y2="985" />
            <line x1="500" y1="500" x2="113" y2="940" />
            <line x1="500" y1="500" x2="40" y2="876" />
            <line x1="500" y1="500" x2="-20" y2="796" />
            <line x1="500" y1="500" x2="-64" y2="704" />
            <line x1="500" y1="500" x2="-91" y2="604" />
            <line x1="500" y1="500" x2="-100" y2="500" />
            <line x1="500" y1="500" x2="-91" y2="396" />
            <line x1="500" y1="500" x2="-64" y2="296" />
            <line x1="500" y1="500" x2="-20" y2="204" />
            <line x1="500" y1="500" x2="40" y2="124" />
            <line x1="500" y1="500" x2="113" y2="60" />
            <line x1="500" y1="500" x2="200" y2="15" />
            <line x1="500" y1="500" x2="296" y2="-9" />
            <line x1="500" y1="500" x2="396" y2="-10" />
            <line x1="500" y1="500" x2="500" y2="-100" />
            <line x1="500" y1="500" x2="604" y2="-10" />
            <line x1="500" y1="500" x2="704" y2="-9" />
            <line x1="500" y1="500" x2="800" y2="15" />
            <line x1="500" y1="500" x2="887" y2="60" />
            <line x1="500" y1="500" x2="960" y2="124" />
            <line x1="500" y1="500" x2="1020" y2="204" />
            <line x1="500" y1="500" x2="1064" y2="296" />
            <line x1="500" y1="500" x2="1091" y2="396" />
            <circle cx="500" cy="500" r="200" />
            <circle cx="500" cy="500" r="300" strokeWidth="0.3" />
            <circle cx="500" cy="500" r="400" strokeWidth="0.2" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Decorative top element */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-gold" />
          <div className="w-4 h-4 rotate-45 border border-gold" />
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-gold" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-display text-gold tracking-[0.3em] uppercase text-sm sm:text-base mb-4"
        >
          Celebrating 39 Years &middot; 1987&ndash;2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-display text-cream text-4xl sm:text-6xl lg:text-7xl tracking-wide leading-tight"
        >
          Art Deco Society
          <br />
          <span className="text-gold">of the Palm Beaches</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 text-cream/60 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Promoting education, preservation and awareness of Twentieth Century
          Art, Architecture & Design in the Palm Beaches.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/events"
            className="group bg-gold text-charcoal px-8 py-4 rounded-full font-display tracking-wider uppercase text-sm hover:bg-cream transition-colors flex items-center gap-2"
          >
            Upcoming Events
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <Link
            href="/membership"
            className="group border border-gold/50 text-gold px-8 py-4 rounded-full font-display tracking-wider uppercase text-sm hover:bg-gold/10 transition-colors"
          >
            Become a Member
          </Link>
        </motion.div>

        {/* Bottom ornament */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20 flex items-center justify-center"
        >
          <div className="flex flex-col items-center gap-2">
            <div className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent" />
            <p className="text-gold/40 text-xs tracking-[0.2em] uppercase">
              A 501(c)3 Historic Preservation Organization
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
