// UsersList.tsx
import React from 'react';
import UserCard from './UserCard';

const UsersList = ({ users, editingUserId, editedUser, handleUpdateUserChange, handleUpdateClick, handleEditClick, deleteUser, formatDate }) => {
  return (
    <div className='flex flex-row flex-wrap'>
      {users.map(user => (
        <UserCard
          key={user.id}
          user={user}
          editingUserId={editingUserId}
          editedUser={editedUser}
          handleUpdateUserChange={handleUpdateUserChange}
          handleUpdateClick={handleUpdateClick}
          handleEditClick={handleEditClick}
          deleteUser={deleteUser}
          formatDate={formatDate}
        />
      ))}
    </div>
  );
};

export default UsersList;