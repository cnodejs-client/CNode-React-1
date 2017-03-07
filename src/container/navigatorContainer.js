import {connect} from 'react-redux'
import Navigator from '../component/Navigator'


const mapStateToProps = (state, ownProps) => {
    return {
        tag: state.selectTab
    }
}

const navigatorContainer = connect(mapStateToProps)(Navigator)
export default navigatorContainer