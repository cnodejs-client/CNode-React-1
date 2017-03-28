import React, {Component, PropTypes}from 'react'
import {getRelativeTime} from '../../utils/dateUtil'
import Comment from './Comment'
import Avatar from '../Avatar'
import Loading from '../Loading'
import Favorite from '../Favorite'
import ContentHeader from '../../component/ContentHeader'
import {markdown} from 'markdown';
import 'github-markdown-css'
import './PostDetail.less'

export default class PostDetail extends Component {

    constructor(props) {
        super(props)
        console.log(props)
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
                    <ContentHeader
                        title={'详情'}
                    />
                    <Loading />
                </div>
            );
        }

        const {
            id, title, author, create_at, visit_count, good, top, tab,
            content, replies
        } = this.props.data;
        const {postFavoriteTopic,postUnFavoriteTopic} = this.props;
        const {accessToken} = this.props.login;
        const userCollection = this.props.login.topic_collect;

        return (
            <div className="post-detail">
                <ContentHeader title={'详情'}/>
                <h2 className="title">{title}</h2>
                <div className="profile">
                    <Avatar
                        className="avatar"
                        url={author.avatar_url}
                        userName={author.loginname}
                    />
                    <div className="author">
                        <span>{author.loginname}</span>
                        <span>发布于:{getRelativeTime(create_at)}</span>
                    </div>
                    <div className="flow">
                        <Favorite
                            topicId={id}
                            accessToken={accessToken}
                            isFavorite={userCollection.includes(id)}
                            fav={postFavoriteTopic}
                            unFav={postUnFavoriteTopic}
                        />
                        <span>{visit_count}次阅读</span>
                    </div>
                </div>
                <div className="postContent">
                    <div className="markdown-body"
                         dangerouslySetInnerHTML={
                             {
                                 __html: markdown.toHTML(content)
                             }
                         }>
                    </div>
                </div>
                {
                    replies.map((reply, index) => (
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