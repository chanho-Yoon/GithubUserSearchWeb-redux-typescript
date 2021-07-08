type SearchActionType =
  | ReturnType<typeof getSearchWord>
  | ReturnType<typeof setSearchWord>;

const GET_SEARCH_WORD = <const>'search/GET_SEARCH_WORD';
const SET_SEARCH_WORD = <const>'search/SET_SEARCH_WORD';

export const getSearchWord = () => ({
  type: GET_SEARCH_WORD,
});

export const setSearchWord = (searchWord: string) => ({
  type: SET_SEARCH_WORD,
  payload: searchWord,
});

type ActionSearch = {
  word: string;
};

const initialState: ActionSearch = {
  word: '',
};

function search(state = initialState, action: SearchActionType) {
  switch (action.type) {
    case GET_SEARCH_WORD:
      return state.word;
    case SET_SEARCH_WORD:
      console.log();
      return { ...state, word: action.payload };
    default:
      return state;
  }
}

export default search;
