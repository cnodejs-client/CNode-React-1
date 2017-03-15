import fetch from 'isomorphic-fetch'
import {URL_PREFIX} from '../constant/Contant'
const REQUEST_USER = 'REQUEST_USER'
const RECEIVE_USER = 'RECEIVE_USER'

const requestUser = (userName) => {
    return {
        type: REQUEST_USER,
        userName
    };

}

const receiveUser = (userName, userJson, topicJson) => {
    return {
        type: RECEIVE_USER,
        userName,
        data: Object.assign(userJson.data,{topic_collect:topicJson.data})
    };

}

const fetchUserData = (userName) => {
    return function (dispatch) {
        dispatch(requestUser(userName))
        const userUrl = URL_PREFIX + `/user/${userName}`
        const topicUrl = URL_PREFIX + `/topic_collect/${userName}`
        Promise.all([fetch(userUrl), fetch(topicUrl)])
            .then(([userResponse, topicResponse]) =>
                Promise.all([userResponse.json(), topicResponse.json()])
            ).then(([user, topic]) => {
            dispatch(receiveUser(userName, user, topic));
        });
    }
}

export {RECEIVE_USER, REQUEST_USER}
export {receiveUser, requestUser, fetchUserData}