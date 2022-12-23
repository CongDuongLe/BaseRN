import { all } from 'redux-saga/effects';
import { mainSaga } from '../main/sagas';
import { authSaga } from '../auth/AuthSaga';
import { meSaga } from '@reduxCore/me/meSaga';

export default function* rootSaga() {
  yield all([authSaga()]);
  yield all([mainSaga()]);
  yield all([meSaga()]);
}
