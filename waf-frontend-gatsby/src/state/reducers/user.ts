
import { USER_UPDATED } from '../types/user';
import { GeoJSON } from './global-app-properties';
import { AUTH0_LOGIN_SUCCESS } from '../types/login';

export interface IUserState {
  userId: string | undefined
  zipcode?: number
  geolocation?: GeoJSON,
  userObjAuth0: any
}

export const initialState = {
  userId: "",
  zipcode: undefined,
  geolocation: undefined,
  userObjAuth0: undefined
};

interface IAction {
  type?: string;
  payload?: unknown;
}

const reducer = (state: IUserState = initialState, action: IAction = {}): IUserState => {

  const { type, payload } = action;

  switch (type) {
    case USER_UPDATED:
      return Object.assign({}, state, payload)

    case AUTH0_LOGIN_SUCCESS:

      console.log('handling AUTH0 login success in user reducer! ', action.payload)
      return { ...state, ...{ user: action.payload }}

    default:
      return state;
  }
};

export default reducer;
