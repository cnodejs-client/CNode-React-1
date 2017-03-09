import React, {Component,PropTypes} from 'react'
import {Link} from 'react-router'
import './Menu.less'

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    static propTyeps = {
        children: PropTypes.node.isRequired,
        position: PropTypes.string.isRequired
    }

    render() {
        const {position} = this.props;
        const pos = position === 'top' ? 'top' : 'bottom';
        return (
            <div>
                <nav
                    className="menu"
                    style={{
                        [pos]: 0
                    }}
                >
                    {this.props.children}
                </nav>
            </div>
        )
    }
}

export default Menu;