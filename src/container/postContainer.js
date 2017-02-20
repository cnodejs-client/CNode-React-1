import {connect} from 'react-redux'
import PostList from '../component/PostList'
import {fetchData} from '../action/action'


const mapStateToProps = (state, ownProps) => {
    const tag = ownProps.params.tag || 'all';
    return {
        data: state.postsByCnode[tag] && state.postsByCnode[tag].data,
        fetchedPageCount: state.postsByCnode[tag] && state.postsByCnode[tag].fetchedPageCount
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url,tag) => {
            dispatch(fetchData(url,tag));
        }
    }
}

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(PostList)
export default PostContainer