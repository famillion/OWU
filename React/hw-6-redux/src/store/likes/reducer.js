import {ADD_LIKE_TO_ITEM, REMOVE_LIKE_FROM_ITEM} from './actions';

import {initialState} from '../initialState'

export const likesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIKE_TO_ITEM:
      const itemInLikes = state.likes.find(el => el.id === action.payload.id);

      const updatedLikes = [...state.likes];

      if(!itemInLikes){
        action.payload.isLiked = true;
        updatedLikes.unshift(action.payload);
      }

      return {
        ...state,
        likes: updatedLikes
      }

    case REMOVE_LIKE_FROM_ITEM:
      action.payload.isLiked = false;
      return {
        ...state,
        likes: state.likes.filter(el => el.id !== action.payload.id)
      };
    default:
      return state;
  }
}
