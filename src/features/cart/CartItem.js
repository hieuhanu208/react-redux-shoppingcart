import React, { Component } from 'react'
import { Button } from 'reactstrap'
import * as Message from '../../constants/message'

class CartItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      quantity: 1
    }
  }

  render () {
    const { item, onRemoveItem } = this.props
    const {quantity} = item.quantity>0 ? item.quantity: this.state;
    

    return (
      <tr>
        <td>1</td>
        <td>{item.product.image}</td>
        <td>{item.product.name}</td>
        <td>${item.product.price}</td>
        <td>
          {item.quantity}
          <Button
            bsStyle='primary'
            onClick={() => {
              this.onUpdateQuantity(item.product, item.quantity - 1)
            }}
          >
            -
          </Button>
          <Button
            bsStyle='primary'
            onClick={() => {
              this.onUpdateQuantity(item.product, item.quantity + 1)
            }}
          >
            +
          </Button>
        </td>
        <td>{item.product.price * item.quantity}</td>
        <td>
          <Button bsStyle='primary' onClick={() => this.onDelete(item.product)}>
            X
          </Button>
        </td>
      </tr>
    )
  }
  onDelete (product) {
    const {
      onDeleteProductInCart,
      onChangeMessage,
      onUpdateProduct
    } = this.props
    onDeleteProductInCart(product)
    onChangeMessage(Message.MSG_DELETE_PRODUCTS_IN_CART_SUCCESS)
  }

  onUpdateQuantity = (product, quantity) => {
    const { onUpdateProduct } = this.props
    if (quantity > 0) {
      this.setState({
        quantity: quantity
      })
      onUpdateProduct(product, quantity)
    }
  }
}

export default CartItem
