import {
  BOOKS_FETCH_REQUESTED,
  BOOKS_FETCH_SUCCEEDED,
  MORE_BOOKS_FETCH_SUCCEEDED,
  MORE_BOOKS_FETCH_REQUESTED,
  QUERY_BOOKS_FETCH_REQUESTED,
  QUERY_BOOKS_FETCH_SUCCEEDED,
  BOOKS_FETCH_FAILED,
  MORE_QUERY_BOOKS_FETCH_REQUESTED,
  MORE_QUERY_BOOKS_FETCH_SUCCEEDED
} from "../../constant/store.constants";

const INITIAL_STATE = {
  value: "",
  booksData: {},
  loading: false,
  loadingMore: false,
  queryBooksData: {},
  loadingQuery: false,
  error: ""
};

export const booksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BOOKS_FETCH_REQUESTED:
      return {
        ...state,
        loading: true,
        queryBooksData: {}
      };
    case BOOKS_FETCH_SUCCEEDED:
      return {
        ...state,
        booksData: action.data,
        loading: false
      };
    case MORE_BOOKS_FETCH_REQUESTED:
      return {
        ...state,
        loadingMore: true
      };
    case MORE_BOOKS_FETCH_SUCCEEDED:
      return {
        ...state,
        booksData: {
          ...state.booksData,
          items: [...state.booksData.items, ...action.data.items]
        },
        loadingMore: false
      };
    case QUERY_BOOKS_FETCH_REQUESTED:
      return {
        ...state,
        loadingQuery: true
      };
    case QUERY_BOOKS_FETCH_SUCCEEDED:
      return {
        ...state,
        queryBooksData: action.data,
        loadingQuery: false
      };
    case MORE_QUERY_BOOKS_FETCH_REQUESTED:
      return {
        ...state,
        loadingMore: true
      };
    case MORE_QUERY_BOOKS_FETCH_SUCCEEDED:
      return {
        ...state,
        queryBooksData: {
          ...state.queryBooksData,
          items: [...state.queryBooksData.items, ...action.data.items]
        },
        loadingMore: false
      };
    case BOOKS_FETCH_FAILED:
      return {
        ...state,
        error: action.message,
        loading: false,
        loadingMore: false,
        loadingQuery: false
      };
    default:
      return state;
  }
};
