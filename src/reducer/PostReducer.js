import {REQUEST_TOPIC, RECEIVE_TOPIC} from '../action'

var initialTopic = {
    isFetching: false,
    didInvalidate: false,
    data: {},
}

const topic = (state = initialTopic, action) => {
    switch (action.type) {
        case REQUEST_TOPIC:
            return {
                ...state,
                isFetching: true
            };
        case RECEIVE_TOPIC:
            return {
                ...state,
                isFetching: false,
                data: action.data
            };
        default:
            return state;
    }
}

const topicByCnode = (state = {}, action)=>{
    switch (action.type) {
        case REQUEST_TOPIC:
        case RECEIVE_TOPIC:
            return {
                ...state,
                [action.topicId]: topic(state[action.topicId], action)
            };
        default:
            return state;
    }
}

export {topicByCnode}


