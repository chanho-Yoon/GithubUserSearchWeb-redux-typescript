type UserActionType =
   | ReturnType<typeof getUsers>
   | ReturnType<typeof getFavorites>
   | ReturnType<typeof searchFavorites>
   | ReturnType<typeof addFavorites>
   | ReturnType<typeof removeFavorites>

// Action type
const GET_USERS = 'search/GET_USERS' as const
const GET_FAVORITES = 'favorites/GET_FAVORITES' as const
const SEARCH_FAVORITES = 'favorites/SEARCH_FAVORITES' as const
const ADD_FAVORITES = 'favorites/ADD_FAVORITES' as const
const REMOVE_FAVORITES = 'favorites/REMOVE_FAVORITES' as const

// Action Function
export const getUsers = (userDatas: User[]) => ({type: GET_USERS, payload: userDatas})
export const getFavorites = () => ({type: GET_FAVORITES})
export const searchFavorites = (searchWord: string) => ({type: SEARCH_FAVORITES, payload: searchWord})
export const addFavorites = (userData: User) => ({type: ADD_FAVORITES, payload: userData})
export const removeFavorites = (id: number) => ({type: REMOVE_FAVORITES, payload: id})

export type User = {
   avatar_url: string
   events_url: string
   followers_url: string
   following_url: string
   gists_url: string
   gravatar_id: string
   html_url: string
   id: number
   login: string
   node_id: string
   organizations_url: string
   received_events_url: string
   repos_url: string
   score: number
   site_admin: boolean
   starred_url: string
   subscriptions_url: string
   type: string
   url: string
}
export type UserObj = { user: User };

type ActionUser = User[];

const initialState: ActionUser = []

function users(state = initialState, action: UserActionType) {
   switch (action.type) {
      case GET_USERS:
         return state = action.payload
      case GET_FAVORITES:
         return
      case SEARCH_FAVORITES:
         return
      case ADD_FAVORITES:
         return
      case REMOVE_FAVORITES:
         return
      default:
         return state;
   }
}

export default users;