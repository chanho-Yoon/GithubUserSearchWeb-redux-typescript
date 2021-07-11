type TabActionType = ReturnType<typeof tabClickNumber>;

const TAB_CLICK_NUMBER = <const>'tab/TAB_CLICK_NUMBER';

export const tabClickNumber = (tab: number) => ({
  type: TAB_CLICK_NUMBER,
  payload: tab,
});

type ActionTab = {
  no: number;
};

const initialState: ActionTab = {
  no: 1,
};

function tabs(state = initialState, action: TabActionType) {
  switch (action.type) {
    case TAB_CLICK_NUMBER:
      return { ...state, no: action.payload };
    default:
      return state;
  }
}

export default tabs;
