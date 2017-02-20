import React, {Component} from 'react'
import {Link} from 'react-router'
import {TABNAMECONTENT}from '../../constant/Contant'
import './Header.css'

class Header extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {tag} = this.props;
        const content = TABNAMECONTENT[tag];
        return (
            <div>
                <header className="header">
                    <div>
                        <div className="nav"></div>
                        <span>{content}</span>
                        <i className="add-icon iconfont">&#xe60f;</i>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header;