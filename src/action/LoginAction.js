import fetch from 'isomorphic-fetch'
import {URL_PREFIX} from '../constant/Contant'
const POST_ACCESS_TOKEN = 'POST_ACCESS_TOKEN'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_ERROR = 'LOGIN_ERROR'

const postAccessToken = (accessToken) => {
    return {
        type: POST_ACCESS_TOKEN,
        accessToken
    };

}

const login_success = (json) => {
    alert('登录成功')
    return {
        type: LOGIN_SUCCESS,
        data: json
    };

}

const login_error = (json) => {
    alert('登录失败')
    return {
        type: LOGIN_ERROR,
        data: json
    }
}

const fetchLoginData = (accessToken) => {
    return function (dispatch) {
        dispatch(postAccessToken(accessToken))
        const url = URL_PREFIX + '/accesstoken'
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({accesstoken: accessToken})
        })
            .then((reponse) => reponse.json())
            .then((json) => {
                if(json.success){
                    dispatch(login_success(json))
                }else {
                    dispatch(login_error(json))
                }
            }).catch(()=>{
            dispatch(login_error(json))
        })
    }
}

export {fetchLoginData, login_error, login_success, postAccessToken}
export {POST_ACCESS_TOKEN, LOGIN_SUCCESS, LOGIN_ERROR}