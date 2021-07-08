import React from 'react';
import useGetUsers from '../../hooks/users/useGetUsers';
import { User } from '../../modules/users';
import UserListItem from './userListItem';
import ListWrapperStyle from '../../assets/styles/listWrapperStyle';
import ListUlStyle from '../../assets/styles/listUlStyle';

const UserList = () => {
  const users = useGetUsers();

  return (
    <ListWrapperStyle>
      <ListUlStyle>
        {users?.map((item: User) => (
          <UserListItem key={item.id} user={item} />
        ))}
      </ListUlStyle>
    </ListWrapperStyle>
  );
};

export default UserList;
