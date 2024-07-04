// UserCard.tsx
import React from 'react';

const UserCard = ({ user, editingUserId, editedUser, handleUpdateUserChange, handleUpdateClick, handleEditClick, deleteUser, formatDate }) => {
  return (
    <div key={user.id} className='p-2 m-2 rounded-3xl bg-amber-200 text-black'>
      {editingUserId === user.id ? (
        <ul className='mt-2 mb-2'>
          <li><input name="name" value={editedUser.name} onChange={handleUpdateUserChange} /></li>
          <li><input name="address" value={editedUser.address} onChange={handleUpdateUserChange} /></li>
          <li><input name="phone" value={editedUser.phone} onChange={handleUpdateUserChange} /></li>
          <li><input name="birthday" type="date" value={editedUser.birthday} onChange={handleUpdateUserChange} /></li>
          <li><button onClick={handleUpdateClick}>Oppdater</button></li>
        </ul>
      ) : (
        <ul className='mt-2 mb-2'>
          <li> <span className='font-semibold'>Id: </span> {user.id}</li>
          <li> <span className='font-semibold'>Navn: </span> {user.name}</li>
          <li> <span className='font-semibold'>Address: </span>{user.address}</li>
          <li> <span className='font-semibold'>Phone: </span>{user.phone}</li>
          <li> <span className='font-semibold'>Birthday: </span>{formatDate(user.birthday)}</li>
          <li> <span className='font-semibold'>Tverrsum: </span>{user.phoneDigitSum}</li>
          <li> <span className='font-semibold'>Skuddår: </span>{user.isLeapYearBirthday ? 'Ja' : 'Nei'}</li>
          <li>
            <div>
              <button onClick={() => handleEditClick(user)}>Endre</button>
              <button onClick={() => deleteUser(user.id)}>Fjern</button>
            </div>
          </li>
        </ul>
      )}
    </div>
  );
};

export default UserCard;