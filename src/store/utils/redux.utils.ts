import { applyMiddleware, createStore, compose } from 'redux';
import rootReducers from './create.reducers'
import {dataPersistToLocalStorage} from './middlewares.utils'

const middlewares = [dataPersistToLocalStorage];


export default createStore(rootReducers, compose(applyMiddleware(...middlewares)));
