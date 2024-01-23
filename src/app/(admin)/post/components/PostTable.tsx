'use client';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const PostTable = ({ posts }: { posts: any }) => {
  return (
    <TableContainer style={{ height: '700px' }}>
      <Table stickyHeader>
        <TableHead>
          <TableCell>Post Id</TableCell>
          <TableCell>User Id</TableCell>
          <TableCell>Title</TableCell>
          <TableCell></TableCell>
        </TableHead>
        <TableBody>
          {posts?.map((post: any) => (
            <TableRow key={post.id}>
              <TableCell>{post.id}</TableCell>
              <TableCell>{post.userId}</TableCell>
              <TableCell>{post.title}</TableCell>
              <TableCell>
                <Link href={`post/${post.id}`}>Check Post</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PostTable;
