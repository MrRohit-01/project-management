import { User } from '../interfaces/Auth';

export const isAuthenticated = (): boolean => {
  return localStorage.getItem('token') !== null;
};

export const getUser = (): User | null => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

export const logout = (): void => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};