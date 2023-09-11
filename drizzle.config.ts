import type { Config } from "drizzle-kit";
import { config } from 'dotenv';

config({ path: '.env.local' });

if (!process.env.DB_URL) {
  throw new Error('DATABASE_URL environment variable is required.');
}

export default {
  schema: "./src/db/schema",
  out: "migrations",
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DB_URL
  }
} satisfies Config;
