type FavoritesActionType =
  | ReturnType<typeof getFavorites>
  | ReturnType<typeof searchFavorites>
  | ReturnType<typeof addFavorites>
  | ReturnType<typeof removeFavorites>;

// Action type
const GET_FAVORITES = <const>'favorites/GET_FAVORITES';
const SEARCH_FAVORITES = <const>'favorites/SEARCH_FAVORITES';
const ADD_FAVORITES = <const>'favorites/ADD_FAVORITES';
const REMOVE_FAVORITES = <const>'favorites/REMOVE_FAVORITES';

// Action Function
export const getFavorites = (favoriteUserDatas: Favorites[]) => ({
  type: GET_FAVORITES,
  payload: favoriteUserDatas,
});
export const searchFavorites = (searchWord: string) => ({
  type: SEARCH_FAVORITES,
  payload: searchWord,
});
export const addFavorites = (userData: Favorites) => ({
  type: ADD_FAVORITES,
  payload: userData,
});
export const removeFavorites = (id: number) => ({
  type: REMOVE_FAVORITES,
  payload: id,
});

export type Favorites = {
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  id: number;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  score: number;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
  isFirstWord?: string;
  name?: string;
};

export type FavoritesObj = { user: Favorites };

type ActionFavorites = Favorites[];

const initialState: ActionFavorites = [];

// 리스트 아이템 첫 단어만 출력할 수 있도록 정렬하는 함수
function favoritesFirstWordSort(item: Favorites[]) {
  let acc = '';
  if (item.length === 0) {
    return [];
  }

  return item
    .sort((a, b) => (a.login < b.login ? -1 : 1))
    .map((data) => {
      if (acc !== data.login.slice(0, 1)) {
        acc = data.login.slice(0, 1);
        return { ...data, isFirstWord: data.login.slice(0, 1) };
      } else {
        return { ...data, isFirstWord: '' };
      }
    });
}

function favorites(state = initialState, action: FavoritesActionType) {
  switch (action.type) {
    case GET_FAVORITES:
      return favoritesFirstWordSort(action.payload);

    case ADD_FAVORITES:
      const bindFavorites = [...state, action.payload];
      return favoritesFirstWordSort(bindFavorites);
    case REMOVE_FAVORITES:
      const filterRemoveFavorites = state.filter(
        (item) => item.id !== action.payload,
      );
      return favoritesFirstWordSort(filterRemoveFavorites);

    default:
      return state;
  }
}

export default favorites;
