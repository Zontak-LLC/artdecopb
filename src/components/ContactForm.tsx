"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    wantsUpdates: false,
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("sent");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          wantsUpdates: false,
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-charcoal/70 mb-2"
          >
            Name <span className="text-copper">*</span>
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="w-full px-4 py-3 border border-charcoal/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold bg-white/50 transition-all"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-charcoal/70 mb-2"
          >
            Email <span className="text-copper">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-3 border border-charcoal/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold bg-white/50 transition-all"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-charcoal/70 mb-2"
        >
          Subject <span className="text-copper">*</span>
        </label>
        <input
          id="subject"
          type="text"
          required
          value={formData.subject}
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
          className="w-full px-4 py-3 border border-charcoal/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold bg-white/50 transition-all"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-charcoal/70 mb-2"
        >
          Message <span className="text-copper">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          required
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full px-4 py-3 border border-charcoal/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold bg-white/50 transition-all resize-none"
        />
      </div>

      <label className="flex items-center gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={formData.wantsUpdates}
          onChange={(e) =>
            setFormData({ ...formData, wantsUpdates: e.target.checked })
          }
          className="w-4 h-4 rounded border-charcoal/20 text-gold focus:ring-gold/50"
        />
        <span className="text-sm text-charcoal/60">
          Check here to receive email updates
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 bg-charcoal text-cream px-8 py-3.5 rounded-full font-display tracking-wider uppercase text-sm hover:bg-gold hover:text-charcoal transition-all duration-300 disabled:opacity-50"
      >
        <Send size={16} />
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "sent" && (
        <p className="text-emerald-600 text-sm">
          Thank you! Your message has been sent.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-sm">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
