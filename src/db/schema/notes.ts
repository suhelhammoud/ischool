import {
  serial,
  text,
  timestamp,
  varchar,
  pgTable
} from "drizzle-orm/pg-core";

export const notes = pgTable("notes", {
  id: serial("id").primaryKey().notNull(),
  user_id: varchar("user_id", { length: 191 }).notNull(),
  slug3: varchar("slug3", { length: 191 }).notNull(),
  title: text("title").notNull(),
  text: text("text").default(""),
  created_at: timestamp("created_at").notNull().defaultNow()
});

