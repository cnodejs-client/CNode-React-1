import React, {Component} from 'react'
import {Link} from 'react-router'
import './Navigator.less'
import Header from '../Header'

class Navigator extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Header>
                <div className="Navigator">
                    <span>
                        <Link to="/all">全部</Link>
                    </span>
                    <span>
                        <Link to="/share">分享</Link>
                    </span>
                    <span>
                        <Link to="/good">精华</Link>
                    </span>
                    <span>
                        <Link to="/ask">问答</Link>
                    </span>
                    <span>
                        <Link to="/job">招聘</Link>
                    </span>
                </div>
            </Header>
        );
    }
}

export default Navigator