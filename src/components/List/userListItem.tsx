import React, { useState } from 'react';
import { UserObj } from '../../modules/users';
import { FaGithubAlt } from 'react-icons/fa';
import useSetLocalDatas from '../../hooks/localstorage/useSetLocalDatas';
import useRemoveLocalDatas from '../../hooks/localstorage/useRemoveLocalDatas';
import useGetIndexLocalData from '../../hooks/localstorage/useGetIndexLocalData';
import useRemoveFavorites from '../../hooks/favorites/useRemoveFavorites';
import ListLiStyle from '../../assets/styles/listLiStyle';

const UserListItem = (item: UserObj) => {
  const [, setToggle] = useState(false);
  const setLocalStorageItems = useSetLocalDatas();
  const removeLocalStorageItems = useRemoveLocalDatas();
  const getIndexLocalData = useGetIndexLocalData();
  const removeFavorites = useRemoveFavorites();

  const onClick = () => {
    if (getIndexLocalData(item.user.id)) {
      removeLocalStorageItems(item.user.id);
      removeFavorites(item.user.id);
      setToggle((toggle) => !toggle);
    } else {
      setLocalStorageItems({
        id: item.user.id,
        login: item.user.login,
        avatar_url: item.user.avatar_url,
        html_url: item.user.html_url,
        events_url: item.user.events_url,
        followers_url: item.user.followers_url,
        following_url: item.user.following_url,
        gists_url: item.user.gists_url,
        gravatar_id: item.user.gravatar_id,
        node_id: item.user.node_id,
        organizations_url: item.user.organizations_url,
        received_events_url: item.user.received_events_url,
        repos_url: item.user.repos_url,
        score: item.user.score,
        site_admin: item.user.site_admin,
        starred_url: item.user.starred_url,
        subscriptions_url: item.user.subscriptions_url,
        type: item.user.type,
        url: item.user.url,
        name: item.user.name,
      });
      setToggle((toggle) => !toggle);
    }
  };
  return (
    <ListLiStyle>
      {item.user.isFirstWord !== '' && (
        <span className="first_word">{item.user.isFirstWord}</span>
      )}
      <img src={item.user.avatar_url} alt="profile_image" />
      <span>{item.user.login}</span>
      <button
        className={getIndexLocalData(item.user.id) ? 'active' : ''}
        onClick={onClick}
      >
        <FaGithubAlt />
      </button>
    </ListLiStyle>
  );
};

export default UserListItem;
