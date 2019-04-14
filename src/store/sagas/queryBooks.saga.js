import { call, put } from "redux-saga/effects";
import { axios } from "../../configs/axios";
import {
  QUERY_BOOKS_FETCH_SUCCEEDED,
  BOOKS_FETCH_FAILED
} from "../../constant/store.constants";

const queryBooks = async ({ queryText }) => {
  // console.log("action>>>***", action);
  const req = await axios.get(
    `volumes?q=${queryText}+intitle:${queryText}&maxResults=15&projection=lite`
  );
  console.log("fromSagaQuery  >>>> ****", req.data);
  return req.data.items;
};

export default function* queryBooksSaga(action) {
  try {
    const data = yield call(queryBooks, action);
    yield put({ type: QUERY_BOOKS_FETCH_SUCCEEDED, data });
  } catch (e) {
    yield put({ type: BOOKS_FETCH_FAILED, message: e.message });
  }
}
