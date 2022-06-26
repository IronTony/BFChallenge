import env from '@env';
import axios from 'axios';
import { GetUserInfoRequestPayload, GetUserSuccessPayload } from './types';

export async function getUserInfo({ userId }: GetUserInfoRequestPayload): Promise<GetUserSuccessPayload> {
  try {
    const response = await axios.get(`${env.API_URL}/public/v2/users/${userId}`);

    return response;
  } catch (error) {
    console.error('getUserInfo - Error: ', error);
    throw error;
  }
}
