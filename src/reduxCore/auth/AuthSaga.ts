import { put, takeLatest, call } from 'typed-redux-saga';
import { getCsrfToken } from '@services/API/LoginAPI';
import { saveCsrfTokenSuccess, saveCsrfToken } from '@reduxCore/auth/AuthSlice';

function* saveCsrfTokenSaga() {
  const response = yield* call(getCsrfToken);
  yield [put(saveCsrfTokenSuccess(response.data)), put(saveCsrfToken(false))];
}

export function* authSaga() {
  yield takeLatest(saveCsrfToken, saveCsrfTokenSaga);
}
