import postsRootSaga from '@redux/posts/sagas';
import { all, AllEffect, call, ForkEffect, spawn } from 'redux-saga/effects';

function* rootSaga(): Generator<AllEffect<ForkEffect<void>>> {
  const sagas = [postsRootSaga];

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

export default rootSaga;
