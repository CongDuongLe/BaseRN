import { put, takeLatest, call } from 'typed-redux-saga';
import {getCsrfToken} from "@services/API/LoginAPI";
import {saveCsrfToken} from "@reduxCore/auth/AuthSlice";

function* saveCsrfTokenSaga() {
  const response = yield* call(getCsrfToken);
  console.log(response);
  yield put(saveCsrfToken(response.data.result));
}


export function* authSaga() {
  // yield takeLatest(saveCsrfToken, saveCsrfTokenSaga);
}
