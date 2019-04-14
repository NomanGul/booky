const INITIAL_STATE = {
  searchResults: "hellooo",
  value: ""
};

export const BooksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        value: action.payload
      };
    case "CHANGE_NAME":
      return {
        ...state,
        searchResults: "hello"
      };
    default:
      return state;
  }
};
