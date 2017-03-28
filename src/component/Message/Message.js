import React, {Component, PropTypes} from 'react'
import {hashHistory} from 'react-router'
import TabMenu from '../TabMenu'
import Loading from '../Loading'
import ContentHeader from '../ContentHeader'
import Comment from '../PostDetail/Comment'
import './Message.less'

class Message extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {accessToken, fetchMessageData} = this.props;
        fetchMessageData(accessToken);
    }

    _renderItem(tab) {
        return tab.text;
    }

    _renderValue(item) {
        return (
            <div
                className="messageContent"
                onClick={()=>{
                    hashHistory.push('/topic/'+item.topic.id)
                }}
            >
                <Comment
                    content={item.reply.content}
                    author={item.author}
                    create_at={item.reply.create_at}
                />
            </div>
        )
    }

    render() {
        const {data, isFetching} = this.props;
        return (
            <div>
                <ContentHeader
                    title="消息"
                />
                <div className="myMessage">
                    {
                        isFetching || !data ?
                            <div>
                                <Loading />
                            </div> :
                            <TabMenu
                                tabItem={tabItem}
                                values={this.props.data}
                                renderItem={this._renderItem}
                                renderTab={this._renderValue}
                                defaultTabValue={'hasnot_read_messages'}
                            />
                    }
                </div>
            </div>
        );
    }
}

const tabItem = [{
    text: '未读消息',
    value: 'hasnot_read_messages'
}, {
    text: '已读消息',
    value: 'has_read_messages'
}]

export default Message;