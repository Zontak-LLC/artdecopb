"use client";

import { events } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import EventCard from "@/components/EventCard";
import { useState } from "react";

export default function EventsPage() {
  const [filter, setFilter] = useState<"all" | "upcoming" | "past">("all");

  const filteredEvents =
    filter === "all" ? events : events.filter((e) => e.status === filter);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading
            title="Events & Programs"
            subtitle="Lectures, tours, galas, and celebrations of Art Deco culture in the Palm Beaches."
            light
          />
        </div>
      </section>

      {/* Events List */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">
          {/* Filter */}
          <div className="flex items-center justify-center gap-2 mb-12">
            {(["all", "upcoming", "past"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium tracking-wider uppercase transition-all ${
                  filter === f
                    ? "bg-charcoal text-cream"
                    : "bg-white text-charcoal/60 hover:text-charcoal"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, i) => (
              <EventCard key={event.id} event={event} index={i} />
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <p className="text-center text-charcoal/40 py-12">
              No events found for this filter.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
