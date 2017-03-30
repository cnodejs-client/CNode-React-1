import fetch from 'isomorphic-fetch'
import {goBack} from 'react-router-redux'
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

const login_success = (json,collection) => {
    return {
        type: LOGIN_SUCCESS,
        data: json,
        topic_collect: collection.data.map(v=>v.id)
    };

}

const login_error = (json) => {
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
                    const {loginname} = json;
                    const  collectionURL = URL_PREFIX+`/topic_collect/${loginname}`
                    fetch(collectionURL)
                        .then((reponse) => reponse.json())
                        .then((collection)=>{
                            dispatch(login_success(json,collection))
                            alert('登录成功')
                            dispatch(goBack())
                        })
                }else {
                    dispatch(login_error(json.loginname))
                    alert('登录失败')
                }
            })
    }
}

export {fetchLoginData, login_error, login_success, postAccessToken}
export {POST_ACCESS_TOKEN, LOGIN_SUCCESS, LOGIN_ERROR}