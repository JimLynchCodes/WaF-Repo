import { LOGIN_FAILED, LOGIN_REQUESTED, LOGIN_SUCCESS, LOGOUT, AUTH0_LOGIN_SUCCESS } from '../types/login';
import { LISTINGS_UPDATED, UPDATED_LISTINGS_RECEIVED } from '../types/listings';

export interface IListingsState {
  listings: any[] | undefined,
  location: any
}

export const initialState = {
  listings: [{
    createdBy: "Fake User",
    headline: "play guitar"
  }
  ],
  location: undefined
};

interface IAction {
  type?: string;
  payload?: any;
}

const reducer = (state: IListingsState = initialState, action: IAction = {}): IListingsState => {

  const { type, payload } = action;

  switch (type) {
    case LISTINGS_UPDATED:
      return Object.assign({}, state, payload)

    case UPDATED_LISTINGS_RECEIVED:
      console.log('got some listings, listings! ', action)
      return {
        ...state,
        listings: action.payload.listings,
        location: action.payload.location
      }

    default:
      return state;
  }
};

export default reducer;
