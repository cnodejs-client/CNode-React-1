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
                    {this.props.children}
                </header>
            </div>
        )
    }
}

export default Header;