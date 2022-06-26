import env from '@env';
import axios from 'axios';
import { GetAllCommentsRequestPayload, GetAllCommentsSuccessPayload } from './types';

export async function getAllComments({ postId }: GetAllCommentsRequestPayload): Promise<GetAllCommentsSuccessPayload> {
  try {
    const response = await axios.get(`${env.API_URL}/public/v2/posts/${postId}/comments`);

    return response;
  } catch (error) {
    console.error('getAllComments - Error: ', error);
    throw error;
  }
}
