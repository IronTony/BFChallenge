import type { RootState } from '@redux/reducers';
import { createSelector } from '@reduxjs/toolkit';

const allPostsSelector = (state: RootState) => state.posts;

export const allPostsLoading = createSelector(allPostsSelector, postsState => postsState.loading);
export const allPosts = createSelector(allPostsSelector, postsState => postsState.posts);
