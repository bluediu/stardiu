import { IUser } from './user';

export interface IAuthResponse {
  ok: boolean;
  user: IUser;
  token: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister extends ILogin {
  name: string;
  role: string;
}
