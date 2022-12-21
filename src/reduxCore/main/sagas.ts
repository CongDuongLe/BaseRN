import { put, takeLatest, call } from 'typed-redux-saga';
import { todoRequestAction, todoSuccessRequestAction } from './slice';
import AxiosClient from "@utils/Https";
const fetchTodoSaga = () => {
  return AxiosClient.get('https://jsonplaceholder.typicode.com/posts');
};

function* todoRequestSaga() {
  const response = yield* call(fetchTodoSaga);
  const { data } = response;

  yield put(todoSuccessRequestAction(data));
}

export function* mainSaga() {
  yield takeLatest(todoRequestAction, todoRequestSaga);
}
