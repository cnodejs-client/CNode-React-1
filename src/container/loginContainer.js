import {connect} from 'react-redux'
import Login from '../component/Login'
import {fetchLoginData} from '../action/LoginAction'

const mapStateToProps = (state,ownProps)=>{
    return {
        isFetching: state.login.isFetching,
        isLogin: state.login.isLogin,
        data: state.login.data
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        fetchLoginData : (accessToken)=>{
            dispatch(fetchLoginData(accessToken))
        }
    }
}


const loginContainer = connect(mapStateToProps,mapDispatchToProps)(Login)
export default loginContainer