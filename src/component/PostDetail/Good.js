import React, {Component, PropTypes} from 'react'
import {decorate as mixin} from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {URL_PREFIX}from '../../constant/Contant'
import './Good.less'

const isGood = require('../../../asset/image/isGood.png');
const noGood = require('../../../asset/image/good.png');

@mixin(PureRenderMixin)
class Good extends Component {

    static propTypes = {
        good: PropTypes.bool,
        isLogin: PropTypes.bool
    }

    static defaultProps = {
        good: false,
        isLogin: false
    }

    static contextTypes = {
        directToLogin: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {
            good: props.good
        };
        this._onClickHandler = this._onClickHandler.bind(this);
    }

    render() {
        const {good} = this.state;
        return (
            <img
                className="Good" src={good ? isGood : noGood}
                onClick={this._onClickHandler}
            />
        );
    }

    _onClickHandler(){
        const {commentId,accessToken} = this.props;
        if(!this.props.isLogin){
            this.context.directToLogin();
        }else{
            const url = URL_PREFIX + `/reply/${commentId}/ups`
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({accesstoken: accessToken})
            }).then((response)=>response.json())
                .then((json)=>{
                    if(json.success){
                        this.setState({
                            good: !this.state.good
                        });
                    }
                });
        }
    }

}

export default Good


