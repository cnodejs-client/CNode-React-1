import React, {Component, PropTypes} from 'react'
import './TabMenu.less'

class TabMenu extends Component {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        tabItem: PropTypes.arrayOf(PropTypes.shape({
            value: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })),
        values: PropTypes.object.isRequired,
        renderTab: PropTypes.func.isRequired,
        renderItem: PropTypes.func.isRequired,
        defaultTabValue: PropTypes.string.isRequired
    }

    state = {
        selected: this.props.defaultTabValue
    }

    _handleClick(tabValue){
        this.setState({
            selected: tabValue
        })
    }

    render() {
        const {tabItem, values, renderItem, renderTab} = this.props;
        const {selected} = this.state;
        return (
            <div className="TabMenu">
                <div className="menuItem">
                    {
                        tabItem.map((tab,index) => {
                            const active = (selected === tab.value);
                            return(
                                <span
                                    key={index}
                                    className={active ? 'active' : null}
                                    onClick={this._handleClick.bind(this,tab.value)}
                                >
                                    {renderItem(tab,active)}
                                </span>
                            );
                        })
                    }
                </div>
                <div>
                    {
                        values[selected].map((value,index)=>{
                            return(
                                <div
                                    className="contentItem"
                                    key={index}
                                >
                                    {
                                        renderTab(value)
                                    }
                                </div>
                            );

                        })
                    }
                </div>
            </div>
        )

    }

}

export default TabMenu