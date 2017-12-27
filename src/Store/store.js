import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import logger from 'redux-logger';
import combinedReducers from '../Reducers/combinedReducers';

const composeEnhancers = composeWithDevTools({});
const middleware = [logger]

let store = createStore(combinedReducers, composeEnhancers(
    applyMiddleware(...middleware)
));

export default store;