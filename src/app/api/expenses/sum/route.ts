import { NextRequest, NextResponse } from 'next/server'
import { getSumByDate } from '@/lib/getAll'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const id = Number(searchParams.get('id'))
  const startDate = searchParams.get('startDate')
  const endDate = searchParams.get('endDate')

  if (!id || !startDate || !endDate) {
    throw new Error('Missing required parameters')
  }

  const expense = await getSumByDate(id, startDate, endDate)

  return NextResponse.json(expense)
}
