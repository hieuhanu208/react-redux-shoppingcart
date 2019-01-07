import React, { Component } from 'react'
import { Table } from 'reactstrap'

import MessageContainer from './../../containers/MessageContainer'

class Cart extends Component {
  render () {
    const { children } = this.props
    return (
      <React.Fragment>
        <MessageContainer />

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
      </React.Fragment>
    )
  }
}

export default Cart
