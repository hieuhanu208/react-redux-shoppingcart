import React, { Component } from 'react'
import { Table, Button } from 'reactstrap'

class CartItem extends Component {
  render () {
    const { item } = this.props
    console.log(item);
    return (
      <tr>
        <td>1</td>
        <td>{item.product.image}</td>
        <td>{item.product.name}</td>
        <td>${item.product.price}</td>
        <td>{item.quantity} <Button bsStyle="primary">-</Button><Button bsStyle="primary">+</Button></td>
        <td>{item.product.price *item.quantity}</td>
        <td><Button bsStyle="primary">X</Button></td>
      </tr>
    )
  }
}

export default CartItem


