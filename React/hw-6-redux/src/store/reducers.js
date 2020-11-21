import {combineReducers} from 'redux';
import {cartReducer} from "./cart/reducer";
import {likesReducer} from "./likes/reducer";


export const reducers = combineReducers({
  cartReducer,
  likesReducer
});
