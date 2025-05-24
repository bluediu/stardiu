export interface IUserUpdate {
  name?: string;
  img?: File;
  email?: string;
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
