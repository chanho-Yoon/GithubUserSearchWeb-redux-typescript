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
export const getUsers = (searchWord: string) => ({type: GET_USERS, payload: searchWord})
export const getFavorites = () => ({type: GET_FAVORITES})
export const searchFavorites = (searchWord: string) => ({type: SEARCH_FAVORITES, payload: searchWord})
export const addFavorites = (userData: User) => ({type: ADD_FAVORITES, payload: userData})
export const removeFavorites = (id: number) => ({type: REMOVE_FAVORITES, payload: id})

export type User = {
   id: number,
   profileImg: string,
   login: string,
   toggle: boolean
}

type ActionUser = User[];

const initialState: ActionUser = []

function users(state = initialState, action: UserActionType) {
   switch (action.type) {
      case GET_USERS:
         return
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