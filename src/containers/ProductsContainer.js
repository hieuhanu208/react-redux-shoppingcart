import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ProductListing from '../features/product-listing/ProductListing'
import ProductItems from '../features/product-listing/ProductItems'
import { addToCartAction, actChangeMessage } from '../actions/index'


class ProductsContainer extends Component {
  render () {
    const { products } = this.props
    const { onAddToCart , onChangeMessage } = this.props
    return (
      <ProductListing>
        {products.map((product, index) => {
          return (
            <ProductItems
              key={index}
              product={product}
              onAddToCart={onAddToCart}
              onChangeMessage = {onChangeMessage}
            />
          )
        })}
      </ProductListing>
    )
  }
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired
    })
  ).isRequired,
  onChangeMessage : PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart: product => {
      dispatch(addToCartAction(product, 1))
    },
    onChangeMessage: message =>{
      dispatch(actChangeMessage(message))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer)
