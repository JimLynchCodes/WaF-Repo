
import { INTIALIZE_SOCKETIO_CONNECTION, SOCKETIO_CONNETED, SOCKETIO_DISCONNETED } from '../types/socketManager';

export const initalizeSocketIo = () => ({
    type: INTIALIZE_SOCKETIO_CONNECTION,
});

export const SocketIoConnected = () => ({
    type: SOCKETIO_CONNETED,
});

export const socketIoDisconnected = () => ({
    type: SOCKETIO_DISCONNETED,
});