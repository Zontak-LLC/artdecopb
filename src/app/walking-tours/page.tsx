import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";
import { siteConfig } from "@/lib/data";
import { Footprints, MapPin, Mail, Clock } from "lucide-react";

export default function WalkingToursPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-charcoal overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/deco-building-streamline.jpg"
            alt="Streamline Moderne Art Deco building"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <SectionHeading
            title="Walking Tours"
            subtitle="Explore Art Deco architecture on foot with expert guides."
            light
          />
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center">
                <Footprints size={28} className="text-gold" />
              </div>
              <div>
                <h2 className="font-display text-2xl text-charcoal">
                  Guided Architectural Tours
                </h2>
                <p className="text-charcoal/50 text-sm">
                  Historic Downtown Lake Worth Beach & beyond
                </p>
              </div>
            </div>

            <p className="text-charcoal/70 leading-relaxed mb-6">
              Explore the Art Deco architectural gems of the Palm Beaches on
              guided walking tours. Our knowledgeable guides point out the
              eyebrows, ziggurats, racing stripes, and other distinctive Art
              Deco elements that make our buildings special.
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-8">
              Tours are led by ADSPB President Sharon Koskoff and other
              experienced guides who bring the history and artistry of these
              buildings to life. Available by appointment and for special events.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 bg-cream rounded-2xl">
              <div className="flex items-center gap-3 text-charcoal/60">
                <MapPin size={18} className="text-gold shrink-0" />
                <span className="text-sm">Downtown Lake Worth Beach</span>
              </div>
              <div className="flex items-center gap-3 text-charcoal/60">
                <Clock size={18} className="text-gold shrink-0" />
                <span className="text-sm">By appointment</span>
              </div>
              <div className="flex items-center gap-3 text-charcoal/60">
                <Mail size={18} className="text-gold shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}?subject=Walking Tour`}
                  className="text-sm text-gold hover:text-copper transition-colors"
                >
                  Book a tour
                </a>
              </div>
            </div>
          </div>

          {/* Building Photos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <div className="rounded-2xl overflow-hidden aspect-video">
              <Image
                src="/images/lake-theatre.jpg"
                alt="Lake Theatre, Art Deco landmark"
                width={498}
                height={313}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-video">
              <Image
                src="/images/montgomery-building-day.jpg"
                alt="Montgomery Building"
                width={498}
                height={313}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
