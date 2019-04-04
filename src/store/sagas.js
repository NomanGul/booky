import { call, put, takeLatest } from "redux-saga/effects";
import { fetchBooks } from "./fetchBooks";

function* fetchBooksSaga() {
  try {
    const data = yield call(fetchBooks);
    yield put({ type: "BOOKS_FETCH_SUCCEEDED", data });
  } catch (e) {
    yield put({ type: "BOOKS_FETCH_FAILED", message: e.message });
  }
}

function* sagas() {
  yield takeLatest("BOOKS_FETCH_REQUESTED", fetchBooksSaga);
}

export default sagas;
