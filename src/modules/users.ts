type UserActionType = ReturnType<typeof getUsers>;

// Action type
const GET_USERS = <const>'search/GET_USERS';

// Action Function
export const getUsers = (userDatas: User[], searchWord: string) => ({
  type: GET_USERS,
  payload: userDatas,
  name: searchWord,
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
  name?: string;
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

function firstWordSort(item: User[], name: string) {
  let acc = '_';
  const sortUsers = item.sort((a, b) => {
    return a.login < b.login ? -1 : 1;
  });
  return sortUsers.map((data) => {
    if (acc !== data.login.slice(0, 1)) {
      acc = data.login.slice(0, 1);
      return { ...data, isFirstWord: data.login.slice(0, 1), name: name };
    } else {
      return { ...data, name: name };
    }
  });
}

function users(state = initialState, action: UserActionType) {
  switch (action.type) {
    case GET_USERS:
      return firstWordSort(action.payload, action.name);
    default:
      return state;
  }
}

export default users;
