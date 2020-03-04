import { LOGIN_FAILED, LOGIN_REQUESTED, LOGIN_SUCCESS, LOGOUT, LOGIN_SUCCESS_PROCESSED,
  AUTH0_LOGIN_SUCCESS } from './../types/login';
import { ILoginSuccess, ILoginError } from '../../services/simple-login.service';


export const loginRequested = () => ({
  type: LOGIN_REQUESTED,
});

export const loginSuccess = (userObj: any) => {
  console.log('dispatching login success...')
  return {
  type: LOGIN_SUCCESS,
  payload: userObj,
}};

export const auth0LoginSuccess = (userObj: any) => {
  console.log('dispatching auth0 login success...')
  return {
  type: AUTH0_LOGIN_SUCCESS,
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
