import { category, expense } from '@/db/schema'
import { and, between, eq, sql } from 'drizzle-orm'
import { db } from '@/db/config'

export const getAllByDate = async (id: number, startDate: string, endDate: string) => {
  return await db
    .select({
      description: expense.description,
      category: category.name,
      transactionDate: expense.transactionDate,
      amount: expense.amount,
    })
    .from(expense)
    .leftJoin(category, eq(expense.categoryId, category.id))
    .where(and(eq(expense.companyId, id), between(expense.transactionDate, startDate, endDate)))
}

export const getSumByDate = async (id: number, startDate: string, endDate: string) => {
  return await db
    .select({
      amount: sql<number>`sum(${expense.amount})`,
    })
    .from(expense)
    .where(and(eq(expense.companyId, id), between(expense.transactionDate, startDate, endDate)))
}
