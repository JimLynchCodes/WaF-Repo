import { TODOS_REQUESTED } from '../types/todos';
import todoService, { ITodosSuccess } from '../../services/todos.service';
import { todosSuccess, todosFailed } from '../actions/todos';
import { Dispatch } from 'react';
import { MiddlewareAPI, AnyAction } from 'redux';

const todosCustomMiddleware = () => {
  return (store: MiddlewareAPI<any>) => (next: Dispatch<AnyAction>) => async (action: AnyAction) => {
    
    console.log('todos middleware handling event!', action)
    
    switch (action.type) {
      case TODOS_REQUESTED:
        console.log('todos 1')
        
        try {
          console.log('todos 2')
          const todosData = await todoService() as ITodosSuccess;
          store.dispatch(todosSuccess(todosData));
        } catch (error) {
          store.dispatch(todosFailed(error));
        }

        break;

      default:
        next(action);

    }
  };
};


export default todosCustomMiddleware;
