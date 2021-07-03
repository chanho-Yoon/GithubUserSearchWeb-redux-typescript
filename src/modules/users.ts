type UserActionType =
  | ReturnType<typeof getUsers>
  | ReturnType<typeof getFavorites>
  | ReturnType<typeof searchFavorites>
  | ReturnType<typeof addFavorites>
  | ReturnType<typeof removeFavorites>;

// Action type
const GET_USERS = <const>'search/GET_USERS';
const GET_FAVORITES = <const>'favorites/GET_FAVORITES';
const SEARCH_FAVORITES = <const>'favorites/SEARCH_FAVORITES';
const ADD_FAVORITES = <const>'favorites/ADD_FAVORITES';
const REMOVE_FAVORITES = <const>'favorites/REMOVE_FAVORITES';

// Action Function
export const getUsers = (userDatas: User[]) => ({
  type: GET_USERS,
  payload: userDatas,
});
export const getFavorites = (favoriteUserDatas: FavoriteUser[]) => ({
  type: GET_FAVORITES,
  payload: favoriteUserDatas,
});
export const searchFavorites = (searchWord: string) => ({
  type: SEARCH_FAVORITES,
  payload: searchWord,
});
export const addFavorites = (userData: User) => ({
  type: ADD_FAVORITES,
  payload: userData,
});
export const removeFavorites = (id: number) => ({
  type: REMOVE_FAVORITES,
  payload: id,
});

export type User = {
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
};

export type FavoriteUser = {
  avatar_url: string;
  id: number;
  login: string;
  html_url: string;
};

export type UserObj = { user: User };

type ActionUser = User[];

const initialState: ActionUser = [];

function users(state = initialState, action: UserActionType) {
  switch (action.type) {
    case GET_USERS:
      let acc = '_';
      const sortUsers = action.payload.sort((a, b) => {
        return a.login < b.login ? -1 : 1;
      });
      return sortUsers.map((data) => {
        if (acc !== data.login.slice(0, 1)) {
          acc = data.login.slice(0, 1);
          return { ...data, isFirstWord: data.login.slice(0, 1) };
        } else {
          return data;
        }
      });

    case GET_FAVORITES:
      return;
    case SEARCH_FAVORITES:
      return;
    case ADD_FAVORITES:
      return;
    case REMOVE_FAVORITES:
      return;
    default:
      return state;
  }
}

export default users;
