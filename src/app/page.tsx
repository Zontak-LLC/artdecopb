import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import EventCard from "@/components/EventCard";
import { events, artDecoElements, siteConfig, boardMembers } from "@/lib/data";
import Link from "next/link";
import { ArrowRight, Award, BookOpen, Building2, Users } from "lucide-react";

export default function HomePage() {
  const upcomingEvents = events
    .filter((e) => e.status === "upcoming")
    .slice(0, 3);

  return (
    <>
      {/* Hero - full viewport */}
      <div className="-mt-20">
        <HeroSection />
      </div>

      {/* Mission / About Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Preserving Our Heritage"
            subtitle="For nearly four decades, we have been the leading voice for Art Deco preservation in South Florida."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Building2,
                title: "Architecture",
                desc: "Documenting and protecting Art Deco buildings throughout the Palm Beaches.",
              },
              {
                icon: BookOpen,
                title: "Education",
                desc: "Free lectures, walking tours, and publications sharing our architectural heritage.",
              },
              {
                icon: Users,
                title: "Community",
                desc: "Events, exhibitions, and programs bringing people together through art and design.",
              },
              {
                icon: Award,
                title: "Preservation",
                desc: "Advocating for the protection of our historic twentieth century landmarks.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center p-8 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <item.icon size={28} className="text-gold" />
                </div>
                <h3 className="font-display text-lg text-charcoal mb-3">
                  {item.title}
                </h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Upcoming Events"
            subtitle="Join us for lectures, tours, and celebrations of Art Deco culture."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, i) => (
              <EventCard key={event.id} event={event} index={i} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-gold font-display tracking-wider uppercase text-sm hover:text-copper transition-colors"
            >
              View All Events
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Art Deco Elements Preview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#C8A951" strokeWidth="0.3" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <SectionHeading
            title="Art Deco Elements"
            subtitle="Discover the distinctive architectural features that define Art Deco style in the Palm Beaches."
            light
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {artDecoElements.slice(0, 6).map((element, i) => (
              <div
                key={element.id}
                className="p-6 rounded-2xl border border-gold/10 bg-gold/5 hover:bg-gold/10 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-gold/30 font-display text-4xl leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-cream text-lg mb-2 group-hover:text-gold transition-colors">
                      {element.name}
                    </h3>
                    <p className="text-cream/50 text-sm leading-relaxed">
                      {element.description.length > 120
                        ? element.description.slice(0, 120) + "..."
                        : element.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/art-deco-elements"
              className="inline-flex items-center gap-2 text-gold font-display tracking-wider uppercase text-sm hover:text-cream transition-colors"
            >
              Explore All Elements
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Our Leadership"
            subtitle="Meet the dedicated team preserving Art Deco heritage in the Palm Beaches."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {boardMembers.map((member) => (
              <div
                key={member.id}
                className="text-center p-8 rounded-2xl bg-white shadow-sm"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold/20 to-copper/20 flex items-center justify-center">
                  <span className="font-display text-gold text-2xl">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="font-display text-lg text-charcoal">
                  {member.name}
                </h3>
                <p className="text-gold text-sm mt-1">{member.role}</p>
                <p className="text-charcoal/60 text-sm mt-3 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gold via-copper to-gold">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display text-3xl text-charcoal mb-4">
            Award-Winning Preservation
          </h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto mb-8">
            Winner of the Florida Book Awards Silver Medal (Visual Arts) and
            FAPA Silver Medal (Education).
          </p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="text-center">
              <p className="font-display text-4xl text-charcoal">
                {siteConfig.years}
              </p>
              <p className="text-charcoal/60 text-sm">Years</p>
            </div>
            <div className="w-px h-12 bg-charcoal/20 hidden sm:block" />
            <div className="text-center">
              <p className="font-display text-4xl text-charcoal">2</p>
              <p className="text-charcoal/60 text-sm">Silver Medals</p>
            </div>
            <div className="w-px h-12 bg-charcoal/20 hidden sm:block" />
            <div className="text-center">
              <p className="font-display text-4xl text-charcoal">501(c)3</p>
              <p className="text-charcoal/60 text-sm">Nonprofit</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-navy text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1000 400">
            <defs>
              <pattern id="cta-rays" width="1000" height="400" patternUnits="userSpaceOnUse">
                <path d="M500 400 L500 0" stroke="#C8A951" strokeWidth="0.5" />
                <path d="M500 400 L250 0" stroke="#C8A951" strokeWidth="0.5" />
                <path d="M500 400 L750 0" stroke="#C8A951" strokeWidth="0.5" />
                <path d="M500 400 L0 100" stroke="#C8A951" strokeWidth="0.5" />
                <path d="M500 400 L1000 100" stroke="#C8A951" strokeWidth="0.5" />
                <path d="M500 400 L100 0" stroke="#C8A951" strokeWidth="0.5" />
                <path d="M500 400 L900 0" stroke="#C8A951" strokeWidth="0.5" />
                <path d="M500 400 L0 250" stroke="#C8A951" strokeWidth="0.5" />
                <path d="M500 400 L1000 250" stroke="#C8A951" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="1000" height="400" fill="url(#cta-rays)" />
          </svg>
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl text-cream mb-4">
            Join Our Mission
          </h2>
          <p className="text-cream/60 mb-8">
            Help us preserve the Art Deco architectural heritage of the Palm
            Beaches for future generations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/membership"
              className="bg-gold text-charcoal px-8 py-4 rounded-full font-display tracking-wider uppercase text-sm hover:bg-cream transition-colors"
            >
              Become a Member
            </Link>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="border border-cream/30 text-cream px-8 py-4 rounded-full font-display tracking-wider uppercase text-sm hover:bg-cream/10 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
