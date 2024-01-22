'use client';
import { useEffect, useState } from 'react';
import { getUserList } from '../../../network/api';

export default function Dashboard() {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);

  const getList = (currentPage = page) => {
    getUserList({ page: currentPage }).then((res) => {
      setUsers((prevArr) => [...prevArr, ...res.users]);
      setPage(currentPage);
    });
  };
  useEffect(() => {
    getList();
  }, []);

  return (
    <main>
      Dashboard
      <button style={{ margin: '0 16px' }} onClick={() => getList(page + 1)}>
        Load more
      </button>
      <p>Total users: {users.length}</p>
      <div
        style={{
          whiteSpace: 'pre',
          overflow: 'scroll',
          height: '700px',
          border: '1px solid',
          background: 'lightgray',
        }}
      >
        <p>{JSON.stringify(users, null, 2)}</p>
      </div>
    </main>
  );
}
