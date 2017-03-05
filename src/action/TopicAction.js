import fetch from 'isomorphic-fetch'
const REQUEST_TOPIC = 'REQUEST_TOPIC'
const RECEIVE_TOPIC = 'RECEIVE_TOPIC'

const requestTopic = (topicId) => {
    return {
        type: REQUEST_TOPIC,
        topicId
    };

}

const receiveTopic = (topicId, json) => {
    return {
        type: RECEIVE_TOPIC,
        topicId,
        data: json.data
    };

}

const fetchTopicData = (topicId) => {
    return function (dispatch) {
        dispatch(requestTopic(topicId))
        const url = `https://cnodejs.org/api/v1/topic/${topicId}?mdrender=false`
        fetch(url)
            .then((reponse) => reponse.json())
            .then((json) => {
                dispatch(receiveTopic(topicId, json))
            })
    }
}


export {REQUEST_TOPIC,RECEIVE_TOPIC}
export {receiveTopic, requestTopic, fetchTopicData}