import PostTable from '../../post/components/PostTable';

// Function to asynchronously fetch the list of posts from an API.
async function getPostList() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

// Async function to fetch the post list and render the PostTable component.
export default async function Post() {
  const posts = await getPostList();

  // Render the PostTable component with the fetched posts as a prop.
  return <PostTable posts={posts} />;
}
