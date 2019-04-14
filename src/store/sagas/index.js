import { takeLatest, takeEvery } from "redux-saga/effects";
import fetchBooksSaga from "./fetchBooks.saga";
import fetchMoreBooksSaga from "./fetchMoreBooks.saga";
import queryBooksSaga from "./queryBooks.saga";
import fetchMoreQueryBooksSaga from "./fetchMoreQueryBooks.saga";
import {
  BOOKS_FETCH_REQUESTED,
  MORE_BOOKS_FETCH_REQUESTED,
  QUERY_BOOKS_FETCH_REQUESTED,
  MORE_QUERY_BOOKS_FETCH_REQUESTED
} from "../../constant/store.constants";

export default function* rootSaga() {
  yield takeLatest(BOOKS_FETCH_REQUESTED, fetchBooksSaga);
  yield takeEvery(MORE_BOOKS_FETCH_REQUESTED, fetchMoreBooksSaga);
  yield takeLatest(QUERY_BOOKS_FETCH_REQUESTED, queryBooksSaga);
  yield takeEvery(MORE_QUERY_BOOKS_FETCH_REQUESTED, fetchMoreQueryBooksSaga);
}
