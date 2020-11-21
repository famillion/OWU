import {ADD_TO_CART, REMOVE_FROM_CART} from './actions'

import {initialState} from '../initialState'

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const itemInCart = state.cart.find(el => el.id === action.payload.id);

      const updatedCart = [...state.cart];

      if(!itemInCart){
        action.payload.inCart = true;
        updatedCart.unshift(action.payload);
      }

      return {
        ...state,
        cart: updatedCart
      }

    case REMOVE_FROM_CART:
      action.payload.inCart = false;
      return {
        ...state,
        cart: state.cart.filter(el => el.id !== action.payload.id)
      };
    default:
      return state;
  }
}
