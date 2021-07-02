import {FavoriteUser} from "../../modules/users";
import {useCallback} from "react";
import useGetLocalDatas from "./useGetLocalDatas";

const LOCAL_KEY = 'favorite';

export default function useSetLocalDatas() {
   const getLocalStorageItems = useGetLocalDatas();
   return useCallback((item: FavoriteUser) => {
      const localStorageItem = getLocalStorageItems();
      if (localStorageItem === undefined) {
         localStorage.setItem(LOCAL_KEY, JSON.stringify([{
            id: item.id,
            login: item.login,
            avatar_url: item.avatar_url,
            html_url: item.html_url
         }]))
      } else {
         const newFavoriteUser = localStorageItem
         newFavoriteUser.push({
            id: item.id,
            login: item.login,
            avatar_url: item.avatar_url,
            html_url: item.html_url
         })
         localStorage.setItem(LOCAL_KEY, JSON.stringify(newFavoriteUser))
      }
   }, [getLocalStorageItems])
}