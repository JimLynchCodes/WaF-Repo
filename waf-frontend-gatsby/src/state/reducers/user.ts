
import { USER_UPDATED } from '../types/user';
import { GeoJSON } from './global-app-properties';
import { AUTH0_LOGIN_SUCCESS, LOGOUT } from '../types/login';

export interface IUserState {
  userId: string | undefined
  zipcode?: number
  geolocation?: GeoJSON,
  user: any
}

export const initialState = {
  userId: "",
  zipcode: undefined,
  geolocation: undefined,
  user: undefined
};

interface IAction {
  type?: string;
  payload?: any;
}

const reducer = (state: IUserState = initialState, action: IAction = {}): IUserState => {

  const { type, payload } = action;

  switch (type) {
    case USER_UPDATED:
      return Object.assign({}, state, payload)

    case AUTH0_LOGIN_SUCCESS:
      console.log('handling AUTH0 login success in user reducer! ', action.payload)
      return { ...state, user: action.payload, ...{ userId: action?.payload?.sub } }

    case LOGOUT:
      return {
        ...state,
        userId: '',
        user: undefined
      };

    default:
      return state;
  }
};

export default reducer;
