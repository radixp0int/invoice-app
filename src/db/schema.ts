import {
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const statusEnum = pgEnum("status", [
  "open",
  "paid",
  "void",
  "uncollected",
]);

export const Invoices = pgTable("invoices", {
  id: serial("id").primaryKey().notNull(),
  createTs: timestamp("create_ts").notNull().defaultNow(),
  value: integer("value").notNull(),
  description: text("description").notNull(),
  status: statusEnum("status").notNull().default("open"),
});
