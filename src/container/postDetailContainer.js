import PostDetail from '../component/PostDetail'
import {connect} from 'react-redux'
import {fetchTopicData,postFavoriteTopic,postUnFavoriteTopic} from '../action'


const mapStateToProps = (state,ownProps)=>{
    const topicId = ownProps.params.topicId;
    const loginname = state.login.data.loginname
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