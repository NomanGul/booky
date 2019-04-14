import { call, put } from "redux-saga/effects";
import { axios } from "../../configs/axios";
import {
  BOOKS_FETCH_SUCCEEDED,
  BOOKS_FETCH_FAILED
} from "../../constant/store.constants";
import randomQuery from "../../utils/random";

const fetchBooks = async () => {
  const req = await axios.get(
    `volumes?q=${randomQuery()}&maxResults=15&projection=lite`
  );
  console.log("fromSaga  >>>> ****", req.data);
  return req.data.items;
};

export default function* fetchBooksSaga() {
  try {
    const data = yield call(fetchBooks);
    yield put({ type: BOOKS_FETCH_SUCCEEDED, data });
  } catch (e) {
    yield put({ type: BOOKS_FETCH_FAILED, message: e.message });
  }
}
