export type GetAllCommentsRequestPayload = {
  postId: number;
};

export type GetAllCommentsSuccessPayload = {
  status: number;
  data: Comment[];
};

export type Comment = {
  id: number;
  post_id: number;
  name: string;
  email: string;
  body: string;
};
