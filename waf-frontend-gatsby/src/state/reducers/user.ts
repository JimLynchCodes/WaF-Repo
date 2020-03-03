
import { USER_UPDATED } from '../types/user';
import { GeoJSON } from './global-app-properties';

export interface IUserState {
  userId: string | undefined
  zipcode?: number
  geolocation?: GeoJSON
}

export const initialState = {
  userId: "",
  zipcode: undefined,
  geolocation: undefined,
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

    default:
      return state;
  }
};

export default reducer;
