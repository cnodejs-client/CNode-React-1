import React, {Component} from 'react'
import {Link} from 'react-router'
import './UserHeader.less'
import Header from '../Header'

class UserHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Header>
                <div className="UserHeader">
                    <span>
                    {this.props.title}的个人中心
                    </span>
                </div>
            </Header>
        );
    }
}

export default UserHeader
