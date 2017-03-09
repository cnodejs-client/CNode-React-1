import React, {Component} from 'react'
import {Link} from 'react-router'
import './Navigator.less'
import {TABNAMECONTENT} from '../../constant/Contant'
import MenuBar from '../MenuBar'

class Navigator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    render() {
        const {activeTab} = this.props;
        console.log('connect',activeTab)
        return (
            <MenuBar
                position="top"
            >
                <div className="Navigator">
                    {
                        ['all', 'share', 'good', 'ask', 'job'].map((value) => {
                            if (value === activeTab) {
                                return (
                                    <span className="active">
                                     <Link to={"/" + value}>{TABNAMECONTENT[value]}</Link>
                                    </span>
                                );
                            }

                            return (
                                <span>
                                     <Link to={"/" + value}>{TABNAMECONTENT[value]}</Link>
                                </span>
                            );
                        })
                    }

                </div>
            </MenuBar>
        );
    }
}

export default Navigator