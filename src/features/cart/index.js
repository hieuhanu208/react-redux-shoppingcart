 import React from 'react'
 import {connect} from 'react-redux' 

export const cartItemsWithQuantity = (cartItems) => {
return cartItems.reduce((acc,item) => {
  const filterItem = acc.filter(item2 => item2.id == item.id)[0]
  filterItem!== undefined ? filterItem.quantity++ : acc.push({...item,quantity:1})
  return acc
},[])
}

const cartItems = [
  {
    id:1
  },{
    id:1
  },
  {
    id:1
  }
]

const acc=[
  {
    id:1,
    quantity:2
  },
  {
    id:2,
    quantity:1
  }
]
