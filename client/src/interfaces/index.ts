import { Roles } from "../types";

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
  createdAt: string;
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

export interface IUser {
  id: string;
  email: string;
  password: string;
  role: Roles;
  token: string;
}
