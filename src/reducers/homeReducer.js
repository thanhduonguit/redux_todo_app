
// The initial state of the App
export const initialState = {
  count: 0
};

const homeReducer  = (state = initialState, action) => {
  switch (action.type) {
    case "SIMPLE_ACTION":
      return {
        count: parseInt(state.count + 1)
      };
    default:
      return state;
  }
};

export default homeReducer;