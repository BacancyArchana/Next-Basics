'use client';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const UserTable = ({ users }: { users: any }) => {
  return (
    <TableContainer style={{ height: '350px' }}>
      <Table stickyHeader>
        <TableHead>
          <TableCell>User Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>City</TableCell>
          <TableCell></TableCell>
        </TableHead>
        <TableBody>
          {users?.map((user: any) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.address.city}</TableCell>
              <TableCell>
                <Link href={`user/${user.id}`}>Check Posts</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
