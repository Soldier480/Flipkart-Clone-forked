import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { getProductsReducer } from './reducers/productReducer.js';

const reducer = combineReducers({
    getProducts: getProductsReducer
})

const middleware = [thunk];

// takes two arguments-> reducers and middlewares
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;