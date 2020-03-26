import { combineReducers } from 'redux';
import todosReducer, { ITodosState } from './todos';
import userReducer, { IUserState } from './user'
import listingsReducer, { IListingsState } from './listings'
import conversationsReducer, { IConversationsState } from './conversations'
import globalAppPropertiesReducer, { IGlobalAppPropertiesState } from './global-app-properties'

export default combineReducers({
  todosReducer,
  userReducer,
  listingsReducer,
  conversationsReducer,
  globalAppPropertiesReducer,
});

export interface IStore {
  todosReducer: ITodosState,
  userReducer: IUserState
  listingsReducer: IListingsState
  conversationsReducer: IConversationsState
  globalAppPropertiesReducer: IGlobalAppPropertiesState
}
