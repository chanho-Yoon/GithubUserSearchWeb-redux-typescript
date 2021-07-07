import React, { useState } from 'react';
import styled from 'styled-components';
import { UserObj } from '../../modules/users';
import { FaGithubAlt } from 'react-icons/fa';
import useSetLocalDatas from '../../hooks/localstorage/useSetLocalDatas';
import useRemoveLocalDatas from '../../hooks/localstorage/useRemoveLocalDatas';
import useGetIndexLocalData from '../../hooks/localstorage/useGetIndexLocalData';
import useRemoveFavorites from '../../hooks/favorites/useRemoveFavorites';

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
    <Li>
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
    </Li>
  );
};

export default UserListItem;

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
