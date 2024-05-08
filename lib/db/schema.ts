import { DrizzlePostgreSQLAdapter } from '@lucia-auth/adapter-drizzle';
import { integer, pgTable, text, timestamp } from 'drizzle-orm/pg-core';
export const userTable = pgTable('user', {
  id: text('id').primaryKey(),
  username: text('username').notNull().unique(),
  hashedPassword: text('hashed_password').notNull(),
});

export const sessionTable = pgTable('session', {
  id: text('id').primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => userTable.id),
  expiresAt: timestamp('expires_at', {
    withTimezone: true,
    mode: 'date',
  }).notNull(),
});

export const screenTable = pgTable('screen', {
  id: integer('id').primaryKey(),
  belongsto: text('belongsto').notNull(),
  tripId: text('tripId').notNull(),
  typeofscreen: text('typeofscreen').notNull(),
  screenname: text('screenname').notNull().unique(),
  screenid: text('screenid').notNull().unique(),
});
