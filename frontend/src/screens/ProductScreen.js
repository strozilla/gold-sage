import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap'
import products from '../products'


const ProductScreen = () => {
    const {id} = useParams()
    let product = {products};
    return (
    <>
          <Link className='btn btn-light my-3' to='/'>
              GO BACK
          </Link>
             
              <Row>
                <Col md={4}>
                {products.filter(product => product.id === parseInt(id)).map((product) => (
                  
                      <div>
                          <Image src={product.image} alt={product.name} fluid rounded/>
                      </div>
                ))}
                
                </Col>
                <Col md={3}>
                {products.filter(product => product.id === parseInt(id)).map((product) => (
                  <ListGroup>
                    <ListGroupItem>
                      <h4>{product.name}</h4>
                      <h5>${product.price}</h5>
                    </ListGroupItem>
                    <ListGroupItem>{product.description}</ListGroupItem>
                  </ListGroup>
                  ))}
                </Col>
               </Row>
    </>
  )
}


export default ProductScreen