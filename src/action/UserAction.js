import fetch from 'isomorphic-fetch'
const REQUEST_USER = 'REQUEST_USER'
const RECEIVE_USER = 'RECEIVE_USER'

const requestUser = (userName) => {
    return {
        type: REQUEST_USER,
        userName
    };

}

const receiveUser = (userName, json) => {
    return {
        type: RECEIVE_USER,
        userName,
        data: json.data
    };

}

const fetchUserData = (userName) => {
    return function (dispatch) {
        dispatch(requestUser(userName))
        const url = `https://cnodejs.org/api/v1/user/${userName}`
        fetch(url)
            .then((reponse) => reponse.json())
            .then((json) => {
                dispatch(receiveUser(userName, json))
            })
    }
}

export {RECEIVE_USER,REQUEST_USER}
export {receiveUser,requestUser,fetchUserData}