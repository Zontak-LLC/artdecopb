"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";

type Event = {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  isFeatured: boolean;
  status: string;
};

export default function EventCard({
  event,
  index,
}: {
  event: Event;
  index: number;
}) {
  const dateObj = new Date(event.date + "T00:00:00");
  const month = dateObj.toLocaleDateString("en-US", { month: "short" });
  const day = dateObj.getDate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ${
        event.isFeatured ? "ring-2 ring-gold/50" : ""
      }`}
    >
      {event.isFeatured && (
        <div className="absolute top-4 right-4 z-10 bg-gold text-charcoal text-xs font-bold px-3 py-1 rounded-full tracking-wider uppercase">
          Featured
        </div>
      )}
      {event.status === "past" && (
        <div className="absolute top-4 right-4 z-10 bg-charcoal/80 text-cream text-xs font-bold px-3 py-1 rounded-full tracking-wider uppercase">
          Past Event
        </div>
      )}

      {/* Date Badge */}
      <div className="absolute top-4 left-4 z-10 bg-charcoal text-cream rounded-xl p-3 text-center min-w-[60px] shadow-lg">
        <p className="text-gold text-xs font-bold uppercase tracking-wider">
          {month}
        </p>
        <p className="text-2xl font-display">{day}</p>
      </div>

      {/* Gradient top bar */}
      <div className="h-2 bg-gradient-to-r from-gold via-copper to-gold" />

      <div className="p-6 pt-20">
        <h3 className="font-display text-xl text-charcoal group-hover:text-gold transition-colors mb-3">
          {event.title}
        </h3>
        <p className="text-charcoal/60 text-sm leading-relaxed mb-4">
          {event.description}
        </p>

        <div className="space-y-2 text-sm text-charcoal/50">
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-gold" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-gold" />
            <span>{event.location}</span>
          </div>
        </div>

        {event.status === "upcoming" && (
          <a
            href={`mailto:Art@ArtDecoPB.org?subject=RSVP: ${event.title}`}
            className="mt-6 inline-flex items-center gap-2 bg-charcoal text-cream px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gold hover:text-charcoal transition-all duration-300 group-hover:translate-x-1"
          >
            <Calendar size={14} />
            RSVP Now
          </a>
        )}
      </div>
    </motion.div>
  );
}
