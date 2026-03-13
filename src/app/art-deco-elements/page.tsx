"use client";

import { artDecoElements } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ArtDecoElementsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-charcoal overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/crest-theatre-night.jpg"
            alt="Crest Theatre at night showcasing Art Deco architecture"
            fill
            className="object-cover opacity-20"
            priority
          />
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
