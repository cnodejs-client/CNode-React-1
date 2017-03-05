import {combineReducers}from 'redux'
import {RECEIVE_USER,REQUEST_USER} from '../action'

const initialUser = {
    isFetching: false,
    didInvalidate: false,
    data: {}
};

const user = (state = initialUser,action)=>{
    switch(action.type){
        case REQUEST_USER:
            return {
                ...state,
                isFetching: true
            };
        case RECEIVE_USER:
            return{
                ...state,
                isFetching: false,
                data: action.data
            }
        default:
            return state;
    }
}


const userByCnode = (state={},action)=>{
    switch (action.type){
        case RECEIVE_USER:
        case REQUEST_USER:
            return{
                ...state,
                [action.userName] : user(state[action.userName],action)
            };
        default:
            return state;
    }
}

export {userByCnode}