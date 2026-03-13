import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Youtube, Facebook } from "lucide-react";
import { siteConfig } from "@/lib/data";
import DecoPattern from "./DecoPattern";

export default function Footer() {
  return (
    <footer className="relative bg-charcoal text-cream overflow-hidden">
      <DecoPattern className="opacity-5" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo-adspb-small.jpg"
                alt="ADSPB Logo"
                width={40}
                height={40}
                className="rounded-full border-2 border-gold/30"
              />
              <div>
                <p className="font-display text-cream text-sm tracking-widest uppercase">
                  {siteConfig.shortName}
                </p>
                <p className="text-gold/60 text-xs">
                  Est. {siteConfig.founded}
                </p>
              </div>
            </div>
            <p className="text-cream/60 text-sm leading-relaxed max-w-xs">
              {siteConfig.mission}
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/40 hover:text-gold transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/40 hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-gold tracking-widest uppercase text-sm mb-6">
              Explore
            </h3>
            <div className="space-y-3">
              {[
                { href: "/events", label: "Upcoming Events" },
                { href: "/art-deco-elements", label: "Art Deco Elements" },
                { href: "/lectures", label: "Lectures & Tours" },
                { href: "/membership", label: "Become a Member" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-cream/60 hover:text-gold transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-gold tracking-widest uppercase text-sm mb-6">
              Contact
            </h3>
            <div className="space-y-4">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3 text-cream/60 hover:text-gold transition-colors text-sm"
              >
                <Mail size={16} />
                {siteConfig.contact.email}
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-3 text-cream/60 hover:text-gold transition-colors text-sm"
              >
                <Phone size={16} />
                {siteConfig.contact.phone}
              </a>
              <div className="flex items-start gap-3 text-cream/60 text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <div>
                  <p>{siteConfig.contact.address}</p>
                  <p>
                    {siteConfig.contact.city}, {siteConfig.contact.state}{" "}
                    {siteConfig.contact.zip}
                  </p>
                  <p className="text-cream/40 mt-1">
                    {siteConfig.contact.hours}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gold/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/30 text-xs">
            &copy; {siteConfig.currentYear} {siteConfig.name}. All rights
            reserved.
          </p>
          <p className="text-cream/30 text-xs">
            {siteConfig.type}
          </p>
        </div>
      </div>
    </footer>
  );
}
