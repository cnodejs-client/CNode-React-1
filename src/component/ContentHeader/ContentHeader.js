import React, {Component} from 'react'
import {Link,hashHistory} from 'react-router'
import './ContentHeader.less'
import MenuBar from '../MenuBar'

class ContentHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MenuBar position="top">
                <div className="ContentHeader">
                    <img
                        className="back"
                        src={require("../../../asset/image/back.png")}
                        onClick={()=>{hashHistory.back()}}
                    />
                    <span>
                    {this.props.title}
                    </span>
                </div>
            </MenuBar>
        );
    }
}

export default ContentHeader
