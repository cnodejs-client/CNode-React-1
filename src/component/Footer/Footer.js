import React, {Component} from 'react'
import {Link} from 'react-router'
import MenuBar from '../MenuBar'
import './Footer.less'

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {login} = this.props;
        const {isLogin,data} = login;
        return (
            <MenuBar position="bottom">
                <div className="Footer">
                    <span>
                        <Link to={"/#"}>首页</Link>
                    </span>
                    <span>
                        <Link to={!isLogin ? '/login' : '/message' }>
                            {"消息"}
                        </Link>
                    </span>
                    <span>
                        <Link to={!isLogin ? '/login' : '/user/'+data.loginname }>
                            {"我的"}
                        </Link>
                    </span>
                </div>
            </MenuBar>
        );
    }
}

export default Footer
