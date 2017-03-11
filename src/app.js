import React from 'react'
import {Provider} from 'react-redux'
import {Router,Route,hashHistory,IndexRoute} from 'react-router'
import ReactDOM, {render} from 'react-dom'
import App from './component/App'
import loginContainer from './container/loginContainer'
import PostContainer from './container/postContainer'
import PostDetailContainer from './container/postDetailContainer'
import UserDetailContainer from './container/UserDetailContainer'
import store from './store/store'


render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/user/:userName" component={UserDetailContainer} />
            <Route path="/topic/:topicId" component={PostDetailContainer} />
            <Route path="/login" component={loginContainer}/>
            <Route path="/" component={App}>
                <Route path="/:tag" component={PostContainer} />
                <IndexRoute component={PostContainer} />
            </Route>
        </Router>
    </Provider>
    , document.getElementById('root'))