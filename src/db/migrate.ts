import { config } from 'dotenv';
import { neon, neonConfig } from '@neondatabase/serverless';

neonConfig.fetchConnectionCache = true;
config({ path: '.env.local' });

if (!process.env.DB_URL) {
    throw new Error('DATABASE_URL environment variable is required.');
}

const sql = neon(process.env.DB_URL);

async function configureDatabase() {
    await sql`CREATE TABLE IF NOT EXISTS "notes" (
        "id" serial PRIMARY KEY NOT NULL,
        "user_id" varchar(191) NOT NULL,
        "slug3" varchar(191) NOT NULL,
        "title" text NOT NULL,
        "text" text DEFAULT '',
        "created_at" timestamp DEFAULT now() NOT NULL
    );
    `
}

configureDatabase().catch(err => console.log("db config err", err));

