export const ADD_LIKE_TO_ITEM = 'ADD_LIKE_TO_ITEM';
export const REMOVE_LIKE_FROM_ITEM = 'REMOVE_LIKE_FROM_ITEM';

export const addLikeToItem = item => {
  return {
    type: ADD_LIKE_TO_ITEM,
    payload: item
  }
}

export const removeLikeFromItem = item => {
  return {
    type: REMOVE_LIKE_FROM_ITEM,
    payload: item
  }
}
