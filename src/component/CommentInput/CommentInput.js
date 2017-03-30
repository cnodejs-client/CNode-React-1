import React, {Component, PropTypes} from 'react'
import './CommentInput.less'

class CommentInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="CommentInput">
                <input className="commentInput" type="text" />
                <button className="commentButton">评论</button>
            </div>
        );
    }
}

export default CommentInput