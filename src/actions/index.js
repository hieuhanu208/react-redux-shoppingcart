import * as types from './../constants/ActionType';

export  const addToCartAction = (product ,quantity) => {
 return {
     type: types.ADD_TO_CART,
     product:product,
     quantity:quantity
 }
}