import React, {Component} from 'react'
import './UserDetail.less'

class UserDetail extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        const {fetchUserData} = this.props;
        const {userName} = this.props.params;
        fetchUserData(userName);
    }

    render() {
        const {isFetching} = this.props;
        if (isFetching || !this.props.data) {
            return (
                <div>
                    Loading......
                </div>
            );
        }
        return (
            <div className="userDetail">

            </div>
        );
    }
}

export default UserDetail