import React, {Component, PropTypes} from 'react'
import ContentHeader from '../ContentHeader'
import './Login.less'

class Login extends Component {

    constructor(props) {
        super(props);
        this._handleClick = this._handleClick.bind(this);
        this._handleValueChange = this._handleValueChange.bind(this);
    }

    state = {
        accessToken: ''
    }

    static propTypes = {
        isFetching: PropTypes.bool.isRequired,
        isLogin: PropTypes.bool.isRequired,
    }

    _handleClick() {
        const {accessToken} = this.state;
        const {fetchLoginData} = this.props;
        fetchLoginData(accessToken)
    }

    _handleValueChange(e) {
        this.setState({
            accessToken: e.target.value
        });
    }

    render() {
        const {isFetching} = this.props;
        const {accessToken} =this.state;
        return (
            <div className="login">
                <ContentHeader
                    title={"登录"}
                />
                <div className="center">
                    <div className="text">
                        <input
                            type="text"
                            placeholder="Access Token"
                            value={accessToken}
                            onChange={this._handleValueChange}
                        />
                    </div>
                    <button
                        className="btn"
                        type="text"
                        onClick={this._handleClick}
                    >
                        {isFetching ? "登录中...":'登录'}
                    </button>
                </div>
            </div>
        )
    }
}

export default Login
