'use server';
import { NextResponse } from 'next/server';
import Users from '@/components/constants/user';
import Posts from '@/components/constants/post';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get('page') || 1);
  const limit = Number(searchParams.get('limit') || 10);

  let posts = Posts.slice((page - 1) * limit, limit);
  posts = posts.map((post) => ({
    ...post,
    user: Users.find((u) => u.id === post.userID),
  }));
  const totalPosts = Posts.length;
  return NextResponse.json({ posts: posts, count: totalPosts }, { status: 200 });
}
