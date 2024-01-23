import { Box, Paper, Typography } from '@mui/material';
import { Metadata } from 'next';

import PostTable from './components/PostTable';

// Async function to fetch the list of posts from an API
async function getPostList() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

// Metadata for the Next.js page
export const metadata: Metadata = {
  title: 'Post Table',
  description: 'All users stored in the table',
};

// Async function to fetch posts and render the PostTable component
export default async function Post() {
  const posts = await getPostList();

  return (
    <Box marginY={4} marginX={2}>
      <Paper elevation={4}>
        <Box padding={3} display="flex" justifyContent="space-between">
          <Typography variant="h5">Posts</Typography>
        </Box>
        <PostTable posts={posts} />
      </Paper>
    </Box>
  );
}
