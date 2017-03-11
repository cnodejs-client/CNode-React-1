import {POST_ACCESS_TOKEN,LOGIN_ERROR,LOGIN_SUCCESS} from '../action/LoginAction'

const initialLogin = {
    isLogin: false,
    isFetching: false,
    accessToken: '',
    data: {}
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
                data: action.data
            }
        case LOGIN_ERROR:
            return {
                ...initialLogin
            }
        default:
            return state;
    }
}


export {login};
