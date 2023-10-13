export interface ISignIn {
  email: string;
  password: string;
}

export interface ISignUp extends ISignIn {}

export interface JwtTokens {
  accessToken: string;
  refreshToken: string;
}

export interface IPost {
  id: string;
  title: string;
  content: string;
  topic: string;
}

export interface IAdminPost extends IPost {
  createdAt: Date;
  createdBy: {
    id: string;
    email: string;
  };
}

export interface ITopic {
  id: string;
  name: string;
  posts: IPost[];
}
