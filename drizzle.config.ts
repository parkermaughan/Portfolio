import { defineConfig } from 'drizzle-kit'
export default defineConfig({
schema:"src/db/schema.ts",
client: "pg",
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
    verbose: true,
    strict: true,
})