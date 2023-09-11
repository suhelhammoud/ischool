import { config } from 'dotenv';

import { neon, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { noteTable } from '@/db/schema/notes'

config({ path: '.env.local' });

neonConfig.fetchConnectionCache = true;

const sql = neon(process.env.DB_URL!);
export const db = drizzle(sql);


export async function insertNote(){
    const r = await db.insert(noteTable).values({
        user_id: 'user_id',
        slug3: 'slug3',
        title: 'title',
        text: 'text',
    }).returning();
}

export async function readNotes() {
    const result = await db.select().from(noteTable)
    console.log("note table ", JSON.stringify(result))
    return JSON.stringify(result)
}

insertNote().catch(err => console.error(err));
readNotes().catch(err => console.error(err));
