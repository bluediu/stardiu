export interface IAuthResponse {
  ok: boolean;
  user: IUser;
  token: string;
}

export interface IUser {
  img: string;
  role: string;
  state: boolean;
  google: boolean;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  uid: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister extends ILogin {
  name: string;
  role: string;
}
