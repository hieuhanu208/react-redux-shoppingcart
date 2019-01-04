import React, { Component } from 'react'

 class ProductListing extends Component {
  render () {

    return (
      <div className='product-listing'>

          {this.props.children}

      </div>
    )
  }
}

 export default (ProductListing)
