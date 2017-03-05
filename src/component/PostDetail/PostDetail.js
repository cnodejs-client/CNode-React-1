import React, {Component, PropTypes}from 'react'
import {getRelativeTime} from '../../utils/dateUtil'
import Comment from './Comment'
import {TABNAMECONTENT} from '../../constant/Contant'
import {markdown} from 'markdown';
import 'github-markdown-css'
import './PostDetail.less'

export default class PostDetail extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const {fetchTopicData} = this.props;
        const {topicId} = this.props.params;
        fetchTopicData(topicId);
    }

    render() {
        const {isFetching} = this.props;
        if (isFetching || !this.props.data) {
            return (
                <div className="post-detail">
                    Loading......
                </div>
            );
        }

        const {
            title, author, create_at, visit_count, good, top, tab,
            content,replies
        } = this.props.data;

        return (
            <div className="post-detail">
                <h2 className="title">{title}</h2>
                <div className="profile">
                    <img className="avatar" src={author.avatar_url}/>
                    <div className="author">
                        <span>{author.loginname}</span>
                        <span>发布于:{getRelativeTime(create_at)}</span>
                    </div>
                    <div className="flow">
                        <span className="tag">
                            {good ? TABNAMECONTENT.good : top ? TABNAMECONTENT.top :TABNAMECONTENT[tab]}
                        </span>
                        <span>{visit_count}次阅读</span>
                    </div>
                </div>
                <div className="postContent">
                    <div className="markdown-body"
                        dangerouslySetInnerHTML={
                        {
                            __html:markdown.toHTML(content)
                        }
                    }>
                    </div>
                </div>
                {
                    replies.map((reply,index)=>(
                        <Comment
                            key={index}
                            {...reply}
                        />
                    ))
                }
            </div>
        );
    }
}