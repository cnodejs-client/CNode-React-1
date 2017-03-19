import {POST_ACCESS_TOKEN,LOGIN_ERROR,LOGIN_SUCCESS} from '../action'
import {FAVORITE_TOPIC,UNFAVORITE_TOPIC} from '../action'

const initialLogin = {
    isLogin: false,
    isFetching: false,
    accessToken: '',
    data: {},
    topic_collect: []
};

const login = (state = initialLogin, action) => {
    switch (action.type){
        case POST_ACCESS_TOKEN:
            return {
                ...state,
                isFetching: true,
                accessToken: action.accessToken
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isLogin: true,
                data: action.data,
                topic_collect: action.topic_collect
            }
        case LOGIN_ERROR:
            return {
                ...initialLogin
            }
        case FAVORITE_TOPIC:
            return {
                ...state,
                topic_collect: [...state.topic_collect,action.topicId]
            }
        case UNFAVORITE_TOPIC:
            return {
                ...state,
                topic_collect: state.topic_collect.filter(id => id !=action.topicId)
            }
        default:
            return state;
    }
}


export {login};
