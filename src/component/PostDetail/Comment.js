import React, {Component} from 'react'
import {getRelativeTime} from '../../utils/dateUtil'
import {markdown} from 'markdown';
import './Comment.less'

export default class Comment extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {content,author,create_at} = this.props;

        return (
            <div className="comment">
                <div className="profile">
                    <img className="comment-author" src={author.avatar_url}/>
                    <div className="message">
                        <span className="name">{author.loginname}</span>
                        <span className="time">发布于:{getRelativeTime(create_at)}</span>
                    </div>
                    <div className="operator">
                    </div>
                </div>
                <div className="comment-content"
                     dangerouslySetInnerHTML={
                         {
                             __html: markdown.toHTML(content)
                         }
                     }
                >
                </div>
            </div>
        );


    }
}