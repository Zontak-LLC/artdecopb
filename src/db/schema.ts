import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const events = sqliteTable("events", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  description: text("description").notNull(),
  date: text("date").notNull(),
  time: text("time"),
  location: text("location"),
  imageUrl: text("image_url"),
  isFeatured: integer("is_featured", { mode: "boolean" }).default(false),
  status: text("status").default("upcoming"), // upcoming, past, sold_out
  rsvpEmail: text("rsvp_email"),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
});

export const artDecoElements = sqliteTable("art_deco_elements", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  description: text("description").notNull(),
  sortOrder: integer("sort_order").default(0),
});

export const boardMembers = sqliteTable("board_members", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  role: text("role").notNull(),
  bio: text("bio"),
  imageUrl: text("image_url"),
  sortOrder: integer("sort_order").default(0),
});

export const pages = sqliteTable("pages", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  content: text("content").notNull(), // stored as JSON
  updatedAt: text("updated_at").default("CURRENT_TIMESTAMP"),
});

export const contactMessages = sqliteTable("contact_messages", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  wantsUpdates: integer("wants_updates", { mode: "boolean" }).default(false),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
});

export const membershipTiers = sqliteTable("membership_tiers", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  price: integer("price").notNull(),
  benefits: text("benefits").notNull(), // stored as JSON array
  sortOrder: integer("sort_order").default(0),
});
