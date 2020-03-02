import { LOGIN_FAILED, LOGIN_REQUESTED, LOGIN_SUCCESS, LOGOUT } from '../types/login';
import { LISTINGS_UPDATED, UPDATED_LISTINGS_RECEIVED } from '../types/listings';

export interface IListingsState {
  listings: any[] | undefined,
}

export const initialState = {
  listings: [{
    createdBy: "Fake User",
    headline: "play guitar"
  },
  {
    createdBy: "Fake User",
    headline: "go to a dubstep show"
  }
  ],
};

interface IAction {
  type?: string;
  payload?: unknown;
}

const reducer = (state: IListingsState = initialState, action: IAction = {}): IListingsState => {

  const { type, payload } = action;

  switch (type) {
    case LISTINGS_UPDATED:
      return Object.assign({}, state, payload)

    case UPDATED_LISTINGS_RECEIVED:

        return {...state, }
      break;

    default:
      return state;
  }
};

export default reducer;
