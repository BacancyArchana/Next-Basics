// Import the TodosTable component from the specified path.
import TodosTable from './component/TodosTable';

// Async function to fetch the list of todos from an API.
async function getTodosList() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

// Async function to fetch the todos list and render the TodosTable component.
export default async function Post() {
  const todos = await getTodosList();

  // Uncomment the next line to intentionally throw an error (for testing error boaundary).
  // throw new Error('Not Found');

  // Render the TodosTable component with the fetched todos as a prop.
  return <TodosTable todos={todos} />;
}
