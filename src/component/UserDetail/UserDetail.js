import React, {Component} from 'react'
import {Link} from 'react-router'
import {getRelativeTime} from '../../utils/dateUtil'
import TabMenu from '../TabMenu'
import Loading from '../Loading'
import ContentHeader from '../ContentHeader'
import './UserDetail.less'

class UserDetail extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {fetchUserData} = this.props;
        const {userName} = this.props.params;
        fetchUserData(userName);
    }

    _renderItem(tab) {
        return tab.text;
    }

    _renderValue(item) {
        return (
            <div className="userTopicItem">
                <Link to={`/topic/${item.id}`}>
                    <div className="userTopicItem">
                        {item.title}
                    </div>
                </Link>
            </div>
        )
    }

    render() {
        const {isFetching} = this.props;
        if (isFetching || !this.props.data) {
            return (
                <div>
                    <Loading />
                </div>
            );
        }
        const {avatar_url, loginname, score, create_at} = this.props.data;
        return (
            <div className="userDetail">
                <ContentHeader
                    title={loginname + '的个人中心'}
                />
                <div className="userAvatar">
                    <img className="avatar" src={avatar_url}/>
                    <span className="userName">{loginname}</span>
                    <div className="detail">
                        <span>积分:{score}</span>
                        <span>注册于:{getRelativeTime(create_at)}</span>
                    </div>
                </div>
                <TabMenu
                    tabItem={tabItem}
                    values={this.props.data}
                    renderItem={this._renderItem}
                    renderTab={this._renderValue}
                    defaultTabValue={'recent_replies'}
                />
            </div>

        );
    }
}

const tabItem = [{
    value: 'recent_replies',
    text: '最近回复'
}, {
    value: 'recent_topics',
    text: '最近发布'
},{
    value: 'topic_collect',
    text: '收藏'
}]

export default UserDetail