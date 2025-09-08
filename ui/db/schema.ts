import { pgTable, integer, text } from "drizzle-orm/pg-core";

export const contact = pgTable("contact", {
  id: integer("id").generatedAlwaysAsIdentity().primaryKey(),
  firstName: text("firstName").notNull(),
  lastName: text("lastName").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
});
