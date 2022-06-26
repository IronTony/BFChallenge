import { call, ForkEffect, put, takeLatest } from 'redux-saga/effects';
import { getAllPostsFailed, getAllPostsRequest, getAllPostsSuccess } from './actions';
import * as PostsAPI from './apiCall';
import { GetAllPostsSuccessPayload } from './types';

function* getAllPostsSaga() {
  try {
    const payload: GetAllPostsSuccessPayload = yield call(PostsAPI.getAllPosts);

    yield put(getAllPostsSuccess(payload));
  } catch (err) {
    yield put(getAllPostsFailed());
  }
}

function* postsSaga(): Generator<ForkEffect<never>, void> {
  yield takeLatest(getAllPostsRequest.type, getAllPostsSaga);
}

export default postsSaga;
