const initialState = {
  count: 0,
};

const cartCountReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case "addCart":
      return {
        count: state.count + 1,
      };
    case "subtractCart":
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};
export default cartCountReducer;
