import React, {Component, PropTypes}from 'react'
import {getRelativeTime} from '../../utils/dateUtil'
import Comment from './Comment'
import Avatar from '../Avatar'
import Loading from '../Loading'
import Favorite from './Favorite'
import {decorate as mixin} from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ContentHeader from '../../component/ContentHeader'
import CommentInput from '../CommentInput'
import {markdown} from 'markdown';
import 'github-markdown-css'
import './PostDetail.less'

import {URL_PREFIX}from '../../constant/Contant'

@mixin(PureRenderMixin)
class PostDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showInput: false
        };
        this._onCommentImageClickHandler = this._onCommentImageClickHandler.bind(this);
        this._onCommentInputClickHandler = this._onCommentInputClickHandler.bind(this);
    }

    static propTypes = {}

    static childContextTypes = {
        directToLogin: PropTypes.func
    }

    getChildContext() {
        return {
            directToLogin: this.props.directToLogin
        };
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
            id, title, author, create_at, visit_count,
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
                    <img
                        className="commentIcon"
                        src={require('../../../asset/image/comments.png')}
                        onClick={this._onCommentImageClickHandler}
                    />
                    {
                        !this.state.showInput ? null:
                            <CommentInput
                                submit={this._onCommentInputClickHandler}
                            />
                    }
                </div>
                {
                    replies.map((reply, index) => (
                        <Comment
                            topicId = {id}
                            key={reply.id}
                            login={this.props.login}
                            {...reply}
                        />
                    ))
                }
            </div>
        );
    }


    _onCommentImageClickHandler(event){
        if(!this.props.login.isLogin){
            this.props.directToLogin();
        }else{
            this.setState({
                showInput: !this.state.showInput
            });
        }
    }

    _onCommentInputClickHandler(text){
        const {login} = this.props;
        const url = URL_PREFIX + `/topic/${this.props.data.id}/replies`
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                accesstoken: login.accessToken,
                content: text
            })
        }).then(response=>response.json())
            .then((json)=>{
                if(json.success){
                    this.setState({
                        showInput: !this.state.showInput
                    })
                }
            });
    }
}

export default PostDetail