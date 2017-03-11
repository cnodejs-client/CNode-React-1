import { combineReducers } from 'redux'
import {selectTab,postsByCnode} from './TabReducer'
import {topicByCnode} from './PostReducer'
import {userByCnode} from './UserReducer'
import {login} from './LoginReducer'


const rootReducer = combineReducers({
    selectTab,
    postsByCnode,
    topicByCnode,
    userByCnode,
    login
});

export default rootReducer;
