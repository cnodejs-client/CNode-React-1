import React, {Component} from 'react'
import {Link} from 'react-router'
import MenuBar from '../MenuBar'
import './Footer.less'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
        this.setState({open: !this.state.open})
        console.log(this.state.open)
    }

    render() {
        return (
            <MenuBar position="bottom">
                <div className="Footer">
                    <span>
                        <Link to={"/#"}>首页</Link>
                    </span>
                    <span>
                        <Link>发表</Link>
                    </span>
                    <span>
                        <Link>消息</Link>
                    </span>
                    <span>
                        <Link>我的</Link>
                    </span>
                </div>
            </MenuBar>
        );
    }
}

export default Footer
