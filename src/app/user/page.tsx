'use client';
import { useEffect, useState } from 'react';
import { getUserList } from '../../../network/api';
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

export default function User() {
  const [page, setPage] = useState(-1);
  const [loading, setIsLoading] = useState(false);
  const [totalUser, setTotalUser] = useState(0);
  const [users, setUsers] = useState<User[]>([]);

  const getList = (currentPage = 1) => {
    if (loading) return;
    if (page && currentPage !== page) {
      getUserList({ page: currentPage }).then((res) => {
        setUsers((prevArr) => {
          prevArr.push(...res.users);
          return prevArr;
        });
        setTotalUser(res.count);
        setPage(currentPage);
        setIsLoading(false);
      });
    }
  };
  useEffect(() => {
    setIsLoading(true);
    getList();
  }, []);

  return (
    <Box marginY={4} marginX={2}>
      <Paper elevation={4}>
        <Box padding={3} display="flex" justifyContent="space-between">
          <Typography variant="h5">Users</Typography>
          <Button
            variant="contained"
            onClick={() => getList(page + 1)}
            disabled={users.length >= totalUser}
          >
            Load more
          </Button>
        </Box>
        <TableContainer style={{ height: '700px' }}>
          <Table stickyHeader>
            <TableHead>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>No of posts</TableCell>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={4} rowSpan={5} height={200} align="center">
                    Loading...
                  </TableCell>
                </TableRow>
              ) : (
                users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.country}</TableCell>
                    <TableCell>{user.id}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
