import React, {Component, PropTypes}from 'react'
import {getRelativeTime} from '../../utils/dateUtil'
import './PostDetail.css'

export default class PostDetail extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount(){
        const {fetchTopicData} = this.props;
        const {topicId} = this.props.params;
        fetchTopicData(topicId);
    }

    render() {
        const {isFetching} = this.props;
        if(isFetching || !this.props.data){
            return (
                <div className="post-detail">
                    Loading......
                </div>
            );
        }

        const {title,author,create_at,visit_count} = this.props.data;
        return (
            <div className="post-detail">
                <h2 className="post-detail-title">{title}</h2>
                <div className="post-detail-profile">
                    <img className="avatar" src={author.avatar_url}/>
                    <div className="author">
                        <span>{author.loginname}</span>
                        <span>发布于:{getRelativeTime(create_at)}</span>
                    </div>
                    <div className="flow">
                        <span>精华</span>
                        <span>{visit_count}次阅读</span>
                    </div>
                </div>

                {/*<div className="content">*/}
                    {/*{}*/}
                {/*</div>*/}
                {/*<div className="comment">*/}
                    {/*<div className="comment-profile">*/}
                        {/*<img className="avatar" src="https://avatars.githubusercontent.com/u/4624?v=3&s=120"/>*/}
                        {/*<div className="author">*/}
                            {/*<span>{}</span>*/}
                            {/*<span>{}</span>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className="comment-content">*/}
                        {/*<p>{}</p>*/}
                    {/*</div>*/}
                {/*</div>*/}

            </div>
        );
    }
}