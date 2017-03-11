import { combineReducers } from 'redux'
import {selectTab,postsByCnode} from './TabReducer'
import {topicByCnode} from './PostReducer'
import {userByCnode} from './UserReducer'
import {login} from './LoginReducer'
import {message} from './messageReducer'


const rootReducer = combineReducers({
    selectTab,
    postsByCnode,
    topicByCnode,
    userByCnode,
    login,
    message
});

export default rootReducer;
