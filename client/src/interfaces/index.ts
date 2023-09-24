export interface ISignIn {
  email: string;
  password: string;
}

export interface ISignUp extends ISignIn {}

export interface JwtTokens {
  accessToken: string;
  refreshToken: string;
}
