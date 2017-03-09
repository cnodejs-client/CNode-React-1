import React, {Component} from 'react'
import {getRelativeTime} from '../../utils/dateUtil'
import UserTopic from './UserTopic'
import ContentHeader from '../ContentHeader'
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
        const {avatar_url,loginname,score,create_at} = this.props.data;
        return (
            <div className="userDetail">
                <ContentHeader
                    title={loginname+'的个人中心'}
                />
                <div className="userAvatar">
                    <img className="avatar" src={avatar_url}/>
                    <span className="userName">{loginname}</span>
                    <div className="detail">
                        <span>积分:{score}</span>
                        <span>注册于:{getRelativeTime(create_at)}</span>
                    </div>
                </div>
                <UserTopic
                    data={this.props.data}
                />
            </div>

        );
    }
}

export default UserDetail