import { all, AllEffect, call, ForkEffect, spawn } from 'redux-saga/effects';
import postsSaga from './sagas';

function* postsRootSaga(): Generator<AllEffect<ForkEffect<void>>, void> {
  const sagas = [postsSaga];

  yield all(
    sagas.map(saga =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.error(e);
          }
        }
      }),
    ),
  );
}

export default postsRootSaga;
