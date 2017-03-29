import React, {Component} from 'react'
import {getRelativeTime} from '../../utils/dateUtil'
import {markdown} from 'markdown'
import {decorate as mixin} from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Avatar from '../Avatar'
import 'github-markdown-css'
import './Comment.less'

@mixin(PureRenderMixin)
class Comment extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {content, author, create_at} = this.props;
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
            </div>
        );
    }
}

export default Comment