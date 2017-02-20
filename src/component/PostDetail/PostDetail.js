import React, {Component, PropTypes}from 'react'
import './PostDetail.css'

export default class PostDetail extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        // if(!this.props.data){
        //     return (
        //         <div className="post-detail">
        //             Loading......
        //         </div>
        //     );
        // }

        // const {title,author,create_at,visit_count} = this.props.data;
        return (
            <div className="post-detail">
                <h2 className="post-detail-title">{"【工匠篇】杭州 20K ~ 30K 求前端/Nodejs 工匠，第 3 阶段招聘启动"}</h2>
                <div className="post-detail-profile">
                    <img className="avatar" src="https://avatars.githubusercontent.com/u/4624?v=3&s=120"/>
                    <div className="author">
                        <span>huanglong</span>
                        <span>发布于:2 年前</span>
                    </div>
                    <div className="flow">
                        <span>精华</span>
                        <span>45479</span>
                    </div>
                </div>
                <div className="content">
                    Hello World
                </div>
                <div className="comment">
                    <div className="comment-profile">
                        <img className="avatar" src="https://avatars.githubusercontent.com/u/4624?v=3&s=120"/>
                        <div className="author">
                            <span>huanglong</span>
                            <span>发布于:2 年前</span>
                        </div>
                    </div>
                    <div>
                        <p>这招人的热情，赞。</p>
                    </div>
                </div>
            </div>
        );
    }
}