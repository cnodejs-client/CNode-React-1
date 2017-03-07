import postContainer from '../../container/postContainer'
import Navigator from '../../container/navigatorContainer'
import React,{Component} from 'react'
import './App.css'

class App extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Navigator/>
                {this.props.children}
            </div>
        );
    }
}

export default App