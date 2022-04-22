import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import productReducer from './detail/item-detail';
import categoryReducer from './main-screen/item-list'

const rootReducer = combineReducers({
    productReducer,
    categoryReducer
});

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

export default store;
