import { createReducer } from '@reduxjs/toolkit';
import { getAllPostsFailed, getAllPostsRequest, getAllPostsSuccess } from './actions';
import { Post } from './types';

export interface PostsState {
  loading: boolean;
  posts: Post[];
}

const initialState: PostsState = {
  loading: false,
  posts: [],
};

export const allPostsReducer = createReducer(initialState, {
  [getAllPostsRequest.type]: state => {
    state.loading = true;
    state.posts = [];
  },
  [getAllPostsSuccess.type]: (state, action) => {
    state.loading = false;
    state.posts = action.payload;
  },
  [getAllPostsFailed.type]: state => {
    state.loading = false;
  },
});
