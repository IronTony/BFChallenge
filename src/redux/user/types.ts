export type GetUserInfoRequestPayload = {
  userId: number;
};

export type GetUserSuccessPayload = {
  status: number;
  data: User;
};

export type User = {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
};
