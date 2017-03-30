import React, {Component,PropTypes} from 'react'
import fetch from 'isomorphic-fetch'
import {getRelativeTime} from '../../utils/dateUtil'
import {markdown} from 'markdown'
import {decorate as mixin} from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Avatar from '../Avatar'
import Good from './Good'
import CommentInput from '../CommentInput'
import 'github-markdown-css'
import './Comment.less'

import {URL_PREFIX}from '../../constant/Contant'

@mixin(PureRenderMixin)
class Comment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showInput: false
        }
        this._onCommentImageClickHandler = this._onCommentImageClickHandler.bind(this)
        this._onCommentInputClickHandler = this._onCommentInputClickHandler.bind(this);
    }

    static contextTypes ={
        directToLogin: PropTypes.func
    }

    render() {
        const {content, author, create_at,ups,login,id} = this.props;
        return (
            <div className="comment">
                <div className="profile">
                    <Avatar
                        className="comment-author"
                        url = {author.avatar_url}
                        userName = {author.loginname}
                    />
                    <div className="message">
                        <span className="name">{author.loginname}</span>
                        <span className="time">发布于:{getRelativeTime(create_at)}</span>
                    </div>
                    <div className="operator">
                        <img
                            className="comments"
                            src={require('../../../asset/image/comments.png')}
                            onClick={this._onCommentImageClickHandler}
                        />
                        <Good
                            commentId = {id}
                            directToLogin={this.props.directToLogin}
                            good={ups.includes(login.data.id)}
                            isLogin={login.isLogin}
                            accessToken = {login.accessToken}
                        />
                    </div>
                </div>
                <div className="comment-content">
                    <div className="markdown-body"
                         dangerouslySetInnerHTML={
                             {
                                 __html: markdown.toHTML(content)
                             }
                         }
                    >
                    </div>
                </div>
                {
                    !this.state.showInput ? null:
                        <CommentInput
                            submit={this._onCommentInputClickHandler}
                        />
                }
            </div>
        );
    }

    _onCommentImageClickHandler(event){
        if(!this.props.login.isLogin){
            this.context.directToLogin();
        }else{
            this.setState({
                showInput: !this.state.showInput
            });
        }
    }

    _onCommentInputClickHandler(text){
        const {login,topicId,id} = this.props;
        const url = URL_PREFIX + `/topic/${topicId}/replies`
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                accesstoken: login.accessToken,
                content: text,
                reply_id: id
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

export default Comment