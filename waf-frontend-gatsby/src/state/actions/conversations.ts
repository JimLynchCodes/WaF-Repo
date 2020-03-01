import { LOGIN_FAILED, LOGIN_REQUESTED, LOGIN_SUCCESS, LOGOUT, LOGIN_SUCCESS_PROCESSED } from '../types/login';

export const loginRequested = () => ({
  type: LOGIN_REQUESTED,
});

export const loginSuccess = (userObj: any) => {
  console.log('dispatching login success...')
  return {
  type: LOGIN_SUCCESS,
  payload: userObj,
}};

export const loginSuccessProcessed = (error: Error) => ({
  type: LOGIN_SUCCESS_PROCESSED,
  payload: error,
});

export const loginFailed = (error: Error) => ({
  type: LOGIN_FAILED,
  payload: error,
});

export const logout = () => ({
  type: LOGOUT,
});
