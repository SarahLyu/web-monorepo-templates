import { request } from '@/utils/request';

export interface UserInfo {
  id: string;
  name: string;
  avatar?: string;
  roles: string[];
}

export const login = (data: unknown) =>
  request('/login', {
    method: 'POST',
    data,
  });

export const logout = () =>
  request('/logout', {
    method: 'POST',
  });

export const fetchUserInfo = (): Promise<UserInfo> =>
  request('/user', {
    method: 'GET',
  });
