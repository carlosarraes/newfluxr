import type { Config } from 'drizzle-kit'
import dotenv from 'dotenv'
import dotenvExpand from 'dotenv-expand'

dotenvExpand.expand(dotenv.config({ path: '.env.local' }))

export default {
  schema: './src/db/*',
  out: './drizzle',
  driver: 'mysql2',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
} satisfies Config
