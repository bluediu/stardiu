import { IUser } from '../interfaces';

export type IStatus = 'authenticated' | 'not-authenticated';

export interface IAuthState {
  user: IUser | Record<string, never>;
  status: IStatus;
  checking: boolean;
}
