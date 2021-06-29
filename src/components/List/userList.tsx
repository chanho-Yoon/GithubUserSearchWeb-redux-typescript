import React from 'react';
import styled from "styled-components";
import LocalList from "./localList";
import ApiList from "./apiList";
import useGetUsers from "../../hooks/users/useGetUsers";
import useGetTabIndex from "../../hooks/actions/useTab";

const UserList = () => {
   const users = useGetUsers();
   const tabIndex = useGetTabIndex();
   console.log(users);
   console.log(tabIndex);
   return (
      <Wrapper>
         {tabIndex === 1 ? (
            <ApiList />
         ) : (
            <LocalList />
         )}
      </Wrapper>
   );
};

export default UserList;

const Wrapper = styled.div`
    width: 100%;
    height: 450px;
    padding: 30px;
    margin-top: 40px;
    border-radius: 30px;
    box-shadow: rgba(0, 0, 0, 0.20) 0px 5px 15px;
`