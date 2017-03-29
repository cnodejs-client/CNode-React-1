import PostDetail from '../component/PostDetail'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {fetchTopicData,postFavoriteTopic,postUnFavoriteTopic} from '../action'


const mapStateToProps = (state,ownProps)=>{
    const topicId = ownProps.params.topicId;
    return {
        isFetching: state.topicByCnode[topicId] && state.topicByCnode[topicId].isFetching,
        data: state.topicByCnode[topicId] && state.topicByCnode[topicId].data,
        login: state.login,
    };
}

const mapDispatchToProps = (dispatch)=>{
    return {
        fetchTopicData: (topicId)=>{
            dispatch(fetchTopicData(topicId))
        },
        directToLogin: ()=>{
            dispatch(push('/login'))
        },
        postFavoriteTopic: (topicId,accessToken)=>{
            dispatch(postFavoriteTopic(topicId,accessToken))
        },
        postUnFavoriteTopic: (topicId,accessToken)=>{
            dispatch(postUnFavoriteTopic(topicId,accessToken))
        }
    };
}


const postDetailContainer = connect(mapStateToProps,mapDispatchToProps)(PostDetail);

export default postDetailContainer