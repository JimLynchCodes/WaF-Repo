import { TODOS_REQUESTED } from '../types/todos';
import { INTIALIZE_SOCKETIO_CONNECTION } from '../types/socketManager';
import todoService, { ITodosSuccess } from '../../services/todos.service';
import { todosSuccess, todosFailed } from '../actions/todos';
import { MiddlewareAPI, AnyAction, Action } from 'redux';
import { Dispatch } from 'react';
import io from 'socket.io-client';

import { SUBMIT_MANUALLY_ENTERED_ZIPCODE, SUBMIT_UPDATED_LOCATION } from '../types/global-app-properties';
import { LOGIN_SUCCESS, AUTH0_LOGIN_SUCCESS } from '../types/login';
import { receivedNearbyListings } from '../actions/listings';

let socket: any = null;

const socketManager = () => {
    return (store: MiddlewareAPI<any>) => (next: Dispatch<AnyAction>) => async (action: AnyAction) => {

        console.log('socket middleware was added!')
        switch (action.type) {
            case INTIALIZE_SOCKETIO_CONNECTION:
                console.log('handling INTIALIZE_SOCKETIO_CONNECTION! Let\'s connect!')

                socket = io('http://localhost:3000');
                socket.on('connect', () => {
                    socket.emit('new message', { "username": "TIMMAYYY", "message": "hi" })
                    console.log("connected!")
                });

                socket.on('dope message', function (data: any) {
                    console.log("received a dope message! ", data)

                    socket.emit('dope response', { "foo": "baby" })
                });

                socket.on('foo baby back', function (data: any) {
                    console.log("received a foo baby message back! ", data)

                    // socket.emit('dope response', {"foo": "baby"})
                });

                socket.on('disconnect', function () {
                    console.log("disconnected!")
                });

                socket.on('NEARBY_LISTINGS', (data: any) => {
                    const location = data.location;
                    const nearbyListings = data.listings;

                    console.log('got some ish: ', data)
                    console.log('Got response from server!\nLocation is ', location, '\nListings: ', nearbyListings)

                    store.dispatch(receivedNearbyListings(location, nearbyListings));
                })

                break;

            // case AUTH0_LOGIN_SUCCESS:

            //     console.log('handling login success and sending payload:', action.payload)
            //     // console.log('p: ', payload)

            //     const loginPayload = {
            //         userId: action.payload.sub,
            //         givenName: action.payload.given_name,
            //         familyName: action.payload.family_name
            //     }

            //     console.log('socket is')
            //     // socket.emit(AUTH0_LOGIN_SUCCESS, loginPayload)
            //     break;


            case SUBMIT_UPDATED_LOCATION:

                console.log('handling SUBMIT_UPDATED_LOCATION sending to server:', action.payload)
                socket.emit(SUBMIT_UPDATED_LOCATION, action.payload)
                break;

            case SUBMIT_MANUALLY_ENTERED_ZIPCODE:

                console.log('handling mnanually entered zipcode and sending to server:', action.payload)
                socket.emit(SUBMIT_MANUALLY_ENTERED_ZIPCODE, action.payload)
                break;

            //     try {
            //       const todosData = await todoService() as ITodosSuccess;
            //       store.dispatch(todosSuccess(todosData));
            //     } catch (error) {
            //       store.dispatch(todosFailed(error));
            //     }

            //     break;

            default:
                next(action);

        }
    };
};

export const sendToServer = (event: string, payload: any) => {

}

export default socketManager;
