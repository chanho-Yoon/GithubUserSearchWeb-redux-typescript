import React from 'react';
import styled from "styled-components";
import useGetUsers from "../../hooks/users/useGetUsers";
import ListItem from "./listItem";

const ApiList = () => {
   const users = useGetUsers();
   return (
      <Wrapper>
         <ul>
            {users?.map((item) => (
               <ListItem key={item.id} user={item} />
            ))}
         </ul>
      </Wrapper>
   );
};

export default ApiList

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`