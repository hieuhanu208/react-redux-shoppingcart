import React, { Component } from 'react'
import ProductListing from '../features/product-listing/ProductListing'
import data from '../data/products.json'

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <h3>HomePage</h3>
        <ProductListing products={data.products}/>
      </div>
    )
  }
}
