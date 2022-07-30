export const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "INCREMENT_BY_NUM":
      return { count: state.count + action.payload };
    case "DECREMENT_BY_NUM":
      return { count: state.count - action.payload };
    default:
      throw new Error();
  }
};
