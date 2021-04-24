import React from 'react';
import NotFound from './NotFound';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';

const User = () => {
  const users = useSelector(({ users }) => users);

  const match = useRouteMatch('/users/:id');
  const user = match ? users.find((user) => user.id === match.params.id) : null;

  if (!user) return <NotFound />;
  return (
    <div>
      <h1>{`${user.name}`}</h1>
      <h4>added blogs</h4>
      <ul>
        {user.blogs.map((b) => (
          <li key={b.id}>{b.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default User;
