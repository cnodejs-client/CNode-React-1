import postContainer from '../../container/postContainer'
import Navigator from '../../container/navigatorContainer'
import Footer from '../../container/footerContainer'
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
                <Footer />
            </div>
        );
    }
}

export default App