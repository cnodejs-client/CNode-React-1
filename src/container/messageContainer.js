import {connect} from 'react-redux'
import Message from '../component/Message'
import {fetchMessageData} from '../action'

const mapStateToProps = (state,ownProps)=>{
    return {
        isFetching: state.message.isFetching,
        accessToken: state.login.accessToken,
        data: state.message.data
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        fetchMessageData : (accessToken)=>{
            dispatch(fetchMessageData(accessToken))
        }
    }
}


const messageContainer = connect(mapStateToProps,mapDispatchToProps)(Message)
export default messageContainer