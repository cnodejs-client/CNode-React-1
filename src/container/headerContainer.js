import {connect} from 'react-redux'
import Header from '../component/Header'


const mapStateToProps = (state, ownProps) => {
    return {
        tag: state.selectTab
    }
}

const headerContainer = connect(mapStateToProps)(Header)
export default headerContainer