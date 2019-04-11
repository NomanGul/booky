import {
  BOOKS_FETCH_REQUESTED,
  MORE_BOOKS_FETCH_REQUESTED,
  QUERY_BOOKS_FETCH_REQUESTED,
  MORE_QUERY_BOOKS_FETCH_REQUESTED
} from "../../constant/store.constants";

const BooksSaga = () => ({ type: BOOKS_FETCH_REQUESTED });

const MoreBooksSaga = () => ({
  type: MORE_BOOKS_FETCH_REQUESTED
});

const QueryBooksSaga = queryText => ({
  type: QUERY_BOOKS_FETCH_REQUESTED,
  queryText
});

const MoreQueryBooksSaga = (queryText, startIndex) => ({
  type: MORE_QUERY_BOOKS_FETCH_REQUESTED,
  queryText,
  startIndex
});

export { BooksSaga, MoreBooksSaga, QueryBooksSaga, MoreQueryBooksSaga };
