'use server';
import { NextResponse } from 'next/server';
import Users from '@/components/constants/user';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get('page') || 1);
  const limit = Number(searchParams.get('limit') || 10);

  const users = Users.slice((page - 1) * limit, page * limit);
  const totalUser = Users.length;
  return NextResponse.json({ users: users, count: totalUser }, { status: 200 });
}
