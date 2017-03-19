import fetch from 'isomorphic-fetch'
import {URL_PREFIX}from '../constant/Contant'
export const FAVORITE_TOPIC = 'FAVORITE_TOPIC'
export const UNFAVORITE_TOPIC = 'UNFAVORITE_TOPIC'

export const favoriteTopic = (topicId)=>{
    return {
        type: FAVORITE_TOPIC,
        topicId: topicId
    }

}

export const unFavoriteTopic = (topicId)=>{
    return {
        type: UNFAVORITE_TOPIC,
        topicId: topicId
    }
}


export const postFavoriteTopic = (topicId,accessToken) => {
    return (dispatch)=>{
        const url = URL_PREFIX + `/topic_collect/collect`
        fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                accesstoken: accessToken,
                topic_id: topicId
            })
        }).then(response => response.json()).then(json=>{
            if(json.success){
                dispatch(favoriteTopic(topicId))
            }
        })
    }
}

export const postUnFavoriteTopic = (topicId,accessToken) => {
    return (dispatch)=>{
        const url = URL_PREFIX + `/topic_collect/de_collect`
        fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                accesstoken: accessToken,
                topic_id: topicId
            })
        }).then(response => response.json()).then(json=>{
            if(json.success){
                dispatch(unFavoriteTopic(topicId))
            }
        })
    }
}