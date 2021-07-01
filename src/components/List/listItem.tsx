import React from 'react';
import {UserObj} from "../../modules/users";
import styled from "styled-components";
import {FaGithubAlt} from 'react-icons/fa';

const ListItem = (item: UserObj) => {
   console.log(item);
   return (
      <Li>
         <img src={item.user.avatar_url} alt="profile_image" />
         <span>{item.user.login}</span>
         <button>
            <FaGithubAlt />
         </button>
      </Li>
   )
}

export default ListItem;

const Li = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;

    img {
        width: 45px;
        height: 45px;
        border-radius: 50%;
    }

    span {
        width: 350px;
        padding-left: 40px;
        font-size: 1.5rem;
    }

    button {
        font-size: 4rem;
        cursor: pointer;
        color: lightgray;
    }
`