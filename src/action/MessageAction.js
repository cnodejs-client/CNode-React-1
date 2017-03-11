import fetch from 'isomorphic-fetch'
import {URL_PREFIX} from '../constant/Contant'

const REQUEST_MESSAGE = 'REQUEST_MESSAGE'
const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'

const requestMessage = () => {
    return {
        type: REQUEST_MESSAGE,
    };

}

const receiveMessage = (json) => {
    return {
        type: RECEIVE_MESSAGE,
        data: json.data
    };

}

const fetchMessageData = (accessToken) => {
    return function (dispatch) {
        dispatch(requestMessage())
        const url = URL_PREFIX + '/messages?mdrender=false&accesstoken=' + accessToken
        fetch(url)
            .then((reponse) => reponse.json())
            .then((json) => {
                if (json.success) {
                    dispatch(receiveMessage(json))
                }
            })
    }
}

export {REQUEST_MESSAGE, RECEIVE_MESSAGE}
export {requestMessage, receiveMessage, fetchMessageData}