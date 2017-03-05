import React,{Component} from 'react'
import './UserTopic.less'

export default class UserTopic extends Component{

    constructor(props){
        super(props);
        this.state = {
            tag: 'recent_replies'
        }
    }



    render(){
        const {data} = this.props;
        const {tag} = this.state
        return(
            <div className="userTopic">
                <div className="userTopicTag">
                    <span
                        onClick={()=>{this.setState({tag: "recent_replies"})}}
                    >{'最近回复'}
                    </span>
                    <span
                        onClick={()=>{this.setState({tag: "recent_topics"})}}
                    >{'最近发布'}
                    </span>
                </div>
                <div className="userTopicContent">
                    {
                        !data[tag] ? null:
                            data[tag].map((item,index)=>{
                                return(
                                    <div
                                        key={index}
                                        className="userTopicItem"
                                    >
                                        {item.title}
                                    </div>
                                );

                            })
                    }
                </div>
            </div>

        );
    }


}
