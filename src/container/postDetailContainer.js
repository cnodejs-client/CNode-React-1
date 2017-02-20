import PostDetail from '../component/PostDetail'
import {connect} from 'react-redux'


const mapStateToProps = (state,ownProps)=>{

};

const postDetailContainer = connect(mapStateToProps)(PostDetail);

export default postDetailContainer