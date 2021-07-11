import React from 'react';
import { FaGithubAlt } from 'react-icons/fa';
import useRemoveLocalDatas from '../../hooks/localstorage/useRemoveLocalDatas';
import { FavoritesObj } from '../../modules/favorites';
import useRemoveFavorites from '../../hooks/favorites/useRemoveFavorites';
import useGetSearch from '../../hooks/search/useGetSearch';
import ListLiStyle from '../../assets/styles/listLiStyle';

const FavoritesListItem = (item: FavoritesObj) => {
  const removeLocalStorageItems = useRemoveLocalDatas();
  const removeFavorites = useRemoveFavorites();
  const searchWord = useGetSearch();

  const onClick = () => {
    removeFavorites(item.user.id);
    removeLocalStorageItems(item.user.id);
  };
  return (
    <ListLiStyle>
      {item.user.isFirstWord !== '' && searchWord['word'] === '' && (
        <span className="first_word">{item.user.isFirstWord}</span>
      )}
      <img src={item.user.avatar_url} alt="profile_image" />
      <span>{item.user.login}</span>
      <button className={'active'} onClick={onClick}>
        <FaGithubAlt />
      </button>
    </ListLiStyle>
  );
};

export default FavoritesListItem;
