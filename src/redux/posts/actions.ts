import { createAction } from '@reduxjs/toolkit';
import { GetAllPostsSuccessPayload } from './types';

export const getAllPostsRequest = createAction('ACTION/GET_ALL_POSTS_REQUEST');
export const getAllPostsSuccess = createAction<GetAllPostsSuccessPayload>('ACTION/GET_ALL_POSTS_SUCCESS');
export const getAllPostsFailed = createAction('ACTION/GET_ALL_POSTS_FAILED');
