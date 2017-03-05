import { combineReducers } from 'redux'
import {selectTab,postsByCnode} from './TabReducer'
import {topicByCnode} from './PostReducer'
import {userByCnode} from './UserReducer'


const rootReducer = combineReducers({
    selectTab,
    postsByCnode,
    topicByCnode,
    userByCnode
});

export default rootReducer;
