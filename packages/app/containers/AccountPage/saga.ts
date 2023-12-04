import { take, call, put, select, fork } from 'redux-saga/effects';
import { DEFAULT_ACTION } from './ducks';
import API from '../../utils/api';

/**
 * Load accountPage saga
 */
export function* rootAccountPageSaga() {
  while (true) {
    yield take(DEFAULT_ACTION);
    try {
      const response = yield call(API.getSettingStatus);
      if (response && response.status === true) {
        // yield put(schedulesLoaded(response.data));
      }
    } catch (error) {
      // yield put(scheduleLoadingError(error.message));
    }
  }
}

// Individual exports for testing
export default function* AccountPageSaga() {
  yield fork(rootAccountPageSaga);
}
