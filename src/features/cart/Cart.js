import React, { Component } from 'react'
import { Button, Table } from 'reactstrap'

class Cart extends Component {
  render () {
    const { children } = this.props

    return (
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </Table>
    )
  }
}

export default Cart
