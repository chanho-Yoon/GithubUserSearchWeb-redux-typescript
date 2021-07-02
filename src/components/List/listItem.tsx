import React, {useState} from 'react';
import {UserObj} from "../../modules/users";
import styled from "styled-components";
import {FaGithubAlt} from 'react-icons/fa';
import useGetLocalDatas from "../../hooks/localstorage/useGetLocalDatas";
import useSetLocalDatas from "../../hooks/localstorage/useSetLocalDatas";
import useRemoveLocalDatas from "../../hooks/localstorage/useRemoveLocalDatas";
import useGetIndexLocalData from "../../hooks/localstorage/useGetIndexLocalData";

const ListItem = (item: UserObj) => {
   const [toggle, setToggle] = useState(false);
   const getLocalStorageItems = useGetLocalDatas();
   const setLocalStorageItems = useSetLocalDatas();
   const removeLocalStorageItems = useRemoveLocalDatas();
   const getIndexLocalData = useGetIndexLocalData();

   const onClick = () => {
      const localStorageItem = getLocalStorageItems();

      if (!toggle) {
         setLocalStorageItems({
            id: item.user.id,
            login: item.user.login,
            avatar_url: item.user.avatar_url,
            html_url: item.user.html_url
         })
      } else {
         if (localStorageItem !== undefined)
            removeLocalStorageItems(item.user.id);
      }
      setToggle((toggle) => !toggle);
   }
   return (
      <Li>
         {item.user.isFirstWord !== '' && <span className='first_word'>{item.user.isFirstWord}</span>}
         <img src={item.user.avatar_url} alt="profile_image" />
         <span>{item.user.login}</span>
         <button className={getIndexLocalData(item.user.id) ? 'active' : ''} onClick={onClick}>
            <FaGithubAlt />
         </button>
      </Li>
   )
}

export default ListItem;

const Li = styled.li`
    position: relative;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 20px 0;

    .first_word {
        position: absolute;
        top: 15px;
        left: -90px;
        width: 10px;
        padding: 0 20px 0 0;
        border-right: 5px solid #00c400;
        font-size: 1.5rem;
    }

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
        display: flex;
        align-items: center;
        font-size: 4rem;
        cursor: pointer;
        color: lightgray;

        &.active {
            color: #00c400;
        }
    }
`