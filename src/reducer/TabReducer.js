import {
    REQUEST_POSTS, RECEIVE_POSTS, SELECT_TAB, INVALIDATE_TAB
} from '../action'


var initialPost = {
    isFetching: false,
    didInvalidate: false,
    data: [],
    fetchedPageCount: 0,
}

const selectTab = (state = "all", action) => {
    switch (action.type) {
        case SELECT_TAB:
            return action.tab
        default:
            return state
    }
}

const posts = (state = initialPost, action) => {
    switch (action.type) {
        case REQUEST_POSTS:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false
            };
        case RECEIVE_POSTS:
            return {
                ...state,
                isFetching: false,
                didInvalidate: true,
                data: [...state.data,...action.posts],
                lastUpdated: action.receivedAt,
                fetchedPageCount: state.fetchedPageCount + action.posts.length
            };
        default:
            return state;
    }
}

const postsByCnode = (state = {}, action) => {
    switch (action.type) {
        case REQUEST_POSTS:
        case RECEIVE_POSTS:
        case INVALIDATE_TAB:
            return Object.assign({}, state, {
                [action.tab]: posts(state[action.tab], action)
            });
        default:
            return state;
    }
}

export {selectTab, postsByCnode};