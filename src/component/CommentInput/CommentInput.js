import React, {Component, PropTypes} from 'react'
import './CommentInput.less'

class CommentInput extends Component {
    constructor(props) {
        super(props);
        this.value = {
            text: ''
        }
        this._onValueChangeHandler = this._onValueChangeHandler.bind(this);
        this._onButtonClickHandler = this._onButtonClickHandler.bind(this);
    }

    static propTypes = {
        onClick: PropTypes.func.isRequired
    };

    static defaultProps = {
        onClick: ()=>{}
    }

    render() {
        return (
            <div className="CommentInput">
                <input className="commentInput" type="text" onChange={this._onValueChangeHandler}/>
                <button
                    className="commentButton"
                    onClick={this._onButtonClickHandler}
                    >{"评论"}
                </button>
            </div>
        );
    }

    _onValueChangeHandler(event){
        this.setState({
            text: event.target.value
        });
    }

    _onButtonClickHandler(){
        if(this.state.text){
            this.props.submit(this.state.text);
        }
    }
}

export default CommentInput