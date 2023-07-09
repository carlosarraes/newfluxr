import { connect } from '@planetscale/database'
import { config } from '@/db/config'
import { drizzle } from 'drizzle-orm/planetscale-serverless'
import { expense } from '@/db/schema'
import { eq } from 'drizzle-orm'

export const getAll = async (id: number) => {
  const conn = connect(config)
  const db = drizzle(conn)

  return await db.select().from(expense).where(eq(expense.companyId, id))
}
