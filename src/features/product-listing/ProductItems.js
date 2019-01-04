import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';





export default class ProductItems extends Component {

  render() {
      const {product} = this.props;
    return (
      <div className='product-list-item'>
          <Card>
              <CardImg height={150} src={product.image} alt="Card image cap" />
              <CardBody>
                  <CardTitle>{product.name}</CardTitle>
                  <CardSubtitle>${product.price}</CardSubtitle>
                  <CardText>{product.description}</CardText>
                  <Button color="primary" onClick={()=>this.onAddToCart(product)}>Add to cart</Button>{' '}
              </CardBody>
          </Card>

      </div>
    )
  }
  onAddToCart = (product) => {
      this.props.onAddToCart(product);
  }
}
