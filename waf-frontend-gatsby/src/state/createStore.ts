import { composeWithDevTools } from 'redux-devtools-extension';
import combinedReducers from './reducers/root-reducer';
import { load, save } from 'redux-localstorage-simple';
import { createStore, applyMiddleware } from 'redux';
import todosCustomMiddleware from './middlewares/todosCustomMiddleware';
import loginCustomMiddleware from './middlewares/loginCustomMiddleware';
import socketManager from './middlewares/socketManager';
import { ITodosState } from './reducers/todos';
import { IConversationsState } from './reducers/conversations';
import { IListingsState } from './reducers/listings';
import { IUserState } from './reducers/user';
import { IGlobalAppPropertiesState } from './reducers/global-app-properties';

export interface IState {
  todosReducer?: ITodosState,
  userReducer?: IUserState;
  globalAppPropertiesReducer?: IGlobalAppPropertiesState;
  listingsReducer?: IListingsState;
  conversationsReducer?: IConversationsState;
}

export default (preloadedState: IState = {}) => {
  return createStore(
    combinedReducers,
    getLoadedState(preloadedState),
    composeWithDevTools(
      applyMiddleware(
        socketManager(),
        save({ states: ['userReducer'] }),
        todosCustomMiddleware(),
        loginCustomMiddleware()
      )
    ),

  );
};

const getLoadedState = (preloadedState: IState | any) => {
  if (typeof window !== 'undefined')
    return {
      ...preloadedState,
      ...load({ states: ['userReducer'], disableWarnings: true }),
    }

  return {
    ...preloadedState,
  }
}