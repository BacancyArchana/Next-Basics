import UserTable from '../../user/components/UserTable';

// Async function to fetch the list of users from an API.
async function getUserList() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

// Async function to fetch the users list and render the UserTable component.
export default async function Users() {
  const users = await getUserList();

  // Render the UserTable component with the fetched users as a prop.
  return <UserTable users={users} />;
}
