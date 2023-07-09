import { NextRequest, NextResponse } from 'next/server'
import { getAll } from '@/lib/getAll'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const id = Number(searchParams.get('id'))

  const expense = await getAll(id)

  return NextResponse.json(expense)
}
