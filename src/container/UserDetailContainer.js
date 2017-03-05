import UserDetail from '../component/UserDetail'
import {connect} from 'react-redux'
import {fetchUserData} from '../action'

const mapStateToProps = (state,ownProps)=>{
    const userName = ownProps.params.userName
    return{
        isFetching: state.userByCnode[userName] && state.userByCnode[userName].isFetching,
        data: state.userByCnode[userName] && state.userByCnode[userName].data
    };
}

const mapDispatchToProps = (dispatch)=>{
    return{
        fetchUserData: (userName) =>{
            dispatch(fetchUserData(userName))
        }
    };
}

const UserDetailContainer =
    connect(mapStateToProps,mapDispatchToProps)(UserDetail);

export default UserDetailContainer
