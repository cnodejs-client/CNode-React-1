import React from 'react'
import {Provider} from 'react-redux'
import {syncHistoryWithStore,routerMiddleware} from 'react-router-redux'
import {render} from 'react-dom'
import {hashHistory} from 'react-router'
import {createStore,applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import route from './route'
import rootReducer from './reducer'

const loggerMiddleware = createLogger();
const historyMiddleware = routerMiddleware(hashHistory)
const store = applyMiddleware(thunkMiddleware,loggerMiddleware,historyMiddleware)(createStore)(rootReducer);
const history = syncHistoryWithStore(hashHistory, store)

render(
    <Provider store={store}>
        {route(history)}
    </Provider>
    , document.getElementById('root'))