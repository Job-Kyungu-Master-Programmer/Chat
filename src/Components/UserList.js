import React from 'react';

const users = [
  { id: 1, name: 'John Doe', avatar: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Jane Doe', avatar: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Bob Smith', avatar: 'https://via.placeholder.com/150' },
];

const UserList = () => {
  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <img src={user.avatar} alt={user.name} />
          <p>{user.name}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
