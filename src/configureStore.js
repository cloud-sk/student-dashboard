import {createStore,combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import studentReducer from './reducers/studentReducer';

const reducers = combineReducers({studentReducer});
const middlewares = applyMiddleware(thunk, logger);
const initialState = {};
const store = createStore(reducers, initialState, middlewares);

export default store;

