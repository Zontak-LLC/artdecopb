import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";
import { siteConfig } from "@/lib/data";
import { Calendar, MapPin, Clock, Mail } from "lucide-react";

export default function LecturesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-charcoal overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/lecture-audience.jpg"
            alt="Lecture audience at Art Deco Society event"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <SectionHeading
            title="Lectures & Tours"
            subtitle="Free educational programs exploring Art Deco architecture, design, and history."
            light
          />
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-5xl mx-auto">
          {/* Art Deco Afternoons */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-2 h-16 bg-gradient-to-b from-gold to-copper rounded-full shrink-0" />
              <div>
                <h2 className="font-display text-3xl text-charcoal">
                  Art Deco Afternoons
                </h2>
                <p className="text-gold font-display tracking-wider uppercase text-sm mt-1">
                  Free Lecture Series
                </p>
              </div>
            </div>
            <p className="text-charcoal/70 leading-relaxed mb-8 max-w-3xl">
              Join us for our popular free lecture series exploring Art Deco
              architecture, design, and history in the Palm Beaches. Expert
              speakers share fascinating stories of our architectural heritage,
              from the glamorous 1920s to the sleek Streamline Moderne era.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-3 text-charcoal/60">
                <MapPin size={18} className="text-gold shrink-0" />
                <span className="text-sm">
                  Cultural Council of Palm Beach County, 601 Lake Avenue, Lake
                  Worth Beach, FL
                </span>
              </div>
              <div className="flex items-center gap-3 text-charcoal/60">
                <Clock size={18} className="text-gold shrink-0" />
                <span className="text-sm">Various dates, check events</span>
              </div>
              <div className="flex items-center gap-3 text-charcoal/60">
                <Mail size={18} className="text-gold shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-sm text-gold hover:text-copper transition-colors"
                >
                  RSVP via email
                </a>
              </div>
            </div>
          </div>

          {/* Walking Tours */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-2 h-16 bg-gradient-to-b from-copper to-gold rounded-full shrink-0" />
              <div>
                <h2 className="font-display text-3xl text-charcoal">
                  Walking Tours
                </h2>
                <p className="text-gold font-display tracking-wider uppercase text-sm mt-1">
                  Guided Architectural Tours
                </p>
              </div>
            </div>
            <p className="text-charcoal/70 leading-relaxed mb-8 max-w-3xl">
              Explore the Art Deco architectural gems of the Palm Beaches on
              guided walking tours led by ADSPB President Sharon Koskoff and
              other knowledgeable guides. See eyebrows, ziggurats, racing
              stripes, and other distinctive Art Deco elements that make our
              buildings special.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-3 text-charcoal/60">
                <Calendar size={18} className="text-gold shrink-0" />
                <span className="text-sm">Available by appointment and for special events</span>
              </div>
              <div className="flex items-center gap-3 text-charcoal/60">
                <Mail size={18} className="text-gold shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}?subject=Walking Tour Request`}
                  className="text-sm text-gold hover:text-copper transition-colors"
                >
                  Book a tour
                </a>
              </div>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/sharon-koskoff-icads-lecture.jpg"
                alt="Sharon Koskoff speaking at ICADS lecture"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/lecture-audience-2.jpg"
                alt="Audience enjoying a lecture"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/lecture-series-flyer.jpg"
                alt="Art Deco Afternoons lecture series"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* YouTube CTA */}
          <div className="bg-charcoal rounded-3xl p-8 sm:p-12 text-center">
            <h3 className="font-display text-2xl text-cream mb-3">
              Watch Our Lectures Online
            </h3>
            <p className="text-cream/60 mb-6 max-w-md mx-auto">
              Can&apos;t attend in person? Watch recorded lectures on our
              YouTube channel featuring Art Deco architecture and public art.
            </p>
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-charcoal px-8 py-3.5 rounded-full font-display tracking-wider uppercase text-sm hover:bg-cream transition-colors"
            >
              Visit YouTube Channel
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
