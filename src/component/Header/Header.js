import React, {Component} from 'react'
import {Link} from 'react-router'
import './Header.less'

class Header extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <header className="header">
                    <span><Link to="/all">全部</Link></span>
                    <span><Link to="/share">分享</Link></span>
                    <span><Link to="/good">精华</Link></span>
                    <span><Link to="/ask">问答</Link></span>
                    <span><Link to="/job">招聘</Link></span>
                </header>
            </div>
        )
    }
}

export default Header;