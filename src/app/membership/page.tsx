"use client";

import { membershipTiers, siteConfig } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Check, Mail } from "lucide-react";

export default function MembershipPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading
            title="Become a Member"
            subtitle="Support Art Deco preservation and enjoy exclusive benefits."
            light
          />
        </div>
      </section>

      {/* Tiers */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {membershipTiers.map((tier, i) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  tier.name === "Patron"
                    ? "bg-charcoal text-cream ring-2 ring-gold"
                    : "bg-white"
                }`}
              >
                {tier.name === "Patron" && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-charcoal text-xs font-bold px-4 py-1 rounded-full tracking-wider uppercase">
                    Popular
                  </div>
                )}
                <h3
                  className={`font-display text-xl mb-1 ${
                    tier.name === "Patron" ? "text-gold" : "text-charcoal"
                  }`}
                >
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span
                    className={`text-3xl font-display ${
                      tier.name === "Patron" ? "text-cream" : "text-charcoal"
                    }`}
                  >
                    ${tier.price}
                  </span>
                  <span
                    className={`text-sm ${
                      tier.name === "Patron"
                        ? "text-cream/50"
                        : "text-charcoal/50"
                    }`}
                  >
                    /year
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm">
                      <Check
                        size={16}
                        className={`shrink-0 mt-0.5 ${
                          tier.name === "Patron" ? "text-gold" : "text-gold"
                        }`}
                      />
                      <span
                        className={
                          tier.name === "Patron"
                            ? "text-cream/70"
                            : "text-charcoal/60"
                        }
                      >
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`mailto:${siteConfig.contact.email}?subject=Membership: ${tier.name}`}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-full text-sm font-medium tracking-wider uppercase transition-colors ${
                    tier.name === "Patron"
                      ? "bg-gold text-charcoal hover:bg-cream"
                      : "bg-charcoal text-cream hover:bg-gold hover:text-charcoal"
                  }`}
                >
                  <Mail size={14} />
                  Join Now
                </a>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-charcoal/40 text-sm mt-12">
            Contact us at{" "}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-gold hover:text-copper transition-colors"
            >
              {siteConfig.contact.email}
            </a>{" "}
            or call {siteConfig.contact.phone} to join.
          </p>
        </div>
      </section>
    </div>
  );
}
