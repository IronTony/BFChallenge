export type GetAllPostsSuccessPayload = Post[];

export type GetSinglePostDetailsRequestPayload = {
  postId: number;
};

export type GetSinglePostDetailsSuccessPayload = {
  status: number;
  data: Post;
};

export type Post = {
  id: number;
  user_id: number;
  title: string;
  body: string;
};
