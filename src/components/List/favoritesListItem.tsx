import React from 'react';
import styled from 'styled-components';
import { FaGithubAlt } from 'react-icons/fa';
import useRemoveLocalDatas from '../../hooks/localstorage/useRemoveLocalDatas';
import { FavoritesObj } from '../../modules/favorites';
import useRemoveFavorites from '../../hooks/favorites/useRemoveFavorites';
import useGetSearch from '../../hooks/search/useGetSearch';

const FavoritesListItem = (item: FavoritesObj) => {
  const removeLocalStorageItems = useRemoveLocalDatas();
  const removeFavorites = useRemoveFavorites();
  const searchWord = useGetSearch();
  const onClick = () => {
    removeFavorites(item.user.id);
    removeLocalStorageItems(item.user.id);
  };
  return (
    <Li>
      {item.user.isFirstWord !== '' && searchWord['word'] === '' && (
        <span className="first_word">{item.user.isFirstWord}</span>
      )}
      <img src={item.user.avatar_url} alt="profile_image" />
      <span>{item.user.login}</span>
      <button className={'active'} onClick={onClick}>
        <FaGithubAlt />
      </button>
    </Li>
  );
};

export default FavoritesListItem;

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
`;
