import PostDetail from '../component/PostDetail'
import {connect} from 'react-redux'
import {fetchTopicData} from '../action'


const mapStateToProps = (state,ownProps)=>{
    const topicId = ownProps.params.topicId;
    return {
        isFetching: state.topicByCnode[topicId] && state.topicByCnode[topicId].isFetching,
        data: state.topicByCnode[topicId] && state.topicByCnode[topicId].data
    };
}

const mapDispatchToProps = (dispatch)=>{
    return {
        fetchTopicData: (topicId)=>{
            dispatch(fetchTopicData(topicId))
        }
    };
}


const postDetailContainer = connect(mapStateToProps,mapDispatchToProps)(PostDetail);

export default postDetailContainer