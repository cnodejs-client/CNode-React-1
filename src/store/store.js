import rootReducer from '../reducer'
import {createStore,applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

const loggerMiddleware = createLogger();
const store = applyMiddleware(thunkMiddleware,loggerMiddleware)(createStore)(rootReducer);
export default store;