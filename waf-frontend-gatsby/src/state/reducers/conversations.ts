
import { RECEIVED_CONVERSATIONS } from '../types/conversations';

export interface IConversationsState {
    conversations: {
        userCreated: any
        userRespondedTo: any
    }
}

export const initialState = {
    conversations: {

        userCreated: [
            {
                "_id": "5e55e9845947e79ee931a48g",
                "conversation": "5e55e9845947e79ee931a48g",
                "listingCreator": "1234",
                "listingResponder": "1234",
                "relatedListing": '2353245',
                "dateCreated": new Date("2020-03-02T15:01:20.202Z"),
                "messages": [
                    {
                        "saidBy": "1234",
                        "message": "hello?",
                        "dateSent": new Date("2020-03-02T15:01:20.202Z")
                    }
                ]
            }
        ],
        userRespondedTo: [
            {
                "_id": "5e55e9845947e79ee931sdasd8g",
                "conversation": "5e55e9845947e79ee931a48g",
                "listingCreator": "1234",
                "listingResponder": "1234",
                "relatedListing": '2353245',
                "dateCreated": new Date("2020-03-02T15:01:20.202Z"),
                "messages": [
                    {
                        "saidBy": "1234",
                        "message": "hello?",
                        "dateSent": new Date("2020-03-02T15:01:20.202Z")
                    }
                ]
            }
        ]
    }
}

export interface IAction {
    type?: string;
    payload?: unknown;
}

const reducer = (state: IConversationsState = initialState, action: IAction = {}): IConversationsState => {

    const { type, payload }: any = action;

    switch (type) {
        // case CONVERSATIONS_REQUESTED:
        //   return {
        //     ...state,
        //     fetching: true,
        //     error: undefined,
        //     conversations: undefined,
        //   };

        // case GLOBAL_APP_PROPERTIES_UPDATED:
        //     return Object.assign({}, state, payload)

        case RECEIVED_CONVERSATIONS:
            return { ...initialState, conversations: payload.newConversations }


        default:
            return state;
    }
};

export default reducer;
