
import { USER_UPDATED } from '../types/user';

export interface IUserState {
  userId: string | undefined
}

export const initialState = {
  userId: "",
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
