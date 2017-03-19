import React, {Component, PropTypes} from 'react'
import {hashHistory} from 'react-router'
import classnames from 'classnames'
import './Favorite.less'
class Favorite extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isFavorite: props.isFavorite
        }
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    static propTypes = {
        isFavorite: PropTypes.bool,
        accessToken: PropTypes.string,
        topicId: PropTypes.string.isRequired,
        fav: PropTypes.func.isRequired,
        unFav: PropTypes.func.isRequired
    }

    static defaultProps = {
        isFavorite: false
    }

    onClickHandler() {
        const {accessToken, unFav, fav, topicId} = this.props;
        const {isFavorite} = this.state;
        if (accessToken === '') {
            this.redirectLoginPage();
        }
        if (isFavorite) {
            unFav(topicId, accessToken)
            this.setState({
                isFavorite: false
            })
        } else {
            fav(topicId, accessToken)
            this.setState({
                isFavorite: true

            })
        }

    }

    redirectLoginPage() {
        hashHistory.push('/login');
    }

    render() {
        const {isFavorite} = this.state;
        const className = classnames({
            favorite: true,
            fav: isFavorite,
            noFav: !isFavorite
        });
        return (
            <span
                className={className}
                onClick={this.onClickHandler}
            >
                {isFavorite ? '取消收藏' : '收藏'}
            </span>
        );
    }
}

export default Favorite