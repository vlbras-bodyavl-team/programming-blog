import { Role } from '../enums/role.enum';

export interface JwtPayload {
  id: string;
  role: Role;
}

export interface JwtPayloadWithRefreshToken extends JwtPayload {
  refreshToken: string;
}