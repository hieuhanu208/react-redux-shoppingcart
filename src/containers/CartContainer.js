import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CartItem from '../features/cart/CartItem'
import Cart from '../features/cart/Cart'
import { actRemoveProductInCart, actChangeMessage, actUpdateProductInCart } from './../actions/index'
import CartTotal from '../features/cart/cartTotal'

class CartContainer extends Component {
  render () {
    var { cart } = this.props

    return (
      <Cart>
        {this.showCartItem(cart)}
        {this.showTotal(cart)}
      </Cart>
    )
  }
  showCartItem = cart => {
    const { onDeleteProductInCart, onChangeMessage,onUpdateProduct } = this.props
    var result = null
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <CartItem
            key={index}
            index={index}
            item={item}
            onDeleteProductInCart={onDeleteProductInCart}
            onChangeMessage={onChangeMessage}
            onUpdateProduct = {onUpdateProduct}
            
          />
        )
      })
    }
    return result
  }

  showTotal = cart => {
    var result = null
    if (cart.length > 0) {
      result = <CartTotal cart={cart} />
    }

    return result
  }
}

CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired
      }).isRequired,
      quantity: PropTypes.number.isRequired
    })
  ).isRequired
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteProductInCart: product => {
      dispatch(actRemoveProductInCart(product))
    },
    onChangeMessage: message => {
      dispatch(actChangeMessage(message))
    },
    onUpdateProduct : (product,quantity) => {
      dispatch(actUpdateProductInCart(product,quantity))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer)
