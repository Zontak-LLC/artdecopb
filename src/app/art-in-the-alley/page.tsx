import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/lib/data";
import { Brush, MapPin, Calendar, Mail } from "lucide-react";

export default function ArtInTheAlleyPage() {
  return (
    <div className="min-h-screen">
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading
            title="Art In The Alley"
            subtitle="Where creativity meets community in the heart of downtown."
            light
          />
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center">
                <Brush size={28} className="text-gold" />
              </div>
              <div>
                <h2 className="font-display text-2xl text-charcoal">
                  Community Art Event
                </h2>
                <p className="text-charcoal/50 text-sm">
                  Live painting, music & Art Deco creativity
                </p>
              </div>
            </div>

            <p className="text-charcoal/70 leading-relaxed mb-6">
              A vibrant community art event featuring local artists, live
              painting, music, and Art Deco-inspired creativity. Art In The Alley
              transforms downtown spaces into open-air galleries celebrating the
              intersection of art and architecture.
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-8">
              Whether you&apos;re an artist, collector, or simply curious, Art In
              The Alley welcomes everyone to experience the creative energy of
              the Palm Beaches&apos; Art Deco heritage brought to life.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 bg-cream rounded-2xl">
              <div className="flex items-center gap-3 text-charcoal/60">
                <MapPin size={18} className="text-gold shrink-0" />
                <span className="text-sm">Downtown Lake Worth Beach</span>
              </div>
              <div className="flex items-center gap-3 text-charcoal/60">
                <Calendar size={18} className="text-gold shrink-0" />
                <span className="text-sm">Check events for dates</span>
              </div>
              <div className="flex items-center gap-3 text-charcoal/60">
                <Mail size={18} className="text-gold shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}?subject=Art In The Alley`}
                  className="text-sm text-gold hover:text-copper transition-colors"
                >
                  Get involved
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
