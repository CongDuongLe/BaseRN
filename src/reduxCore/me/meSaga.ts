import { put, takeLatest, call } from 'typed-redux-saga';
import { getListMenuItems } from '@services/API/UserAPI';
import { getListMenuItemsSuccess } from '@reduxCore/me/meSlice';

function* getListMenuItemsSaga() {
  const response = yield* call(getListMenuItems, {});
  console.log('response', response);
  const { data } = response;
  yield put(getListMenuItemsSuccess(data));
}

export function* meSaga() {
  yield takeLatest(getListMenuItemsSuccess, getListMenuItemsSaga);
}
