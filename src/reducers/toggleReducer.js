const initialState = {
  value: false,
};

function toggleReducer(state = initialState, action) {
  switch (action.type) {
    case "open":
      // console.log(action);
      return { ...state, value: !state.value };
    default:
      return state;
  }
}

export default toggleReducer;
