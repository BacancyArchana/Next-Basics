import { Box, Paper, Typography } from '@mui/material';
import UserTable from './components/UserTable';
import { Metadata } from 'next';

// Async function to fetch the list of users from an API
async function getUserList() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

// Metadata for the Next.js page
export const metadata: Metadata = {
  title: 'User Table',
  description: 'All users stored in the table',
};

// Async function to fetch users and render the UserTable component
export default async function User() {
  const users = await getUserList();

  return (
    <Box marginY={4} marginX={2}>
      <Paper elevation={4}>
        <Box padding={3} display="flex" justifyContent="space-between">
          <Typography variant="h5">Users</Typography>
        </Box>
        <UserTable users={users} />
      </Paper>
    </Box>
  );
}
