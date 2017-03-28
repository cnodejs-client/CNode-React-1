import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'
import userDetailContainer from '../container/userDetailContainer'
import postDetailContainer from '../container/postDetailContainer'
import loginContainer from '../container/loginContainer'
import messageContainer from '../container/messageContainer'
import postContainer from '../container/postContainer'
import App from '../component/App'



const route = (history) =>{
    return (
        <Router history={history}>
            <Route path="/user">
                <Route path="/user/:userName" component={userDetailContainer}/>
            </Route>
            <Route path="/topic">
                <Route path="/topic/:topicId" component={postDetailContainer}/>
            </Route>
            <Route path="/login" component={loginContainer}/>
            <Route path="/message" component={messageContainer}/>
            <Route path="/" component={App}>
                <Route path="/:tag" component={postContainer}/>
                <IndexRoute component={postContainer}/>
            </Route>
        </Router>
    );
}
export default route