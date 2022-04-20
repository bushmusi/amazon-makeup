import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import productReducer from './detail/item-detail';

const rootReducer = combineReducers({
    productReducer
});

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

export default store;
