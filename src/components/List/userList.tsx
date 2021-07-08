import React from 'react';
import styled from 'styled-components';
import useGetUsers from '../../hooks/users/useGetUsers';
import { User } from '../../modules/users';
import UserListItem from './userListItem';

const UserList = () => {
  const users = useGetUsers();
  return (
    <Wrapper>
      <ul>
        {users?.map((item: User) => (
          <UserListItem key={item.id} user={item} />
        ))}
      </ul>
    </Wrapper>
  );
};

export default UserList;

const Wrapper = styled.div`
  width: 75%;
  display: flex;
  justify-content: center;
  ul {
    width: 100%;
  }
`;
