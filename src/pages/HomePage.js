import React, { Component } from 'react'

import ProductsContainer from "../containers/ProductsContainer";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <h3>HomePage</h3>
        <ProductsContainer />
      </div>
    )
  }
}
