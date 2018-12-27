import React, { Component } from 'react'
import ProductItems from '../product-listing/ProductItems'
import { connect } from 'react-redux'
import {cartItemsWithQuantity} from '../cart/index'

class ProductListing extends Component {
  render () {
    return (
      <div className='product-listing'>
        {this.props.products.map(product => {
          return <ProductItems product={product} addToCart={this.props.addToCart}
          cart={cartItemsWithQuantity(this.props.cart)}
          />
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: item => {
      dispatch({ type: 'ADD', payload: item })
    },
    removeToCart: item => {
      dispatch({ type: 'REMOVE', payload: item })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListing)
