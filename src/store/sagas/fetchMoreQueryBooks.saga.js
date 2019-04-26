import { call, put } from "redux-saga/effects";
import { axios } from "../../configs/axios";
import {
  MORE_QUERY_BOOKS_FETCH_SUCCEEDED,
  BOOKS_FETCH_FAILED
} from "../../constant/store.constants";

const fetchMoreQueryBooks = async ({ queryText, startIndex }) => {
  console.log("startIndex>>>LLL", startIndex);
  const req = await axios.get(
    `volumes?q=${queryText}+intitle:${queryText}&startIndex=${startIndex}`
  );
  console.log("fromFetchMoreSaga  >>>> ****", req.data);
  return req.data;
};

export default function* fetchMoreQueryBooksSaga(action) {
  try {
    const data = yield call(fetchMoreQueryBooks, action);
    yield put({ type: MORE_QUERY_BOOKS_FETCH_SUCCEEDED, data });
  } catch (e) {
    console.log("error>>>", e);
    yield put({ type: BOOKS_FETCH_FAILED, message: e });
  }
}
