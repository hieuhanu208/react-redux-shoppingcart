import React, { Component } from 'react'

export default class ProductItems extends Component {

  render() {
    const ItemInCart = this.props.cart.filter(item => item.id === this.props.product.id)[0]
    return (
      <div className='product-list-item'>
        <h3>{this.props.product.name}</h3>
        <img height={100} title={this.props.product.name} src={`/products/${this.props.product.image}`} ></img>
        <div>{this.props.product.description}</div>
        <div>${this.props.product.price}</div>
        <button onClick={()=>this.props.addToCart(this.props.product)}>Add to cart({(ItemInCart && ItemInCart.quantity||0)})</button>
      </div>
    )
  }
}
