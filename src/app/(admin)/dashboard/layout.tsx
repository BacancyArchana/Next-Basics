import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

/**
 * Layout component that organizes the display of users, todos, and posts in a grid layout.
 * @param {Object} props - React component props.
 * @param {React.ReactNode} props.children - Child components to be rendered inside the layout.
 * @param {React.ReactNode} props.todos - Todos component to be rendered on the right side.
 * @param {React.ReactNode} props.users - Users component to be rendered on the right side.
 * @param {React.ReactNode} props.posts - Posts component to be rendered on the left side.
 * @returns {JSX.Element} - JSX element representing the layout of users, todos, and posts.
 */

export default function Layout(props: {
  children: React.ReactNode;
  todos: React.ReactNode;
  users: React.ReactNode;
  posts: React.ReactNode;
}) {
  return (
    <>
      {/* Grid container with 3 columns and padding */}
      <Grid container spacing={3} padding={5}>
        {/* Left side - Posts */}
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              {/* Title for the left side */}
              <Typography variant="h5" component="div" style={{ marginTop: '16px' }}>
                Posts
              </Typography>
              {/* Render the posts component */}
              {props.posts}
            </CardContent>
          </Card>
        </Grid>

        {/* Right side - Users and Todos */}
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              {/* Title for the right side - Users */}
              <Typography variant="h5" component="div">
                Users
              </Typography>
              {/* Render the users component */}
              {props.users}

              {/* Title for the right side - Todos */}
              <Typography variant="h5" component="div">
                Todos
              </Typography>
              {/* Render the todos component */}
              {props.todos}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
