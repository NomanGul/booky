import { call, put } from "redux-saga/effects";
import { axios } from "../../configs/axios";
import {
  QUERY_BOOKS_FETCH_SUCCEEDED,
  BOOKS_FETCH_FAILED
} from "../../constant/store.constants";

const queryBooks = async ({ queryText }) => {
  // console.log("action>>>***", action);
  const req = await axios.get(
    `volumes?q=${queryText}+intitle:${queryText}&projection=full`
  );
  console.log("fromSagaQuery  >>>> ****", req.data);
  return req.data;
};

export default function* queryBooksSaga(action) {
  try {
    const data = yield call(queryBooks, action);
    yield put({ type: QUERY_BOOKS_FETCH_SUCCEEDED, data });
  } catch (e) {
    console.log("error>>>", e);
    yield put({ type: BOOKS_FETCH_FAILED, message: e });
  }
}
