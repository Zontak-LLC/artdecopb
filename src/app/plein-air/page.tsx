import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/lib/data";
import { Palette, MapPin, Calendar, Mail } from "lucide-react";

export default function PleinAirPage() {
  return (
    <div className="min-h-screen">
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading
            title="Plein Air Palm Beaches"
            subtitle="Where art meets architecture in the open air."
            light
          />
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center">
                <Palette size={28} className="text-gold" />
              </div>
              <div>
                <h2 className="font-display text-2xl text-charcoal">
                  Paint on Location
                </h2>
                <p className="text-charcoal/50 text-sm">
                  At historic Art Deco sites
                </p>
              </div>
            </div>

            <p className="text-charcoal/70 leading-relaxed mb-6">
              Artists paint on location at historic Art Deco sites throughout the
              Palm Beaches, capturing the beauty of our architectural heritage in
              real time. This program brings together the visual arts and
              historic preservation in a unique and engaging way.
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-8">
              Watch artists work, learn about the buildings they paint, and
              discover the intersection of art and architecture. Plein Air events
              are open to artists of all levels and to the public.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 bg-cream rounded-2xl">
              <div className="flex items-center gap-3 text-charcoal/60">
                <MapPin size={18} className="text-gold shrink-0" />
                <span className="text-sm">Various locations</span>
              </div>
              <div className="flex items-center gap-3 text-charcoal/60">
                <Calendar size={18} className="text-gold shrink-0" />
                <span className="text-sm">Check events for dates</span>
              </div>
              <div className="flex items-center gap-3 text-charcoal/60">
                <Mail size={18} className="text-gold shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}?subject=Plein Air`}
                  className="text-sm text-gold hover:text-copper transition-colors"
                >
                  RSVP
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
