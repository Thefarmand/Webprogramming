export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_DRIVER_LAST_RESULT":
      return action.payload;
    default:
      return state;
  }
};
