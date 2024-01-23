import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

/**
 * Asynchronously generates static parameters for the component.
 * Fetches a list of posts from an API and maps each post to a parameter object.
 * @returns {Promise<Array<Object>>} - Promise that resolves to an array of post parameters.
 */
export async function generateStaticParams() {
  // Fetch the list of posts from the specified API endpoint.
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json());

  // Map each post to a parameter object containing postId.
  return posts.map((post: any) => ({
    postId: post.id.toString(),
  }));
}

async function getPost(postId: number) {
  // Make a GET request to the specified API endpoint for a specific post.
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function PostCard({ params }: { params: any }) {
  const card = await getPost(params.postId);

  return (
    <div style={{ padding: 20 }}>
      <Card>
        <CardContent>
          {/* Display the post title and ID */}
          <Typography variant="h5" component="div">
            {card.title} {card.id}
          </Typography>
          {/* Display the post body */}
          <Typography variant="body2" color="text.secondary">
            {card.body}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
