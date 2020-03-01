
import { CONVERSATIONS_UPDATED, CONVERSATIONS_REQUESTED } from '../types/conversations';
import { GLOBAL_APP_PROPERTIES_UPDATED } from '../types/global-app-properties';

export interface IConversationsState {
    conversations?: any[] | undefined
}

export const initialState ={conversations: [{
    createdBy: "Jim",
    headline: "play guitar"
},
{
    createdBy: "Bobby",
    headline: "go to a dubstep show"
}
]}

const reducer = (state: IConversationsState = initialState, action: IAction = {}): IConversationsState => {

    const { type, payload } = action;

    switch (type) {
        // case CONVERSATIONS_REQUESTED:
        //   return {
        //     ...state,
        //     fetching: true,
        //     error: undefined,
        //     conversations: undefined,
        //   };

        case GLOBAL_APP_PROPERTIES_UPDATED:
            return Object.assign({}, state, payload)


        default:
            return state;
    }
};

export default reducer;
