import { call, put } from "redux-saga/effects";
import { axios } from "../../configs/axios";
import {
  MORE_QUERY_BOOKS_FETCH_SUCCEEDED,
  BOOKS_FETCH_FAILED
} from "../../constant/store.constants";

const fetchMoreQueryBooks = async ({ queryText, startIndex }) => {
  console.log("startIndex>>>LLL", startIndex);
  const startIndexCond = startIndex !== 1 ? `startIndex=${startIndex}` : "";
  const req = await axios.get(
    `volumes?q=${queryText}+intitle:${queryText}&maxResults=15&${startIndexCond}&projection=lite`
  );
  console.log("fromFetchMoreSaga  >>>> ****", req.data);
  return req.data.items;
};

export default function* fetchMoreQueryBooksSaga(action) {
  try {
    const data = yield call(fetchMoreQueryBooks, action);
    yield put({ type: MORE_QUERY_BOOKS_FETCH_SUCCEEDED, data });
  } catch (e) {
    yield put({ type: BOOKS_FETCH_FAILED, message: e.message });
  }
}
