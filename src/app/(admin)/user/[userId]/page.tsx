import React from 'react';
import PostCards from './components/PostCards';
import type { Metadata } from 'next';

type Props = {
  params: { userId: number };
};

/**
 * Async function to generate metadata for the UserPosts page.
 * @param {Props} params - Props object containing parameters, specifically userId.
 * @returns {Promise<Metadata>} - Promise that resolves to metadata for the UserPosts page.
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Extract userId from the parameters
  const id = params.userId;

  // Return metadata with a title based on the userId
  return {
    title: `User ${id} Posts`,
  };
}

async function getUserPosts(userId: number) {
  // Make a GET request to the specified API endpoint for user-specific posts
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function UserPosts({ params }: Props) {
  const userPosts = await getUserPosts(params.userId);

  return <PostCards cards={userPosts} />;
}
