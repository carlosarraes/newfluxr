import { NextRequest, NextResponse } from 'next/server'
import { getAllByDate } from '@/lib/services/getAll'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const id = Number(searchParams.get('id'))
  const startDate = searchParams.get('startDate')
  const endDate = searchParams.get('endDate')

  if (!id || !startDate || !endDate) {
    throw new Error('Missing required parameters')
  }

  const expense = await getAllByDate(id, startDate, endDate)

  return NextResponse.json(expense)
}
