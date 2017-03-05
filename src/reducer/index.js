import { combineReducers } from 'redux'
import {selectTab,postsByCnode} from './TabReducer'
import {topicByCnode} from './PostReducer'


const rootReducer = combineReducers({
    selectTab,
    postsByCnode,
    topicByCnode
});

export default rootReducer;
