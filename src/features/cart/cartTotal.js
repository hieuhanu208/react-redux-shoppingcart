import React, { Component } from 'react'

class CartTotal extends Component {
  render () {
    const { cart } = this.props
    return <div>Total: ${this.showTotal(cart)}</div>
  }

  showTotal = cart => {
    var result = 0;
    if (cart.length >0) {
        for (var i = 0; i < cart.length; i++) {
            result += cart[i].product.price * cart[i].quantity
          } 
    }
    return result;
    
  }
}

export default CartTotal
