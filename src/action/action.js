import fetch from 'isomorphic-fetch'
import {TOPIC} from '../constant/Contant'
export const SELECT_TAB = 'SELECT_TAB'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const INVALIDATE_TAB = 'INVALIDATE_TAB'


export const selectTab = function (tab) {
    return {
        type: SELECT_TAB,
        tab
    }
}

export const requestPosts = function (tab) {
    return {
        type: REQUEST_POSTS,
        tab
    }
}

export const invalidateTab = function (tab) {
    return {
        type: INVALIDATE_TAB,
        tab
    }
}


export const receivePosts = function (tab, json) {
    return {
        type: RECEIVE_POSTS,
        tab,
        posts: json.data,
        receivedAt: Date.now()
    }
}

export const fetchData = function (url,tab=TOPIC.all) {
    return function (dispatch) {
        dispatch(selectTab(tab))
        dispatch(requestPosts(tab))
        return fetch(url)
            .then((response) => response.json())
            .then((json) => {
                dispatch(receivePosts(tab, json))
            })
    }
}

