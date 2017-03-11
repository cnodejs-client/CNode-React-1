import {REQUEST_MESSAGE,RECEIVE_MESSAGE} from '../action'
import {requestMessage, receiveMessage, fetchMessageData }from '../action'


var initialMessage = {
    isFetching: false,
}

const message = (state = initialMessage, action) => {
    switch (action.type) {
        case REQUEST_MESSAGE:
            return {
                ...state,
                isFetching: true
            };
        case RECEIVE_MESSAGE:
            return {
                ...state,
                isFetching: false,
                data: action.data
            };
        default:
            return state;
    }
}



export {message}


