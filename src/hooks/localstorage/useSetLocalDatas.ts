import { useCallback } from 'react';
import useGetLocalDatas from './useGetLocalDatas';
import { addFavorites, Favorites } from '../../modules/favorites';
import { useDispatch } from 'react-redux';

const LOCAL_KEY = 'favorite';

export default function useSetLocalDatas() {
  const getLocalStorageItems = useGetLocalDatas();
  const dispatch = useDispatch();
  return useCallback(
    (item: Favorites) => {
      const newItem = {
        id: item.id,
        login: item.login,
        avatar_url: item.avatar_url,
        html_url: item.html_url,
        events_url: item.events_url,
        followers_url: item.followers_url,
        following_url: item.following_url,
        gists_url: item.gists_url,
        gravatar_id: item.gravatar_id,
        node_id: item.node_id,
        organizations_url: item.organizations_url,
        received_events_url: item.received_events_url,
        repos_url: item.repos_url,
        score: item.score,
        site_admin: item.site_admin,
        starred_url: item.starred_url,
        subscriptions_url: item.subscriptions_url,
        type: item.type,
        url: item.url,
        name: item.name,
      };
      const localStorageItem = getLocalStorageItems();

      if (localStorageItem === undefined) {
        localStorage.setItem(LOCAL_KEY, JSON.stringify([newItem]));
      } else {
        const newFavoriteUser = localStorageItem;
        newFavoriteUser.push(newItem);
        localStorage.setItem(LOCAL_KEY, JSON.stringify(newFavoriteUser));
      }
      dispatch(addFavorites(newItem));
    },
    [getLocalStorageItems],
  );
}
