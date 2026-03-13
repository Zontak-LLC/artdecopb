import { drizzle } from "drizzle-orm/d1";
import * as schema from "@/db/schema";

export function getDb(d1: D1Database) {
  return drizzle(d1, { schema });
}

// For local development, we use a simple in-memory data approach
// In production, this connects to Cloudflare D1

export type Database = ReturnType<typeof getDb>;
