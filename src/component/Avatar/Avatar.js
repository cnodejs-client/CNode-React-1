import React, {PropTypes, Component} from 'react'
import {Link} from 'react-router'

export default class Avatar extends Component {
    constructor(props) {
        super(props);
    }

    static PropTypes = {
        url: PropTypes.string.isRequired,
        userName: PropTypes.string.isRequired
    };

    render() {
        const {url,userName, ...props} = this.props;
        return (
            <Link to={"/user/"+userName}>
                <img
                    src={url}
                    {...props}
                />
            </Link>
        )
    }
}
