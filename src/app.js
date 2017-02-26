import React from 'react'
import {Provider} from 'react-redux'
import {Router,Route,hashHistory,IndexRoute} from 'react-router'
import ReactDOM, {render} from 'react-dom'
import App from './component/App'
import postContainer from './container/postContainer'
import postDetailContainer from './container/postDetailContainer'
import store from './store/store'


render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Router path="/" component={App}>
                <Route path="/topic/:topicId" component={postDetailContainer} />
                <Route path="/:tag" component={postContainer} />
                <IndexRoute component={postContainer} />
            </Router>
        </Router>
    </Provider>
    , document.getElementById('root'))