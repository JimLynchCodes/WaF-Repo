import { LOGIN_FAILED, LOGIN_REQUESTED, LOGIN_SUCCESS, LOGOUT, LOGIN_SUCCESS_PROCESSED } from '../types/login';
import { RECEIVED_CONVERSATIONS } from '../types/conversations';

export const loginRequested = () => ({
  type: LOGIN_REQUESTED,
});

export const loginSuccess = (userObj: any) => {
  console.log('dispatching login success...')
  return {
    type: LOGIN_SUCCESS,
    payload: userObj,
  }
};

export const loginSuccessProcessed = (error: Error) => ({
  type: LOGIN_SUCCESS_PROCESSED,
  payload: error,
});

export const loginFailed = (error: Error) => ({
  type: LOGIN_FAILED,
  payload: error,
});

export const logout = () => ({
  type: LOGOUT,
});

const fakeNewConversations = {

  conversations: {

    userCreated: [
      {
        "_id": "5e51e9845947e79ee931a48g",
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
      },
      {
        "_id": "5e25e9845947e79ee931a48g",
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
      },
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

export const receivedConversations = (realNewConversations: any) => ({
  type: RECEIVED_CONVERSATIONS, payload: fakeNewConversations
});

