"use client";

import { artDecoElements } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";

export default function ArtDecoElementsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="chevron" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M0 5 L5 0 L10 5" fill="none" stroke="#C8A951" strokeWidth="0.3" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#chevron)" />
          </svg>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <SectionHeading
            title="Art Deco Architectural Elements"
            subtitle="The distinctive features that make Art Deco buildings in the Palm Beaches truly unique."
            light
          />
        </div>
      </section>

      {/* Elements */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-4xl mx-auto space-y-8">
          {artDecoElements.map((element, i) => (
            <motion.div
              key={element.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex gap-6 p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-charcoal flex items-center justify-center">
                <span className="font-display text-gold text-xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <h3 className="font-display text-xl text-charcoal group-hover:text-gold transition-colors mb-2">
                  {element.name}
                </h3>
                <p className="text-charcoal/60 leading-relaxed">
                  {element.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
