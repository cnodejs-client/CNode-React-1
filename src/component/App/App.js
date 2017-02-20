import postContainer from '../../container/postContainer'
import Header from '../../container/headerContainer'
import React,{Component} from 'react'
import './App.css'

class App extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Header/>
                {this.props.children}
            </div>
        );
    }
}

export default App