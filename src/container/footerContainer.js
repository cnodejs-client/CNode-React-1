import {connect} from 'react-redux'
import Footer from '../component/Footer'

const mapStateToProps = (state,ownProps)=>{
    return{
        login: state.login
    }
}

const footerContainer = connect(mapStateToProps)(Footer)
export default footerContainer