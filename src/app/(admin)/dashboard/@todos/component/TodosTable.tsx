'use client';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';

const TodosTable = ({ todos }: { todos: any }) => {
  return (
    <TableContainer style={{ height: '350px' }}>
      <Table stickyHeader>
        <TableHead>
          <TableCell>Todo Id</TableCell>
          <TableCell>Title</TableCell>
          <TableCell>Complete</TableCell>
        </TableHead>
        <TableBody>
          {todos?.map((todo: any) => (
            <TableRow key={todo.id}>
              <TableCell>{todo.id}</TableCell>
              <TableCell>{todo.title}</TableCell>
              <TableCell>{todo.completed}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TodosTable;
