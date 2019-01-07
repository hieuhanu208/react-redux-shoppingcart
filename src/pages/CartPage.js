import React, { Component } from 'react'
import CartContainer from "../containers/CartContainer";

export default class CartPage extends Component {
  render() {
    return (
      <div>
        <h3>Cart Page</h3>
        <CartContainer/>
      </div>
    )
  }
}
