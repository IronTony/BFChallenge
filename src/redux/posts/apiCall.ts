import env from '@env';
import axios from 'axios';
import {
  GetAllPostsSuccessPayload,
  GetSinglePostDetailsRequestPayload,
  GetSinglePostDetailsSuccessPayload,
} from './types';

export async function getAllPosts(): Promise<GetAllPostsSuccessPayload> {
  try {
    const response = await axios.get(`${env.API_URL}/public/v2/posts`);

    return response.data;
  } catch (error) {
    console.error('getAllPosts - Error: ', error);
    throw error;
  }
}

export async function getPostDetails({
  postId,
}: GetSinglePostDetailsRequestPayload): Promise<GetSinglePostDetailsSuccessPayload> {
  try {
    const response = await axios.get(`${env.API_URL}/public/v2/posts/${postId}`);

    return response;
  } catch (error) {
    console.error('getPostDetails - Error: ', error);
    throw error;
  }
}
